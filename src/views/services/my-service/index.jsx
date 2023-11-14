import { useGetApi, useGetParams } from '@/hooks';
import { DataTable, Filters, FormInput, FormSelect, MainCard, TimeBody } from '@components';
import { useState } from 'react';
import Update from './Update';
import { countMyServiceApi, deleteMyServiceApi, listMyServiceApi, updateMyServiceApi } from '@api';
import { status } from '@constant';

const MyService = () => {
  const initParams = useGetParams();
  const [params, setParams] = useState(initParams);
  const [filter, setFilter] = useState({ key_search: '', status: '' });
  const [visibled, setVisibled] = useState(false);
  const data = useGetApi(listMyServiceApi, params, []);
  const count = useGetApi(countMyServiceApi, params, 0);

  const columns = [
    { field: 'name', label: 'Tên ứng dụng' },
    { field: 'code', label: 'Mã ứng dụng' },
    { field: 'domain', label: 'Domain' },
    { label: 'Thời gian tạo', body: (e) => TimeBody(e.created_at) },
    { label: 'Thời gian cập nhật', body: (e) => TimeBody(e.updated_at) },
    { label: 'Trạng thái', field: 'status', updateStatus: (e) => updateMyServiceApi({ status: e.status, id: e.id }) }
  ];

  return (
    <MainCard title="Danh sách ứng dụng">
      {visibled && <Update visibled={visibled} setVisibled={setVisibled} setParams={setParams} />}
      <Filters setParams={setParams} filter={filter} setFilter={setFilter} sm={12} lg={6}>
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
        actionInfo={{ deleteAction: deleteMyServiceApi }}
      />
    </MainCard>
  );
};

export default MyService;
