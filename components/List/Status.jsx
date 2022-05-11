// import checkStatusStyle from '@/helpers/checkStatusStyle';
import React, { useEffect, useState } from 'react';
import classNames from '@/helpers/classNames';

const checkStatusStyle = (status) => {
  switch (status) {
    case 'processing':
      return 'status-processing';
    case 'accepted':
      return 'status-accepted';
    case 'decline':
      return 'status-decline';
    default:
      return '';
  }
};

const Status = ({ status }) => {
  return (
    <div className={`${checkStatusStyle(status)} border py-2 px-4 rounded-1`}>
      {status}
    </div>
  );
};

export default Status;
