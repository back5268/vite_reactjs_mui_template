import { useGetApi } from '@/hooks';
import { addServiceApi, detailServiceApi, updateServiceApi } from '@api';
import { FormInput, SubCard, FormUpdateDialog, FormSelect, FormSwitch, KeyValues } from '@components';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { checkJson, removeEqualPropObject } from '@utils';
import { typeService } from '@constant';

const defaultValues = { name: '', domain: '', type_service: '', status: true };
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
  const detail = useGetApi(detailServiceApi, { id: visibled }, {});
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
      title="nhà cung cấp"
      visibled={visibled}
      setVisibled={setVisibled}
      setParams={setParams}
      handleSubmit={handleSubmit}
      actions={{ add: addServiceApi, update: updateServiceApi }}
      handleData={handleData}
      handleSuccess={() => {
        setParams((pre) => ({ ...pre, render: !pre.render }));
        setData([{ key: '', value: '' }]);
        reset(defaultValues);
      }}
    >
      <SubCard>
        <Grid container spacing={2}>
          <FormInput id="name" label="Tên nhà cung cấp (*)" register={register} errors={errors} required />
          <FormInput id="domain" label="Tên miền nhà cung cấp (*)" register={register} errors={errors} required />
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
        </Grid>
        <KeyValues data={data} setData={setData} />
      </SubCard>
    </FormUpdateDialog>
  );
};

export default Update;
