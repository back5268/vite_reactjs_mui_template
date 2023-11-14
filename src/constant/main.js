// theme constant
export const gridSpacing = 3;
export const drawerWidth = 300;
export const appDrawerWidth = 320;

export const status = [
  { name: 'Active', id: 1 },
  { name: 'Inactive', id: 0 }
];

export const typeService = [
  { name: 'Email', id: 'email' },
  { name: 'SMS', id: 'sms' }
];

export const statusMail = [
  // { id: 1, name: 'ReadyToSend', severity: 'warning' },
  // { id: 2, name: 'WaitingToRetry', severity: 'warning' },
  { id: '3', name: 'Đang gửi', severity: '' },
  { id: '4', name: 'Có lỗi', severity: 'danger' },
  { id: '5', name: 'Đã gửi', severity: 'success' },
  // { id: 6, name: 'Opened', severity: 'success' },
  // { id: 7, name: 'Clicked', severity: 'info' },
  { id: '8', name: 'Hủy nhận mail', severity: 'warning' },
  { id: '9', name: 'Mail không tồn tại', severity: 'warning' },
  { id: '00', name: 'Thành công', severity: 'success' },
  { id: '02', name: 'Độ dài không hợp lệ', severity: 'danger' },
  { id: '04', name: 'Sai thông tin xác thực', severity: 'danger' },
  { id: '05', name: 'Mất kết nối đến nhà cung cấp', severity: 'danger' },
  { id: '06', name: 'Ip không được phép truy cập', severity: 'danger' },
  { id: '07', name: 'Chưa nhận tin MO từ khách hàng', severity: 'danger' },
  { id: '12', name: 'Không hỗ trợ tin unicode', severity: 'danger' },
  { id: '14', name: 'Số lượng bản tin quá nhiều', severity: 'danger' },
  { id: '15', name: 'Sai chữ ký', severity: 'danger' },
  { id: '80', name: 'Không tìm thấy đối tác', severity: 'danger' },
  { id: '81', name: 'Đối tác chưa được hỗ trợ', severity: 'danger' },
  { id: '83', name: 'Nhà cung cấp chưa được hỗ trợ', severity: 'danger' },
  { id: '84', name: 'Chưa định tuyến dịch vụ', severity: 'danger' },
  { id: '85', name: 'Sai sender', severity: 'danger' },
  { id: '86', name: 'Sai từ khóa', severity: 'danger' },
  { id: '87', name: 'Sai mẫu tin nhắn', severity: 'danger' },
  { id: '88', name: 'Thuê bao Viettel chưa được mã hóa', severity: 'danger' },
  { id: '89', name: 'Thuê bao mạng khác Viettel nhưng  đã mã hóa', severity: 'danger' },
  { id: '97', name: 'Sai dữ liệu đầu vào', severity: 'danger' },
  { id: '90', name: 'Tin nhắn trùng lặp', severity: 'danger' },
  { id: '99', name: 'Lỗi ngoại lệ', severity: 'danger' }
];

export const statusMailError = [
  // { id: 1, name: 'ReadyToSend', severity: 'warning' },
  // { id: 2, name: 'WaitingToRetry', severity: 'warning' },
  // { id: 3, name: 'Đang gửi', severity: '' },
  // { id: 4, name: 'Có lỗi', severity: 'danger' },
  // { id: 5, name: 'Đã gửi', severity: 'success' },
  // { id: 6, name: 'Opened', severity: 'success' },
  // { id: 7, name: 'Clicked', severity: 'info' },
  { id: '8', name: 'Hủy nhận mail', severity: 'warning' },
  { id: '9', name: 'Mail không tồn tại', severity: 'warning' },
  { id: '00', name: 'Thành công', severity: 'success' },
  { id: '02', name: 'Độ dài không hợp lệ', severity: 'danger' },
  { id: '04', name: 'Sai thông tin xác thực', severity: 'danger' },
  { id: '05', name: 'Mất kết nối đến nhà cung cấp', severity: 'danger' },
  { id: '06', name: 'Ip không được phép truy cập', severity: 'danger' },
  { id: '07', name: 'Chưa nhận tin MO từ khách hàng', severity: 'danger' },
  { id: '12', name: 'Không hỗ trợ tin unicode', severity: 'danger' },
  { id: '14', name: 'Số lượng bản tin quá nhiều', severity: 'danger' },
  { id: '15', name: 'Sai chữ ký', severity: 'danger' },
  { id: '80', name: 'Không tìm thấy đối tác', severity: 'danger' },
  { id: '81', name: 'Đối tác chưa được hỗ trợ', severity: 'danger' },
  { id: '83', name: 'Nhà cung cấp chưa được hỗ trợ', severity: 'danger' },
  { id: '84', name: 'Chưa định tuyến dịch vụ', severity: 'danger' },
  { id: '85', name: 'Sai sender', severity: 'danger' },
  { id: '86', name: 'Sai từ khóa', severity: 'danger' },
  { id: '87', name: 'Sai mẫu tin nhắn', severity: 'danger' },
  { id: '88', name: 'Thuê bao Viettel chưa được mã hóa', severity: 'danger' },
  { id: '89', name: 'Thuê bao mạng khác Viettel nhưng  đã mã hóa', severity: 'danger' },
  { id: '97', name: 'Sai dữ liệu đầu vào', severity: 'danger' },
  { id: '90', name: 'Tin nhắn trùng lặp', severity: 'danger' },
  { id: '99', name: 'Lỗi ngoại lệ', severity: 'danger' }
];
