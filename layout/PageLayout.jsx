import Navbar from '@/components/Navbar';

const PageLayout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <div className="mt-nav relative w-full h-full bg-no-repeat bg-cover bg-fixed  flex items-start justify-center min-h-[calc(100vh_-_76px)]">
        <div className="my-20 w-full">{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
