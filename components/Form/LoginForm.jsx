import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import DataForm from './DataForm';
import useToast from '@/hooks/useToast';
import { Button } from '../Buttons';
import { useAuth } from '@/context/AuthenticationContext';

const LoginForm = () => {
  const { notify } = useToast();
  const { isAuthenticated, user, login } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        email: Yup.string().required('Email Required'),
      })
    ),
    defaultValues: {
      email: '',
    },
  });

  // const mutation = usePostQuery('/admin/login');

  const onSubmit = (data) => {
    login(data);
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
    <form className="flex flex-col">
      <DataForm
        forms={[
          {
            label: 'Student Email',
            name: 'email',
            placeholder: 'YourEmail@student.uph.edu',
            type: 'TextInput',
          },
          // {
          //   label: 'Password',
          //   name: 'password',
          //   placeholder: 'Write Password',
          //   type: 'PassInput',
          // },
        ]}
        register={register}
        errors={errors}
      />
      <div className="mt-12 text-center">
        <Button title="Login" onClick={handleSubmit(onSubmit)} />
      </div>
    </form>
  );
};

export default LoginForm;
