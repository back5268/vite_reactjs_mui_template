import { postData } from '@axios';

export const sendMailApi = (params) => postData('web/mail/sendMail', params);
export const sendSMSApi = (params) => postData('web/sms/sendSMS', params);
