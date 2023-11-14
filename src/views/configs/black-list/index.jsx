import { useGetApi, useGetParams } from '@/hooks';
import { Body, DataTable, Filters, FormInput, FormSelect, MainCard, TimeBody, TypeServiceBody } from '@components';
import { useState } from 'react';
import Update from './Update';
import { countBlackListApi, deleteBlackListApi, listBlackListApi } from '@api';
import { status, typeService } from '@constant';

const CategoryTemplate = () => {
  const initParams = useGetParams();
  const [params, setParams] = useState(initParams);
  const [filter, setFilter] = useState({ key_search: '', type_service: '', status: '' });
  const [visibled, setVisibled] = useState(false);
  const data = useGetApi(listBlackListApi, params, []);
  const count = useGetApi(countBlackListApi, params, 0);

  const columns = [
    { field: 'from', label: 'Địa chỉ gửi' },
    { field: 'to', label: 'Địa chỉ chặn' },
    { label: 'Loại dịch vụ', body: (e) => TypeServiceBody(e.type_service) },
    { label: 'Thời gian tạo', body: (e) => TimeBody(e.created_at) },
    { label: 'Thời gian cập nhật', body: (e) => TimeBody(e.updated_at) }
  ];

  return (
    <MainCard title="Danh sách địa chỉ chặn">
      {visibled && <Update visibled={visibled} setVisibled={setVisibled} setParams={setParams} />}
      <Filters setParams={setParams} filter={filter} setFilter={setFilter} sm={12}>
        <FormInput
          lg={3}
          sm={6}
          label="Tìm kiếm theo địa chỉ nhận, gửi"
          value={filter.key_search}
          onChange={(e) => setFilter({ ...filter, key_search: e.target.value })}
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
        actionInfo={{ deleteAction: deleteBlackListApi }}
      />
    </MainCard>
  );
};

export default CategoryTemplate;
