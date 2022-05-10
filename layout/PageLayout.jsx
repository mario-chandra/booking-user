import Navbar from '@/components/Navbar';

const LoadingLayout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <div className="mt-nav relative w-full h-full bg-no-repeat bg-cover bg-fixed  flex items-center justify-center min-h-[calc(100vh_-_76px)]">
        <div className="my-10">{children}</div>
      </div>
    </div>
  );
};

export default LoadingLayout;
