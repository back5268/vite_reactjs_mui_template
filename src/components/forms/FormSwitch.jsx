import { FormControl, FormControlLabel, Grid, Switch } from '@mui/material';

const FormSwitch = (props) => {
  const { id, label, register, xs = 12, sm = 12, lg = 6, ...prop } = props;

  return (
    <Grid item xs={xs} sm={sm} lg={lg}>
      <FormControl>
        <FormControlLabel
          control={<Switch color="primary" {...register(id)} />}
          label={label || 'Trạng thái'}
          labelPlacement="top"
          {...prop}
        />
      </FormControl>
    </Grid>
  );
};

export default FormSwitch;
