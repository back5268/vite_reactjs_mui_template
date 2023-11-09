import { useGetApi } from '@/hooks';
import { addUserApi, detailUserApi, updateUserApi } from '@api';
import { FormInput, SubCard, FormUpdateDialog, FormCalendar } from '@components';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { removeEqualPropObject } from '@utils';
import FormSwitch from '@/components/forms/FormSwitch';

const initValue = ['email', 'phone'];
const Update = (props) => {
  const { visibled, setVisibled, setParams } = props;
  const detail = useGetApi(detailUserApi, { id: visibled }, {});
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: { status: true, time: null }
  });

  useEffect(() => {
    if (detail && typeof visibled === 'number') {
      initValue.forEach((i) => {
        setValue(i, detail[i] + '');
      });
      setValue('status', detail.status === 1);
    }
  }, [JSON.stringify(detail)]);

  const handleData = (data) => {
    console.log(data);
    if (data.password && data.password !== data.confirm_password)
      setError('confirm_password', { type: 'required', message: 'Mật khẩu nhập lại không chính xác' });
    if (!data.time) setValue('time', '');
    else if (typeof visibled === 'number') return { ...removeEqualPropObject(data, detail), id: visibled };
    else return data;
  };

  return (
    <FormUpdateDialog
      checked={typeof visibled === 'number'}
      title="người dùng"
      visibled={visibled}
      setVisibled={setVisibled}
      setParams={setParams}
      handleSubmit={handleSubmit}
      actions={{ add: addUserApi, update: updateUserApi }}
      handleData={handleData}
      handleSuccess={() => {
        setParams((pre) => ({ ...pre, render: !pre.render }));
        reset();
      }}
    >
      <SubCard>
        <Grid container spacing={2}>
          <FormInput id="email" label="Email (*)" register={register} errors={errors} required="email" />
          <FormInput id="phone" label="Số điện thoại (*)" register={register} errors={errors} required="phone" />
          <FormInput
            id="password"
            label="Mật khẩu (*)"
            register={register}
            errors={errors}
            type="password"
            required={typeof visibled === 'number' ? false : 'password'}
          />
          <FormInput
            id="confirm_password"
            label="Nhập lại mật khẩu (*)"
            register={register}
            errors={errors}
            type="password"
            required={typeof visibled === 'number' ? false : 'password'}
          />
          <FormCalendar label="time" id={'time'} value={watch('time')} setValue={setValue} />
          <FormSwitch checked={watch('status')} id="status" register={register} />
        </Grid>
      </SubCard>
    </FormUpdateDialog>
  );
};

export default Update;
