import Content from '@/components/Container/Content';
import LoginForm from '@/components/Form/LoginForm';
import AuthLayout from '@/layout/AuthLayout';

const Login = () => {
  return (
    <Content title="LOGIN">
      <LoginForm />
    </Content>
  );
};

Login.layout = AuthLayout;

export default Login;
