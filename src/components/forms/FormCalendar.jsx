import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { FormControl, Grid } from '@mui/material';
import { useTheme } from '@emotion/react';
import dayjs from 'dayjs';

export const FormCalendar = (props) => {
  const theme = useTheme();
  const { id, label, type = 'date-time', setValue = () => {}, xs = 12, sm = 12, lg = 6, ...prop } = props;

  return (
    <Grid item xs={xs} sm={sm} lg={lg}>
      <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {type === 'date-time' && (
            <DateTimePicker
              label={label}
              onChange={(e) => {
                setValue(id, dayjs(e.$d).format('YYYY-MM-DD HH:mm:ss'));
              }}
              {...prop}
            />
          )}
          {type === 'date' && (
            <DateTimePicker
              label={label}
              onChange={(e) => {
                setValue(id, dayjs(e.$d).format('YYYY-MM-DD'));
              }}
              {...prop}
            />
          )}
          {type === 'time' && (
            <DateTimePicker
              label={label}
              onChange={(e) => {
                setValue(id, dayjs(e.$d).format(' HH:mm:ss'));
              }}
              {...prop}
            />
          )}
        </LocalizationProvider>
      </FormControl>
    </Grid>
  );
};
