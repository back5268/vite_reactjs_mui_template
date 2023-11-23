import { useGetApi } from '@/hooks';
import { addServiceUseApi, detailServiceUseApi, listCompanyApi, listProjectApi, updateServiceUseApi } from '@api';
import { SubCard, FormUpdateDialog, FormSelect, FormInput } from '@components';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { removeEqualPropObject } from '@utils';

const defaultValues = { company_id: '', project_id: '', service_detail_id: '', my_service_id: '', token: '' };
const Update = (props) => {
  const { visibled, setVisibled, setParams, serviceDetails, myServices } = props;
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
  const companies = useGetApi(listCompanyApi, { my_service_id: watch('my_service_id') }, []);
  const projects = useGetApi(listProjectApi, { my_service_id: watch('my_service_id'), company_id: watch('company_id') }, []);
  const detail = useGetApi(detailServiceUseApi, { id: visibled }, {});

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
      actions={{ add: addServiceUseApi, update: updateServiceUseApi }}
      handleData={handleData}
      handleSuccess={() => {
        setParams((pre) => ({ ...pre, render: !pre.render }));
        reset(defaultValues);
      }}
    >
      <SubCard>
        <Grid container spacing={2}>
          <FormSelect
            id="service_detail_id"
            label="Dịch vụ (*)"
            options={serviceDetails}
            value={watch('service_detail_id')}
            register={register}
            errors={errors}
            required
          />
          <FormSelect
            id="my_service_id"
            label="Ứng dụng (*)"
            options={myServices}
            value={watch('my_service_id')}
            onChange={(e) => {
              setValue('my_service_id', e.target.value);
              setValue('company_id', '');
              setValue('project_id', '');
            }}
            register={register}
            errors={errors}
            required
          />
          <FormSelect
            id="company_id"
            label="Công ty"
            options={watch('my_service_id') ? companies : []}
            value={watch('company_id')}
            onChange={(e) => {
              setValue('company_id', e.target.value);
              setValue('project_id', '');
            }}
            register={register}
            errors={errors}
          />
          <FormSelect
            id="project_id"
            label="Dự án"
            options={watch('company_id') ? projects : []}
            value={watch('project_id')}
            register={register}
            errors={errors}
          />
          {typeof visibled == 'number' && <FormInput label="Token" value={watch("token")} errors={errors} lg={12} multiline rows={6} />}
        </Grid>
      </SubCard>
    </FormUpdateDialog>
  );
};

export default Update;
