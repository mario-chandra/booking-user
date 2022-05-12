import ActionForm from '@/components/Booking/ActionForm';
import DateForm from '@/components/Booking/DateForm';
import TimeForm from '@/components/Booking/TimeForm';

import DualLayout from '@/layout/DualLayout';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Cookies from 'js-cookie';
import usePostQuery from '@/hooks/usePostQuery';

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
  const [currStep, setCurrStep] = useState(0);
  const [values, setValues] = useState(() => {
    return {
      id_location: router.query.id_location,
    };
  });
  const mutation = usePostQuery('/book');
  const form = STEPS[currStep];

  const handleChange = (value) =>
    setValues((curr) => ({ ...curr, [form.id]: value }));

  console.log('router', router.query.location);

  const handleSubmit = () => {
    if (currStep + 1 < STEPS.length) {
      console.log('opps');

      return setCurrStep((curr) => curr + 1);
    }

    // do submission
    const data = {
      id_location: router.query.id_location,
      date: values.date,
      start_time: values.time.start_time,
      end_time: values.time.end_time,
      oder_status: 'pending',
      nim: Cookies.get('NIM'),
    };
    console.log('values123', data);
    mutation.mutate(data, {
      onSuccess: (res) => console.log('res', res),
      onError: (err) => console.log('err', err),
    });
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
