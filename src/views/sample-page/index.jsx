import { useGetApi } from '@/hooks';
import { DataTable, Filters, FormCalendar, FormInput, FormSelect, MainCard, TimeBody } from '@components';
import { useState } from 'react';
import Update from './Update';
import { countUserApi, deleteUserApi, listUserApi, updateUserApi } from '@api';
import { status } from '@constant';
import useGetParams from '@/hooks/useGetParams';
import { Grid } from '@mui/material';

const columns = [
  { field: 'phone', label: 'Phone' },
  { field: 'email', label: 'Email' },
  { label: 'Thời gian tạo', body: (e) => TimeBody(e.created_at) },
  { label: 'Thời gian cập nhật', body: (e) => TimeBody(e.updated_at) },
  { label: 'Trạng thái', field: 'status', updateStatus: (e) => updateUserApi({ status: e.status, id: e.id }) }
];

const SamplePage = () => {
  const initParams = useGetParams();
  const [params, setParams] = useState(initParams);
  const [filter, setFilter] = useState({ key_search: '', status: '' });
  const [visibled, setVisibled] = useState(false);
  const data = useGetApi(listUserApi, params, []);
  const count = useGetApi(countUserApi, params, 0);

  return (
    <MainCard title="Danh sách người dùng">
      {visibled && <Update visibled={visibled} setVisibled={setVisibled} setParams={setParams} />}
      <Filters setParams={setParams} filter={filter} setFilter={setFilter} sm={12} lg={6}>
        <FormInput
          lg={3}
          sm={6}
          label="Tìm kiếm theo email, số điện thoại"
          value={filter.key_search}
          onChange={(e) => setFilter({ ...filter, key_search: e.target.value })}
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
        actionInfo={{ deleteAction: deleteUserApi }}
      />
    </MainCard>
  );
};

export default SamplePage;
