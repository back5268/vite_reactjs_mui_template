import { useGetApi } from '@/hooks';
import { addTemplateApi, detailTemplateApi, updateTemplateApi } from '@api';
import { FormInput, SubCard, FormUpdateDialog, FormSelect, FileUpload, FormSwitch, TinyMceEditor, Avatar } from '@components';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { removeEqualPropObject } from '@utils';
import { typeService } from '@constant';

const defaultValues = { name: '', code: '', type: '', href: '', category_template_id: '', company_id: '', status: true };
const Update = (props) => {
  const { visibled, setVisibled, setParams, categoryTemplates, companies } = props;
  const [files, setFiles] = useState([]);
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
  const detail = useGetApi(detailTemplateApi, { id: visibled }, {});
  const [data, setData] = useState(null);

  useEffect(() => {
    if (typeof visibled === 'number') {
      for (const key in defaultValues) {
        if (Object.hasOwnProperty.call(defaultValues, key)) {
          if (key === 'status') setValue('status', detail.status === 1);
          else setValue(key, detail[key] + '' || '');
        }
      }
      if (detail.id && detail.avatar) {
        setFiles([detail.avatar]);
      }
      if (detail.id && detail.content) {
        setData(detail.content);
      }
    }
  }, [JSON.stringify(detail)]);

  const handleData = (info) => {
    if (files && files[0]) info.files = { avatar: files[0] };
    if (data) info.content = data;
    info.status = info.status ? 1 : 0;
    if (typeof visibled === 'number') return { ...removeEqualPropObject(info, detail), id: visibled };
    else return info;
  };

  return (
    <FormUpdateDialog
      checked={typeof visibled === 'number'}
      title="mẫu thông báo"
      visibled={visibled}
      setVisibled={setVisibled}
      setParams={setParams}
      handleSubmit={handleSubmit}
      actions={{ add: addTemplateApi, update: updateTemplateApi }}
      handleData={handleData}
      handleSuccess={() => {
        setParams((pre) => ({ ...pre, render: !pre.render }));
        setFiles([]);
        setData(null);
        reset(defaultValues);
      }}
    >
      <SubCard>
        <Grid container spacing={2}>
          <FormInput id="name" label="Tên mẫu thông báo (*)" register={register} errors={errors} required />
          <FormInput id="code" label="Mã mẫu thông báo (*)" register={register} errors={errors} required />
          <FormSelect
            id="type"
            label="Loại dịch vụ (*)"
            options={typeService}
            value={watch('type')}
            register={register}
            errors={errors}
            required
          />
          <FormSelect
            id="category_template_id"
            label="Loại thông báo (*)"
            options={categoryTemplates}
            value={watch('category_template_id')}
            register={register}
            errors={errors}
            required
          />
          <FormSelect
            id="company_id"
            label="Công ty (*)"
            options={companies}
            value={watch('company_id')}
            register={register}
            errors={errors}
            required
          />
          <FormInput id="href" label="Đường dẫn quảng cáo" register={register} errors={errors} />
          <FileUpload title="Ảnh quảng cáo chân trang" files={files} setFiles={setFiles} />
          <FormSwitch checked={watch('status')} id="status" register={register} />
        </Grid>
        <TinyMceEditor value={data} setValue={setData} />
      </SubCard>
    </FormUpdateDialog>
  );
};

export default Update;
