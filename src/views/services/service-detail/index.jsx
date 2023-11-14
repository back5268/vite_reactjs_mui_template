import { useGetApi, useGetParams } from '@/hooks';
import { Body, DataTable, Filters, FormInput, FormSelect, MainCard, TimeBody, TypeServiceBody } from '@components';
import { useState } from 'react';
import Update from './Update';
import {
  countServiceDetailApi,
  deleteServiceDetailApi,
  listServiceApi,
  listServiceDetailApi,
  listUserApi,
  updateServiceDetailApi
} from '@api';
import { status, typeService } from '@constant';

const ServiceDetail = () => {
  const initParams = useGetParams();
  const [params, setParams] = useState(initParams);
  const [filter, setFilter] = useState({ key_search: '', type_service: '', status: '', service_id: '', by: '' });
  const [visibled, setVisibled] = useState(false);
  const data = useGetApi(listServiceDetailApi, params, []);
  const count = useGetApi(countServiceDetailApi, params, 0);
  const services = useGetApi(listServiceApi, false, []);
  const users = useGetApi(listUserApi, false, []);

  const columns = [
    { field: 'name', label: 'Tên dịch vụ' },
    { label: 'Người tạo', body: (e) => Body(users, e.by, 'email') },
    { label: 'Kiểu dịch vụ', body: (e) => Body(typeService, e.type_service) },
    { label: 'Nhà cung cấp', body: (e) => Body(services, e.service_id) },
    { label: 'Loại dịch vụ', body: (e) => TypeServiceBody(e.type_service) },
    { label: 'Thời gian tạo', body: (e) => TimeBody(e.created_at) },
    { label: 'Thời gian cập nhật', body: (e) => TimeBody(e.updated_at) },
    { label: 'Trạng thái', field: 'status', updateStatus: (e) => updateServiceDetailApi({ status: e.status, id: e.id }) }
  ];

  return (
    <MainCard title="Danh sách dịch vụ">
      {visibled && <Update visibled={visibled} setVisibled={setVisibled} setParams={setParams} services={services} />}
      <Filters setParams={setParams} filter={filter} setFilter={setFilter} sm={6} lg={9}>
        <FormInput
          lg={3}
          sm={6}
          label="Tìm kiếm theo tên"
          value={filter.key_search}
          onChange={(e) => setFilter({ ...filter, key_search: e.target.value })}
        />
        <FormSelect
          lg={3}
          sm={6}
          label="Người tạo"
          options={users}
          optionLabel="email"
          value={filter.by}
          onChange={(e) => setFilter({ ...filter, by: e.target.value })}
        />
        <FormSelect
          lg={3}
          sm={6}
          label="Nhà cung cấp"
          options={services}
          value={filter.service_id}
          onChange={(e) => setFilter({ ...filter, service_id: e.target.value })}
        />
        <FormSelect
          lg={3}
          sm={6}
          label="Kiểu dịch vụ"
          options={typeService}
          value={filter.type_service}
          onChange={(e) => setFilter({ ...filter, type_service: e.target.value })}
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
        actionInfo={{ deleteAction: deleteServiceDetailApi }}
      />
    </MainCard>
  );
};

export default ServiceDetail;
