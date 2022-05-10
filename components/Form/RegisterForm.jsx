import useToast from '@/hooks/useToast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button } from '../Buttons';
import DataForm from './DataForm';
import * as Yup from 'yup';
import majorData from '@/_mocks/major';

const RegisterForm = () => {
  const { notify } = useToast();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        student_id: Yup.string().required('Student ID is Required!'),
        name: Yup.string().required('Student Name is Required!'),
        class: Yup.string().required('Student Class is Required!'),
        program: Yup.string(),
      })
    ),
    defaultValues: {
      student_id: '',
      name: '',
      class: '',
      program: '',
    },
  });

  const onSubmit = (data) => {
    console.log('data regis', data);
    // mutation.mutate(data, {
    //   onSuccess: (res) => {
    //     notify('success', res.verify);
    //     localStorage.setItem('name', res.name);
    //     localStorage.setItem('role', res.permission);
    //   },
    //   onError: (err) => notify('error', err.error),
    // });
    // mutation.mutate();
  };

  return (
    <div className="flex flex-col">
      <DataForm
        forms={[
          {
            label: 'Student ID',
            name: 'student_id',
            placeholder: 'ex. 03082180005',
            type: 'TextInput',
          },
          {
            label: 'Name',
            name: 'name',
            placeholder: 'ex. Farandi Sutanto',
            type: 'TextInput',
          },
          {
            label: 'Class',
            name: 'class',
            placeholder: 'ex. 18Ti2',
            type: 'TextInput',
          },
          {
            label: 'Program',
            itemId: 'title',
            name: 'program',
            placeholder: 'Select your study program',
            data: majorData,
            type: 'SelectInput',
          },
        ]}
        register={register}
        errors={errors}
      />
      <div className="mt-12 text-center">
        <Button title="Continue" onClick={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
};

export default RegisterForm;
