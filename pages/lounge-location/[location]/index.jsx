import ActionForm from '@/components/Booking/ActionForm';
import DateForm from '@/components/Booking/DateForm';
import TimeForm from '@/components/Booking/TimeForm';

import DualLayout from '@/layout/DualLayout';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Cookies from 'js-cookie';
import usePostQuery from '@/hooks/usePostQuery';
import useToast from '@/hooks/useToast';

const STEPS = [
  {
    id: 'date',
    title: 'Book Date',
    actionName: 'Choose Date',
    form: DateForm,
  },
  {
    id: 'time',
    title: 'Book Time',
    actionName: 'Choose Time',
    form: TimeForm,
  },
  // {
  //   id: 'chair',
  //   title: 'Book Chair',
  //   actionName: 'Choose Chair',
  //   form: ChairForm,
  // },
];

const Location = () => {
  const router = useRouter();
  const { notify } = useToast();
  // sementara pakai state err karena requestnya looping
  const [errMsg, setErrMsg] = useState(null);
  const [currStep, setCurrStep] = useState(0);
  const [values, setValues] = useState(() => {
    return {
      id_location: router.query.id_location,
    };
  });
  const mutation = usePostQuery('/book');
  const form = STEPS[currStep];

  console.log('values', values);

  const handleChange = (value) =>
    setValues((curr) => ({ ...curr, [form.id]: value }));

  console.log('router', router.query.location);

  const handleSubmit = () => {
    if (currStep + 1 < STEPS.length) {
      console.log('opps');

      return setCurrStep((curr) => curr + 1);
    }

    // mutation.mutate(data, {
    //   onSuccess: (res) => console.log('res', res),
    //   onError: (err) => console.log('err', err),
    // });

    values.time.forEach((item) => {
      const data = {
        id_location: router.query.id_location,
        date: values.date,
        id_time: item,
        nim: Cookies.get('nim'),
      };
      mutation.mutate(data, {
        onSuccess: (res) => {
          console.log('res88', res);
          console.log('res.err', res.err);
          if (res.errMsg) return setErrMsg(res.err);
        },
        onError: (err) => co8nsole.log('err888', err),
      });
    });

    if (errMsg) return notify('error', errMsg);

    notify('success', 'Successfully booked the seat');

    // return router.push('/booking/processing');
    // do submission
    // const data = {
    //   id_location: router.query.id_location,
    //   date: values.date,
    //   start_time: values.time.start_time,
    //   end_time: values.time.end_time,
    //   oder_status: 'pending',
    //   nim: Cookies.get('NIM'),
    // };
    // console.log('values123', data);
    // mutation.mutate(data, {
    //   onSuccess: (res) => console.log('res', res),
    //   onError: (err) => console.log('err', err),
    // });
  };

  return (
    <ActionForm
      title={form.title}
      actionName={form.actionName}
      form={<form.form values={values} onChange={handleChange} />}
      onActionSubmit={handleSubmit}
      submitDisabled={!values[form.id]}
    />
  );
};

Location.layout = DualLayout;

export default Location;
