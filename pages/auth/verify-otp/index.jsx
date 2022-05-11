import Content from '@/components/Container/Content';
import VerifyOTPForm from '@/components/Form/VerifyOTPForm';
import AuthLayout from '@/layout/AuthLayout';

const VerifyOTP = () => {
  return (
    <Content title="Verify Account">
      <VerifyOTPForm />
    </Content>
  );
};

VerifyOTP.layout = AuthLayout;

export default VerifyOTP;
