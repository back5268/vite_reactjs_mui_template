import { sendSMSApi } from '@api';
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
      actions={{ add: sendSMSApi }}
      handleSuccess={() => {
        reset(defaultValues);
      }}
    >
      <SubCard>
        <Grid container spacing={2}>
          <FormInput id="to" label="Người nhận (*)" register={register} errors={errors} required="phone" />
          <FormInput id="template_code" label="Mã mẫu thông báo (*)" register={register} errors={errors} required />
          <FormInput id="token" label="Mã xác nhận (*)" register={register} errors={errors} required multiline rows={6} lg={12} />
          <FormInput id="param_sms" label="Params (*)" register={register} errors={errors} required multiline rows={6} lg={12} />
        </Grid>
      </SubCard>
    </FormUpdate>
  );
};

export default Sms;
