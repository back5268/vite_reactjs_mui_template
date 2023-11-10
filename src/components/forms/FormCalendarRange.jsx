import React from 'react';
import { TextField, Popover, InputAdornment, IconButton } from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { withStyles } from '@material-ui/styles';
import moment from 'moment';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const styles = {
  calendarWrapper: {
    padding: '16px'
  }
};

class DateRangePicker extends React.Component {
  dateFormat = 'DD/MM/YYYY';

  state = {
    displayCalendar: false,
    inputValue: '',
    anchorEl: null,
    fromDate: undefined,
    toDate: undefined
  };

  onAdornmentClick = (e) => {
    this.setState({ displayCalendar: true, anchorEl: e.currentTarget });
  };

  onInputChange = (e) => {
    const inputValue = e.target.value;
    const { fromDate, toDate } = this.processInputValue(inputValue);

    this.setState({ inputValue, fromDate, toDate });
  };

  onPopoverClose = (e, reason) => {
    console.log(reason);
    this.setState({ displayCalendar: false, anchorEl: null });
  };

  onSelectDateRanges = ({ selection }) => {
    let { startDate, endDate } = selection;

    startDate = moment(startDate);
    startDate = startDate.isValid() ? startDate.toDate() : undefined;

    endDate = moment(endDate);
    endDate = endDate.isValid() ? endDate.toDate() : undefined;

    let inputValue = '';
    if (startDate) inputValue += moment(startDate).format(this.dateFormat);
    if (endDate) inputValue += ' - ' + moment(endDate).format(this.dateFormat);

    this.setState({ fromDate: startDate, toDate: endDate, inputValue });
  };

  processInputValue(value) {
    let [fromDate, toDate] = value.split('-').map((elm) => elm.trim());

    fromDate = moment(fromDate, this.dateFormat);
    fromDate = fromDate.isValid() ? fromDate.toDate() : undefined;

    toDate = moment(toDate, this.dateFormat);
    toDate = toDate.isValid() ? toDate.toDate() : undefined;

    return { fromDate, toDate };
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <TextField
          label="Date Time Picker"
          fullWidth={true}
          value={this.state.inputValue}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={this.onAdornmentClick}>
                  <DateRangeIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
          onChange={this.onInputChange}
        />
        <Popover
          open={this.state.displayCalendar}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          onClose={this.onPopoverClose}
        >
          <div className={classes.calendarWrapper}>
            <DateRange
              ranges={[
                {
                  startDate: this.state.fromDate,
                  endDate: this.state.toDate,
                  key: 'selection'
                }
              ]}
              onChange={this.onSelectDateRanges}
              staticRanges={undefined}
              inputRanges={undefined}
              maxDate={new Date()}
              showMonthAndYearPickers={true}
              moveRangeOnFirstSelection={false}
              showDateDisplay={false}
              scroll={{ enabled: true }}
            />
          </div>
        </Popover>
      </div>
    );
  }
}

export default withStyles(styles, { name: 'DateRangePicker' })(DateRangePicker);
