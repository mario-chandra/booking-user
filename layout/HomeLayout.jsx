import Navbar from '@/components/Navbar';

const HomeLayout = ({ children }) => {
  return (
    <div className="relative">
      {/* <div className="absolute"> */}
      <Navbar />
      {/* </div> */}
      <div className="bg-img relative w-full h-full bg-no-repeat bg-cover bg-fixed  flex items-center justify-center min-h-[calc(100vh_-_76px)]">
        {/* <Background /> */}
        <div className="absolute top-1/2 -translate-y-2/4">{children}</div>
      </div>
    </div>
  );
};

export default HomeLayout;
