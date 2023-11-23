import { useGetApi } from '@/hooks';
import { addCategoryTemplateApi, detailCategoryTemplateApi, updateCategoryTemplateApi } from '@api';
import { FormInput, SubCard, FormUpdateDialog, FormSwitch, FormSelect } from '@components';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { removeEqualPropObject } from '@utils';

const defaultValues = { status: true, name: '', code: '', my_service_id: '' };
const Update = (props) => {
  const { visibled, setVisibled, setParams, myServices } = props;
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
  const detail = useGetApi(detailCategoryTemplateApi, { id: visibled }, {});

  useEffect(() => {
    if (typeof visibled === 'number') {
      for (const key in defaultValues) {
        if (Object.hasOwnProperty.call(defaultValues, key)) {
          if (key === 'status') setValue('status', detail.status === 1);
          else setValue(key, detail[key] + '' || '');
        }
      }
    }
  }, [JSON.stringify(detail)]);

  const handleData = (info) => {
    info.status = info.status ? 1 : 0;
    if (typeof visibled === 'number') return { ...removeEqualPropObject(info, detail), id: visibled };
    else return info;
  };

  return (
    <FormUpdateDialog
      checked={typeof visibled === 'number'}
      title="loại thông báo"
      visibled={visibled}
      setVisibled={setVisibled}
      setParams={setParams}
      handleSubmit={handleSubmit}
      actions={{ add: addCategoryTemplateApi, update: updateCategoryTemplateApi }}
      handleData={handleData}
      handleSuccess={() => {
        setParams((pre) => ({ ...pre, render: !pre.render }));
        reset(defaultValues);
      }}
    >
      <SubCard>
        <Grid container spacing={2}>
          <FormInput id="name" label="Tên loại thông báo (*)" register={register} errors={errors} required />
          <FormInput id="code" label="Mã loại thông báo (*)" register={register} errors={errors} required />
          <FormSelect
            id="my_service_id"
            label="Ứng dụng (*)"
            options={myServices}
            value={watch('my_service_id')}
            register={register}
            errors={errors}
            onChange={(e) => {
              setValue('company_id', ''), setValue('my_service_id', e.target.value);
            }}
            required
          />
          <FormSwitch checked={watch('status')} id="status" register={register} />
        </Grid>
      </SubCard>
    </FormUpdateDialog>
  );
};

export default Update;
