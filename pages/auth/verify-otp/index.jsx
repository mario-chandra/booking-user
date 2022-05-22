import Content from '@/components/Container/Content';
import VerifyOTPForm from '@/components/Form/VerifyOTPForm';
import AuthLayout from '@/layout/AuthLayout';

export const getServerSideProps = async ({ req, query }) => {
  const token = query?.token;
  const email = query?.email;
  if (token === null || token === undefined) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  return {
    props: { token, email },
  };
};

const VerifyOTP = ({ token, email }) => {
  return (
    <Content title="Verify Account">
      <VerifyOTPForm emailTitle={email} token={token} />
    </Content>
  );
};

VerifyOTP.layout = AuthLayout;

export default VerifyOTP;
