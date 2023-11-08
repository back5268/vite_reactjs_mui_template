import { FormControl, Grid, InputLabel, OutlinedInput } from '@mui/material';

const FormInputFilter = (props) => {
  const { id, label, lg = 3, ...prop } = props;

  return (
    <Grid item xs={12} lg={lg}>
      <FormControl fullWidth>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <OutlinedInput id={id} label={label} autoComplete={id} {...prop} />
      </FormControl>
    </Grid>
  );
};

export default FormInputFilter;
