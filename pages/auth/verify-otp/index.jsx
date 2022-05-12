import Content from '@/components/Container/Content';
import VerifyOTPForm from '@/components/Form/VerifyOTPForm';
import AuthLayout from '@/layout/AuthLayout';

export const getServerSideProps = async ({ req, query }) => {
  const token = query?.token;
  if (token === null || token === undefined) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  return {
    props: { token },
  };
};

const VerifyOTP = ({ token }) => {
  return (
    <Content title="Verify Account">
      <VerifyOTPForm token={token} />
    </Content>
  );
};

VerifyOTP.layout = AuthLayout;

export default VerifyOTP;
