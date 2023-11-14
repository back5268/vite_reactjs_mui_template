import { useGetApi, useGetParams } from '@/hooks';
import { Body, DataTable, Filters, FormInput, FormSelect, MainCard, TimeBody } from '@components';
import { useState } from 'react';
import Update from './Update';
import { countProjectApi, deleteProjectApi, listCompanyApi, listMyServiceApi, listProjectApi, updateProjectApi } from '@api';
import { status, typeService } from '@constant';

const Project = () => {
  const initParams = useGetParams();
  const [params, setParams] = useState(initParams);
  const [filter, setFilter] = useState({ key_search: '', my_service_id: '', company_id: '', status: '' });
  const [visibled, setVisibled] = useState(false);
  const data = useGetApi(listProjectApi, params, []);
  const count = useGetApi(countProjectApi, params, 0);
  const myServices = useGetApi(listMyServiceApi, false, []);
  const companies = useGetApi(listCompanyApi, false, []);

  const columns = [
    { field: 'name', label: 'Tên dự án' },
    { field: 'code', label: 'Mã dự án' },
    { label: 'Nhà cung cấp', body: (e) => Body(myServices, e.my_service_id) },
    { label: 'Công ty', body: (e) => Body(companies, e.company_id) },
    { label: 'Thời gian tạo', body: (e) => TimeBody(e.created_at) },
    { label: 'Thời gian cập nhật', body: (e) => TimeBody(e.updated_at) },
    { label: 'Trạng thái', field: 'status', updateStatus: (e) => updateProjectApi({ status: e.status, id: e.id }) }
  ];

  return (
    <MainCard title="Danh sách dự án">
      {visibled && <Update visibled={visibled} setVisibled={setVisibled} setParams={setParams} myServices={myServices} />}
      <Filters setParams={setParams} filter={filter} setFilter={setFilter} sm={12} lg={12}>
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
          label="Ứng dụng"
          options={myServices}
          value={filter.my_service_id}
          onChange={(e) => setFilter({ ...filter, my_service_id: e.target.value, company_id: '' })}
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
        actionInfo={{ deleteAction: deleteProjectApi }}
      />
    </MainCard>
  );
};

export default Project;
