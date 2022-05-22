import { Suspense, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Slide, ToastContainer } from 'react-toastify';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvider } from '@/context/AuthenticationContext';
import ProtectedRoutes from '@/axios/ProtectedRoutes';
import { LoadingModal } from '@/components/Loading';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

function MyFallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        refetchOnmount: true,
        refetchOnReconnect: true,
        retry: true,
        staleTime: 5 * 60 * 1000,
      },
    },
  });

  useEffect(() => {
    setShowChild(true);
    const jssStyle = document.querySelector('#jss-server-side');
    if (jssStyle) {
      jssStyle.parentElement.removeChild(jssStyle);
    }
  }, []);

  // for handle error hydrade ui
  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  }

  const Layout =
    Component.layout ||
    (({ children }) => {
      children;
    });

  return (
    <ErrorBoundary FallbackComponent={MyFallbackComponent}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Layout>
            {/* <ProtectedRoutes> */}
            <Suspense fallback={<LoadingModal title="Loading ...." />}>
              <Component {...pageProps} />
            </Suspense>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            {/* </ProtectedRoutes> */}
          </Layout>
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

// MyApp.getInitialProps = async ({ Component, ctx }) => {
//   // ctx.store.dispatch({})
//   const pageProps = Component.getInitialProps
//     ? await Component.getInitialProps(ctx)
//     : {};
//   return { pageProps };
// };

export default MyApp;
