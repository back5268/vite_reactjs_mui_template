import moment from 'moment/moment';
import { Fragment, useState } from 'react';

export const TimeBody = (value, type) => {
  if (value && type === 'date') return <Fragment>{moment(value).format('DD/MM/YYYY')}</Fragment>;
  if (value) return <Fragment>{moment(value).format('DD/MM/YYYY HH:mm:ss')}</Fragment>;
};
