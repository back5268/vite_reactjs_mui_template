import { addCompanyApi } from '@api';
import { FormInput, SubCard, FormUpdate } from '@components';
import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

const defaultValues = { name: '', template_code: '', token: '', params_mail: '' };
const Sms = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues
  });

  return (
    <FormUpdate
      checked={false}
      title="sms"
      handleSubmit={handleSubmit}
      actions={{ add: addCompanyApi }}
      handleSuccess={() => {
        setParams((pre) => ({ ...pre, render: !pre.render }));
        reset();
      }}
    >
      <SubCard>
        <Grid container spacing={2}>
          <FormInput id="to" label="Người nhận (*)" register={register} errors={errors} required="phone" />
          <FormInput id="template_code" label="Mã mẫu thông báo (*)" register={register} errors={errors} required />
          <FormInput id="token" label="Mã xác nhận (*)" register={register} errors={errors} required />
          <FormInput id="params_sms" label="Params (*)" register={register} errors={errors} required multiline rows={6} />
        </Grid>
      </SubCard>
    </FormUpdate>
  );
};

export default Sms;
