import { useGetApi } from '@/hooks';
import { addBlackListApi, detailBlackListApi, updateBlackListApi } from '@api';
import { FormInput, SubCard, FormUpdateDialog, FormSelect } from '@components';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { removeEqualPropObject } from '@utils';
import { statusMailError, typeService } from '@constant';

const defaultValues = { from: '', to: '', type_service: '', status: '' };
const Update = (props) => {
  const { visibled, setVisibled, setParams } = props;
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues
  });
  const detail = useGetApi(detailBlackListApi, { id: visibled }, {});

  useEffect(() => {
    if (typeof visibled === 'number') {
      for (const key in defaultValues) {
        if (Object.hasOwnProperty.call(defaultValues, key)) {
          setValue(key, detail[key] + '' || '');
        }
      }
    }
  }, [JSON.stringify(detail)]);

  const handleData = (data) => {
    if (typeof visibled === 'number') return { ...removeEqualPropObject(data, detail), id: visibled };
    else return data;
  };

  return (
    <FormUpdateDialog
      checked={typeof visibled === 'number'}
      title="địa chỉ chặn"
      visibled={visibled}
      setVisibled={setVisibled}
      setParams={setParams}
      handleSubmit={handleSubmit}
      actions={{ add: addBlackListApi, update: updateBlackListApi }}
      handleData={handleData}
      handleSuccess={() => {
        setParams((pre) => ({ ...pre, render: !pre.render }));
        reset();
      }}
    >
      <SubCard>
        <Grid container spacing={2}>
          <FormInput id="from" label="Địa chỉ gửi (*)" register={register} errors={errors} required />
          <FormInput id="to" label="Địa chỉ chặn (*)" register={register} errors={errors} required />
          <FormSelect
            id="type_service"
            label="Loại dịch vụ (*)"
            options={typeService}
            value={watch('type_service')}
            register={register}
            errors={errors}
            required
          />
          <FormSelect
            id="status"
            label="Trạng thái (*)"
            options={statusMailError}
            value={watch('status')}
            register={register}
            errors={errors}
            required
          />
        </Grid>
      </SubCard>
    </FormUpdateDialog>
  );
};

export default Update;
