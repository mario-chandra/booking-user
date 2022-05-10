import Content from '@/components/Container/Content';
import RegisterForm from '@/components/Form/RegisterForm';
import AuthLayout from '@/layout/AuthLayout';

const Register = () => {
  return (
    <Content title="Input Your Data">
      <RegisterForm />
    </Content>
  );
};

Register.layout = AuthLayout;

export default Register;
