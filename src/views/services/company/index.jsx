import { useGetApi, useGetParams } from '@/hooks';
import { Body, DataTable, Filters, FormInput, FormSelect, MainCard, TimeBody } from '@components';
import { useState } from 'react';
import Update from './Update';
import { countCompanyApi, deleteCompanyApi, listCompanyApi, listMyServiceApi, updateCompanyApi } from '@api';
import { status } from '@constant';

const Company = () => {
  const initParams = useGetParams();
  const [params, setParams] = useState(initParams);
  const [filter, setFilter] = useState({ key_search: '', my_service_id: '', status: '' });
  const [visibled, setVisibled] = useState(false);
  const data = useGetApi(listCompanyApi, params, []);
  const count = useGetApi(countCompanyApi, params, 0);
  const myServices = useGetApi(listMyServiceApi, false, []);

  const columns = [
    { field: 'name', label: 'Tên công ty' },
    { field: 'code', label: 'Mã công ty' },
    { label: 'Dịch vụ', body: (e) => Body(myServices, e.my_service_id) },
    { label: 'Thời gian tạo', body: (e) => TimeBody(e.created_at) },
    { label: 'Thời gian cập nhật', body: (e) => TimeBody(e.updated_at) },
    { label: 'Trạng thái', field: 'status', updateStatus: (e) => updateCompanyApi({ status: e.status, id: e.id }) }
  ];

  return (
    <MainCard title="Danh sách công ty">
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
          label="Ứng dụng"
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
        actionInfo={{ deleteAction: deleteCompanyApi }}
      />
    </MainCard>
  );
};

export default Company;
