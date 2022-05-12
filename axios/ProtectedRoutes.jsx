import { useAuth } from '@/context/AuthenticationContext';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import { useRouter } from 'next/router';

const { LoadingModal } = require('@/components/Loading');

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  console.log(
    'isAuthenticated',
    isAuthenticated,
    router.pathname.includes('/')
  );
  if (isLoading) {
    return <LoadingModal title="Loading..." />;
  }

  if (!isAuthenticated && router.pathname !== '/') {
    console.log('protec');

    return router.push('/auth/login');
  }

  // if (!Boolean(dataStudent)) return router.push('/auth/register');
  // if (!Boolean(dataStudent)) {
  //   router.replace('/auth/register');
  // }

  return children;
};

export default ProtectedRoutes;
