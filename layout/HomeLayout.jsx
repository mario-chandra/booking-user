import Background from '@/components/Background';
import Navbar from '@/components/Navbar';

const HomeLayout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <div className="mt-nav flex items-center justify-center relative h-[calc(100vh_-_76px)]">
        <Background />
        <div className="absolute">{children}</div>
      </div>
    </div>
  );
};

export default HomeLayout;
