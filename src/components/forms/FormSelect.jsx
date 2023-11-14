import { getValidateOptions } from '@constant';
import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, OutlinedInput, Select, Typography, useTheme } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const FormSelect = (props) => {
  const theme = useTheme();
  const {
    id,
    label,
    options = [],
    optionLabel,
    optionValue,
    required,
    errors = {},
    register = () => {},
    xs = 12,
    sm = 12,
    lg = 6,
    ...prop
  } = props;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
      }
    }
  };

  return (
    <Grid item xs={xs} sm={sm} lg={lg}>
      <FormControl fullWidth error={Boolean(errors && errors[id])} sx={{ ...theme.typography.customInput }}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Select
          {...register(id, required && getValidateOptions())}
          input={<OutlinedInput id={id} label={label} />}
          MenuProps={MenuProps}
          defaultValue=""
          {...prop}
        >
          {options[0] ? (
            options.map((o, index) => (
              <MenuItem key={index} value={o[optionValue] || (o.id === 0 ? 0 : o.id || o)} style={{ height: '40px' }}>
                {o[optionLabel] || o.name || o}
              </MenuItem>
            ))
          ) : (
            <MenuItem value="" style={{ height: '40px' }}>
              Không tìm thấy dữ liệu
            </MenuItem>
          )}
        </Select>
        {errors && errors[id] && <FormHelperText error>{errors[id].message}</FormHelperText>}
      </FormControl>
    </Grid>
  );
};

export default FormSelect;
