import { useGetApi } from '@/hooks';
import { addProjectApi, detailProjectApi, listCompanyApi, updateProjectApi } from '@api';
import { FormInput, SubCard, FormUpdateDialog, FormSelect, FormSwitch } from '@components';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { removeEqualPropObject } from '@utils';

const defaultValues = { name: '', code: '', my_service_id: '', company_id: '', status: true };
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
  const detail = useGetApi(detailProjectApi, { id: visibled }, {});
  const companies = useGetApi(listCompanyApi, { my_service_id: watch('my_service_id') }, []);

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
      title="dự án"
      visibled={visibled}
      setVisibled={setVisibled}
      setParams={setParams}
      handleSubmit={handleSubmit}
      actions={{ add: addProjectApi, update: updateProjectApi }}
      handleData={handleData}
      handleSuccess={() => {
        setParams((pre) => ({ ...pre, render: !pre.render }));
        reset(defaultValues);
      }}
    >
      <SubCard>
        <Grid container spacing={2}>
          <FormInput id="name" label="Tên dự án (*)" register={register} errors={errors} required />
          <FormInput id="code" label="Mã dự án (*)" register={register} errors={errors} required />
          <FormSelect
            id="my_service_id"
            label="Nhà cung cấp (*)"
            options={myServices}
            value={watch('my_service_id')}
            onChange={(e) => {
              setValue('my_service_id', e.target.value);
              setValue('company_id', '');
            }}
            register={register}
            errors={errors}
            required
          />
          <FormSelect
            id="company_id"
            label="Công ty (*)"
            options={watch('my_service_id') ? companies : []}
            value={watch('company_id')}
            register={register}
            errors={errors}
            required
          />
          <FormSwitch checked={watch('status')} id="status" register={register} />
        </Grid>
      </SubCard>
    </FormUpdateDialog>
  );
};

export default Update;
