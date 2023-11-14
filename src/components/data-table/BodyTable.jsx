import moment from 'moment/moment';
import { Fragment } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import SmsIcon from '@mui/icons-material/Sms';
import { Tag } from '../extended';

export const TimeBody = (value, type) => {
  if (value && type === 'date') return <Fragment>{moment(value).format('DD/MM/YYYY')}</Fragment>;
  if (value) return <Fragment>{moment(value).format('DD/MM/YYYY HH:mm:ss')}</Fragment>;
};

export const TypeServiceBody = (type) => {
  if (type === 'email') return <EmailIcon />;
  if (type === 'sms') return <SmsIcon />;
};

export const Body = (data = [], value, label = 'name', key = 'id') => {
  const item = data[0] ? data.find((d) => d[key] === value) : null;
  if (item)
    if (item.type) return <Tag label={item[label]} type={item.type} />;
    else if (item.color)
      return (
        <span
          className="text-center font-bold text-white text-xs"
          style={{
            backgroundColor: item.color,
            padding: '4px',
            minWidth: '100px',
            display: 'inline-block'
          }}
        >
          {item[label]}
        </span>
      );
    else return <p>{item[label]}</p>;
  else return '';
};
