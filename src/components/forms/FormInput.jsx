import { getValidateOptions } from '@constant/validate';
import { FormControl, FormHelperText, Grid, InputLabel, OutlinedInput, useTheme } from '@mui/material';

const FormInput = (props) => {
  const theme = useTheme();
  const { id, label, required, errors = {}, register = () => {}, xs = 12, sm = 12, lg = 6, ...prop } = props;

  return (
    <Grid item xs={xs} sm={sm} lg={lg}>
      <FormControl fullWidth error={Boolean(errors && errors[id])} sx={{ ...theme.typography.customInput }}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <OutlinedInput {...register(id, required && getValidateOptions(required))} id={id} label={label} autoComplete={id} {...prop} />
        {errors && errors[id] && <FormHelperText error>{errors[id].message}</FormHelperText>}
      </FormControl>
    </Grid>
  );
};

export default FormInput;
