import { useGetApi, useGetParams } from '@/hooks';
import { Body, DataTable, Filters, FormCalendar, FormInput, FormSelect, MainCard, TimeBody, TypeServiceBody } from '@components';
import { useState } from 'react';
import { countLogApi, listLogApi, listCompanyApi, listProjectApi } from '@api';
import { status, statusMail, typeService } from '@constant';

const Template = () => {
  const initParams = useGetParams();
  const [params, setParams] = useState(initParams);
  const [filter, setFilter] = useState({ key_search: '', subject: '', company_id: '', project_id: '', type_service: '', status: '' });
  const data = useGetApi(listLogApi, params, []);
  const count = useGetApi(countLogApi, params, 0);
  const companies = useGetApi(listCompanyApi, {}, []);
  const projects = useGetApi(listProjectApi, { company_id: filter.company_id }, []);

  const columns = [
    { field: 'subject', label: 'Tiêu đề' },
    { field: 'from', label: 'Địa chỉ gửi' },
    { field: 'to', label: 'Địa chỉ nhận' },
    { field: 'company_name', label: 'Công ty' },
    { field: 'project_name', label: 'Dự án' },
    { label: 'Loại dịch vụ', body: (e) => TypeServiceBody(e.type_service) },
    { label: 'Thời gian tạo', body: (e) => TimeBody(e.created_at) },
    { label: 'Trạng thái', body: (e) => Body(statusMail, e.status) }
  ];

  return (
    <MainCard title="Danh sách lịch sử thông báo">
      <Filters setParams={setParams} filter={filter} setFilter={setFilter} sm={12}>
        <FormInput
          lg={3}
          sm={6}
          label="Tìm kiếm theo tiêu đề"
          value={filter.subject}
          onChange={(e) => setFilter({ ...filter, subject: e.target.value })}
        />
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
          label="Công ty"
          options={companies}
          value={filter.company_id}
          onChange={(e) => setFilter({ ...filter, company_id: e.target.value, project_id: null })}
        />
        <FormSelect
          lg={3}
          sm={6}
          label="Dự án"
          options={projects}
          value={filter.project_id}
          onChange={(e) => setFilter({ ...filter, project_id: e.target.value })}
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
        <FormCalendar lg={3} sm={6} label="Ngày tạo" value={filter.from} onChange={(e) => setFilter({ ...filter, from: e.target.value })} />
      </Filters>
      <DataTable params={params} setParams={setParams} count={count} items={data} columns={columns} headerInfo />
    </MainCard>
  );
};

export default Template;
