import { Suspense, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
// import { QueryClient, QueryClientProvider } from 'react-query';
import { Slide, ToastContainer } from 'react-toastify';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvider } from '@/context/AuthenticationContext';
import ProtectedRoutes from '@/axios/ProtectedRoutes';
import { LoadingModal } from '@/components/Loading';

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
  const Layout =
    Component.layout ||
    (({ children }) => {
      children;
    });

  // useEffect(() => {
  //   const jssStyle = document.querySelector('#jss-server-side');
  //   if (jssStyle) {
  //     jssStyle.parentElement.removeChild(jssStyle);
  //   }
  // }, []);

  return (
    <ErrorBoundary FallbackComponent={MyFallbackComponent}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ProtectedRoutes>
            <Layout>
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
            </Layout>
          </ProtectedRoutes>
        </AuthProvider>

        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  // ctx.store.dispatch({})
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};

export default MyApp;
