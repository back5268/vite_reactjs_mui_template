import { useGetApi, useGetParams } from '@/hooks';
import { Body, DataTable, Filters, FormInput, FormSelect, MainCard, TimeBody } from '@components';
import { useState } from 'react';
import Update from './Update';
import {
  countServiceUseApi,
  deleteServiceUseApi,
  listCompanyApi,
  listMyServiceApi,
  listProjectApi,
  listServiceDetailApi,
  listServiceUseApi
} from '@api';

const ServiceUse = () => {
  const initParams = useGetParams();
  const [params, setParams] = useState(initParams);
  const [filter, setFilter] = useState({ service_detail_id: '', my_service_id: '', company_id: '', project_id: '' });
  const [visibled, setVisibled] = useState(false);
  const data = useGetApi(listServiceUseApi, params, []);
  const count = useGetApi(countServiceUseApi, params, 0);
  const serviceDetails = useGetApi(listServiceDetailApi, false, []);
  const myServices = useGetApi(listMyServiceApi, false, []);
  const companies = useGetApi(listCompanyApi, false, []);
  const projects = useGetApi(listProjectApi, false, []);

  const columns = [
    { label: 'Dịch vụ', body: (e) => Body(serviceDetails, e.service_detail_id) },
    { label: 'Ứng dụng', body: (e) => Body(myServices, e.my_service_id) },
    { label: 'Công ty', body: (e) => Body(companies, e.company_id) },
    { label: 'Dự án', body: (e) => Body(projects, e.project_id) },
    { label: 'Thời gian tạo', body: (e) => TimeBody(e.created_at) },
    { label: 'Thời gian cập nhật', body: (e) => TimeBody(e.updated_at) }
  ];

  return (
    <MainCard title="Danh sách dịch vụ sử dụng">
      {visibled && (
        <Update
          visibled={visibled}
          setVisibled={setVisibled}
          setParams={setParams}
          serviceDetails={serviceDetails}
          myServices={myServices}
          companies={companies}
          projects={projects}
        />
      )}
      <Filters setParams={setParams} filter={filter} setFilter={setFilter} sm={12} lg={12}>
        <FormSelect
          lg={3}
          sm={6}
          label="Dịch vụ"
          options={serviceDetails}
          value={filter.service_detail_id}
          onChange={(e) => setFilter({ ...filter, service_detail_id: e.target.value })}
        />
        <FormSelect
          lg={3}
          sm={6}
          label="Ứng dụng"
          options={myServices}
          value={filter.my_service_id}
          onChange={(e) => setFilter({ ...filter, my_service_id: e.target.value, company_id: '', project_id: '' })}
        />
        <FormSelect
          lg={3}
          sm={6}
          label="Công ty"
          options={companies}
          value={filter.company_id}
          onChange={(e) => setFilter({ ...filter, company_id: e.target.value, project_id: '' })}
        />
        <FormSelect
          lg={3}
          sm={6}
          label="Dự án"
          options={projects}
          value={filter.project_id}
          onChange={(e) => setFilter({ ...filter, project_id: e.target.value })}
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
        actionInfo={{ deleteAction: deleteServiceUseApi }}
      />
    </MainCard>
  );
};

export default ServiceUse;
