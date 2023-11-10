import { useConfigState } from '@store';
import moment from 'moment/moment';
import { Fragment } from 'react';

export const TimeBody = (value, type) => {
  if (value && type === 'date') return <Fragment>{moment(value).format('DD/MM/YYYY')}</Fragment>;
  if (value) return <Fragment>{moment(value).format('DD/MM/YYYY HH:mm:ss')}</Fragment>;
};

export const Body = (data = [], value, label = 'name', key = 'id') => {
  const { borderRadius } = useConfigState()
  const item = data[0] ? data.find((d) => d[key] === value) : null;
  if (item)
    return item.color ? (
      <span
        className="text-center font-bold text-white text-xs"
        style={{
          backgroundColor: item.color,
          borderRadius: borderRadius,
          padding: '4px',
          minWidth: '100px',
          display: 'inline-block'
        }}
      >
        {item[label]}
      </span>
    ) : (
      <p>{item[label]}</p>
    );
  else return '';
};
