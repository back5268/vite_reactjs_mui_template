import { FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const FormSelectFilter = (props) => {
  const { id, label, options = [], optionLabel, optionValue, lg = 3, ...prop } = props;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
      }
    }
  };

  return (
    <Grid item xs={12} sm={6} lg={lg}>
      <FormControl fullWidth>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Select input={<OutlinedInput id={id} label={label} />} MenuProps={MenuProps} defaultValue="" {...prop}>
          {options[0] ? options.map((o, index) => (
            <MenuItem key={index} value={o[optionValue] || o.id || o} style={{ height: '40px' }}>
              {o[optionLabel] || o.name || o}
            </MenuItem>
          )) : <Typography variant='h6' mt={1} mb={1} ml={2}>Không tìm thấy dữ liệu</Typography>}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default FormSelectFilter;
