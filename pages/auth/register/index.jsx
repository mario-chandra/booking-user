import Content from '@/components/Container/Content';
import RegisterForm from '@/components/Form/RegisterForm';
import AuthLayout from '@/layout/AuthLayout';
import axios from 'axios';

export const getServerSideProps = async ({ req }) => {
  const email = req.cookies.email;
  const token = req.cookies.token;

  console.log(
    '!Boolean(email) && !Boolean(token)',
    !Boolean(email) && !Boolean(token)
  );

  if (!Boolean(email) && !Boolean(token)) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  const data = await axios
    .get(
      `${process.env.NEXT_PUBLIC_MAIN_HOST}/students/byEmail?email=${email}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => res.data[0]);

  if (Boolean(data)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const Register = ({ data }) => {
  return (
    <Content title="Input Your Data">
      <RegisterForm />
    </Content>
  );
};

Register.layout = AuthLayout;

export default Register;
