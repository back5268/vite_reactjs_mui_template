import { useGetApi, useGetParams } from '@/hooks';
import { Body, DataTable, Filters, FormInput, FormSelect, MainCard, TimeBody, TypeServiceBody } from '@components';
import { useState } from 'react';
import Update from './Update';
import { countTemplateApi, deleteTemplateApi, listCategoryTemplateApi, listCompanyApi, listTemplateApi, updateTemplateApi } from '@api';
import { status, typeService } from '@constant';

const CategoryTemplate = () => {
  const initParams = useGetParams();
  const [params, setParams] = useState(initParams);
  const [filter, setFilter] = useState({ key_search: '', category_template_id: '', company_id: '', type: '', status: '' });
  const [visibled, setVisibled] = useState(false);
  const data = useGetApi(listTemplateApi, params, []);
  const count = useGetApi(countTemplateApi, params, 0);
  const categoryTemplates = useGetApi(listCategoryTemplateApi, false, []);
  const companies = useGetApi(listCompanyApi, false, []);

  const columns = [
    { label: 'Loại thông báo', body: (e) => Body(categoryTemplates, e.category_template_id) },
    { label: 'Công ty', body: (e) => Body(companies, e.company_id) },
    { field: 'name', label: 'Mẫu thông báo' },
    { field: 'code', label: 'Mã mẫu thông báo' },
    { label: 'Kiểu dịch vụ', body: (e) => TypeServiceBody(e.type) },
    { label: 'Thời gian tạo', body: (e) => TimeBody(e.created_at) },
    { label: 'Thời gian cập nhật', body: (e) => TimeBody(e.updated_at) },
    { label: 'Trạng thái', field: 'status', updateStatus: (e) => updateTemplateApi({ status: e.status, id: e.id }) }
  ];

  return (
    <MainCard title="Danh sách mẫu thông báo">
      {visibled && (
        <Update
          visibled={visibled}
          setVisibled={setVisibled}
          setParams={setParams}
          categoryTemplates={categoryTemplates}
          companies={companies}
        />
      )}
      <Filters setParams={setParams} filter={filter} setFilter={setFilter} sm={6} lg={9}>
        <FormInput
          lg={3}
          sm={6}
          label="Tìm kiếm theo mẫu, mã thông báo"
          value={filter.key_search}
          onChange={(e) => setFilter({ ...filter, key_search: e.target.value })}
        />
        <FormSelect
          lg={3}
          sm={6}
          label="Loại thông báo"
          options={categoryTemplates}
          value={filter.category_template_id}
          onChange={(e) => setFilter({ ...filter, category_template_id: e.target.value })}
        />
        <FormSelect
          lg={3}
          sm={6}
          label="Công ty"
          options={companies}
          value={filter.company_id}
          onChange={(e) => setFilter({ ...filter, company_id: e.target.value })}
        />
        <FormSelect
          lg={3}
          sm={6}
          label="Kiểu dịch vụ"
          options={typeService}
          value={filter.type}
          onChange={(e) => setFilter({ ...filter, type: e.target.value })}
        />
        <FormSelect
          lg={3}
          sm={6}
          label="Trạng thái"
          options={status}
          value={filter.status}
          onChange={(e) => setFilter({ ...filter, status: e.target.value })}
        />
      </Filters>
      <DataTable
        params={params}
        setParams={setParams}
        count={count}
        items={data}
        columns={columns}
        setVisibleDialog={setVisibled}
        headerInfo
        actionInfo={{ deleteAction: deleteTemplateApi }}
      />
    </MainCard>
  );
};

export default CategoryTemplate;
