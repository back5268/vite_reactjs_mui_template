import { useGetApi } from '@/hooks';
import { DataTable, Filters, FormInputFilter, FormSelectFilter, MainCard, StatusBody, TimeBody } from '@components';
import { useState } from 'react';
import Update from './Update';
import { countUserApi, deleteUserApi, listUserApi } from '@api';
import { status } from '@constant';

const columns = [
  { field: 'phone', label: 'Phone' },
  { field: 'email', label: 'Email' },
  { label: 'Thời gian tạo', body: (e) => TimeBody(e.created_at)},
  { label: 'Thời gian cập nhật', body: (e) => TimeBody(e.updated_at)},
  { label: 'Trạng thái', body: (e) => StatusBody(e.status)},
];

const SamplePage = () => {
  const [params, setParams] = useState({ page: 1, limit: 10 });
  const [filter, setFilter] = useState({ key_search: '', status: '' });
  const [visibled, setVisibled] = useState(false);
  const data = useGetApi(listUserApi, params, []);
  const count = useGetApi(countUserApi, params, 0);

  return (
    <MainCard title="Sample Card">
      {visibled && <Update visibled={visibled} setVisibled={setVisibled} setParams={setParams} />}
      <Filters setParams={setParams} filter={filter} setFilter={setFilter} lg={6}>
        <FormInputFilter label="Tìm kiếm theo email, số điện thoại" value={filter.key_search} onChange={(e) => setFilter({ ...filter, key_search: e.target.value })} />
        <FormSelectFilter label="Trạng thái" options={status} value={filter.status} onChange={(e) => setFilter({ ...filter, status: e.target.value })} />
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
