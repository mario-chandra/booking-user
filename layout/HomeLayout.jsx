import Background from '@/components/Background';
import Navbar from '@/components/Navbar';

const HomeLayout = ({ children }) => {
  return (
    <div className="relative">
      {/* <div className="absolute"> */}
      <Navbar />
      {/* </div> */}
      <div className="mt-nav absolute top-0 left-0 right-0 flex items-center justify-center h-[calc(100vh_-_76px)]">
        <Background />
        <div className="absolute">{children}</div>
      </div>
    </div>
  );
};

export default HomeLayout;
