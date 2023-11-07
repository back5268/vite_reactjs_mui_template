import { getValidateOptions } from '@constant/validate';
import { FormControl, FormHelperText, InputLabel, OutlinedInput, useTheme } from '@mui/material';

const FormInput = (props) => {
  const theme = useTheme();
  const { id, label, required, errors, register, ...prop } = props;

  return (
    <FormControl fullWidth error={Boolean(errors && errors[id])} sx={{ ...theme.typography.customInput }}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput {...register(id, required && getValidateOptions(required))} id={id} label={label} autoComplete={id} {...prop} />
      {errors && errors[id] && <FormHelperText error>{errors[id].message}</FormHelperText>}
    </FormControl>
  );
};

export default FormInput;
