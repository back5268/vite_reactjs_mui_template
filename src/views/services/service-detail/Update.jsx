import { useGetApi } from '@/hooks';
import { addServiceDetailApi, detailServiceDetailApi, updateServiceDetailApi } from '@api';
import { FormInput, SubCard, FormUpdateDialog, FormSelect, FormSwitch, KeyValues } from '@components';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { checkJson, removeEqualPropObject } from '@utils';
import { typeService } from '@constant';

const defaultValues = { name: '', service_id: '', type_service: '', status: true };
const Update = (props) => {
  const { visibled, setVisibled, setParams, services } = props;
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
  const detail = useGetApi(detailServiceDetailApi, { id: visibled }, {});
  const [data, setData] = useState([{ key: '', value: '' }]);

  useEffect(() => {
    if (typeof visibled === 'number') {
      for (const key in defaultValues) {
        if (Object.hasOwnProperty.call(defaultValues, key)) {
          if (key === 'status') setValue('status', detail.status === 1);
          else setValue(key, detail[key] + '' || '');
        }
      }
      if (detail.data) setData(checkJson(detail.data) || detail.data);
    }
  }, [JSON.stringify(detail)]);

  const handleData = (info) => {
    info.status = info.status ? 1 : 0;
    if (data && data[0]) info.data = data;
    if (typeof visibled === 'number') return { ...removeEqualPropObject(info, detail), id: visibled };
    else return info;
  };

  return (
    <FormUpdateDialog
      checked={typeof visibled === 'number'}
      title="dịch vụ"
      visibled={visibled}
      setVisibled={setVisibled}
      setParams={setParams}
      handleSubmit={handleSubmit}
      actions={{ add: addServiceDetailApi, update: updateServiceDetailApi }}
      handleData={handleData}
      handleSuccess={() => {
        setParams((pre) => ({ ...pre, render: !pre.render }));
        setData([{ key: '', value: '' }]);
        reset();
      }}
    >
      <SubCard>
        <Grid container spacing={2}>
          <FormInput id="name" label="Tên dịch vụ (*)" register={register} errors={errors} required />
          <FormSelect
            id="service_id"
            label="Nhà cung cấp (*)"
            options={services}
            value={watch('service_id')}
            register={register}
            errors={errors}
            required
          />
          <FormSelect
            id="type_service"
            label="Loại dịch vụ (*)"
            options={typeService}
            value={watch('type_service')}
            register={register}
            errors={errors}
            required
          />
          <FormSwitch checked={watch('status')} id="status" register={register} />
          <KeyValues data={data} setData={setData} />
        </Grid>
      </SubCard>
    </FormUpdateDialog>
  );
};

export default Update;
