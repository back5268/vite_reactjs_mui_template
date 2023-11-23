import { sendMailApi } from '@api';
import { FormInput, SubCard, FormUpdate } from '@components';
import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

const defaultValues = { name: '', template_code: '', token: '', params_mail: '' };
const Mail = () => {
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
      title="mail"
      handleSubmit={handleSubmit}
      actions={{ add: sendMailApi }}
      handleSuccess={() => {
        reset(defaultValues);
      }}
    >
      <SubCard>
        <Grid container spacing={2}>
          <FormInput id="to" label="Người nhận (*)" register={register} errors={errors} required="mail" />
          <FormInput id="template_code" label="Mã mẫu thông báo (*)" register={register} errors={errors} required />
          <FormInput id="token" label="Mã xác nhận (*)" register={register} errors={errors} required multiline rows={6} lg={12} />
          <FormInput id="param_mail" label="Params (*)" register={register} errors={errors} required multiline rows={6} lg={12} />
        </Grid>
      </SubCard>
    </FormUpdate>
  );
};

export default Mail;
