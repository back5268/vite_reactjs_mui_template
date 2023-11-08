import FormUpdateDialog from '@/components/forms/FormUpdateDialog';
import { useGetApi } from '@/hooks';
import { countCompanyApi, listCompanyApi } from '@api';
import { DataTable, Filters, FormInputFilter, FormSelectFilter, MainCard } from '@components';
import { useState } from 'react';
import Update from './Update';

const columns = [
  { field: 'id', label: 'ID' },
  { field: 'name', label: 'Name' },
  { field: 'code', label: 'Code' }
];

const SamplePage = () => {
  const [params, setParams] = useState({ page: 1, limit: 10 });
  const [filter, setFilter] = useState({ name: '' });
  const [visibled, setVisibled] = useState(false);
  const data = useGetApi(listCompanyApi, params, ['dsad']);
  const count = useGetApi(countCompanyApi, params, 0);

  return (
    <MainCard title="Sample Card">
      {visibled && <Update visibled={visibled} setVisibled={setVisibled} setParams={setParams} />}
      <Filters setParams={setParams} filter={filter} setFilter={setFilter} lg={9}>
        <FormInputFilter label="Tìm kiếm theo tên" value={filter.name} onChange={e => setFilter({ ...filter, name: e.target.value })} />
        <FormSelectFilter label="Tìm kiếm theo tên" />
        <FormSelectFilter label="Tìm kiếm theo tên" />
        <FormSelectFilter label="Tìm kiếm theo tên" />
        <FormSelectFilter label="Tìm kiếm theo tên" />
      </Filters>
      <DataTable params={params} setParams={setParams} count={count} items={data} columns={columns} setVisibleDialog={setVisibled} headerInfo actionInfo={{ deleteAction: () => {} }} />
    </MainCard>
  );
};

export default SamplePage;
