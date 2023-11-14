import { useGetApi, useGetParams } from '@/hooks';
import { Body, DataTable, Filters, FormInput, FormSelect, MainCard, TimeBody } from '@components';
import { useState } from 'react';
import Update from './Update';
import {
  countCategoryTemplateApi,
  deleteCategoryTemplateApi,
  listCategoryTemplateApi,
  listCompanyApi,
  listMyServiceApi,
  updateCategoryTemplateApi
} from '@api';
import { status } from '@constant';

const CategoryTemplate = () => {
  const initParams = useGetParams();
  const [params, setParams] = useState(initParams);
  const [filter, setFilter] = useState({ key_search: '' });
  const [visibled, setVisibled] = useState(false);
  const data = useGetApi(listCategoryTemplateApi, params, []);
  const count = useGetApi(countCategoryTemplateApi, params, 0);
  const myServices = useGetApi(listMyServiceApi, params, []);

  const columns = [
    { field: 'name', label: 'Tên loại thông báo' },
    { field: 'code', label: 'Mã loại thông báo' },
    { label: 'Ứng dụng', body: (e) => Body(myServices, e.my_service_id) },
    { label: 'Thời gian tạo', body: (e) => TimeBody(e.created_at) },
    { label: 'Thời gian cập nhật', body: (e) => TimeBody(e.updated_at) },
    { label: 'Trạng thái', field: 'status', updateStatus: (e) => updateCategoryTemplateApi({ status: e.status, id: e.id }) }
  ];

  return (
    <MainCard title="Danh sách loại thông báo">
      {visibled && <Update visibled={visibled} setVisibled={setVisibled} setParams={setParams} myServices={myServices} />}
      <Filters setParams={setParams} filter={filter} setFilter={setFilter} sm={6}>
        <FormInput
          lg={3}
          sm={6}
          label="Tìm kiếm theo tên, mã"
          value={filter.key_search}
          onChange={(e) => setFilter({ ...filter, key_search: e.target.value })}
        />
        <FormSelect
          lg={3}
          sm={6}
          label="Nhà cung cấp"
          options={myServices}
          value={filter.my_service_id}
          onChange={(e) => setFilter({ ...filter, my_service_id: e.target.value })}
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
        actionInfo={{ deleteAction: deleteCategoryTemplateApi }}
      />
    </MainCard>
  );
};

export default CategoryTemplate;
