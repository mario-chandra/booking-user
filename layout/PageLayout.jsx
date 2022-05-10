import Navbar from '@/components/Navbar';
import Image from 'next/image';

const LoadingLayout = ({ children }) => {
  return (
    <div className="relative overflow-hidden h-screen">
      <Navbar />
      <div className="relative pt-nav flex justify-center items-center z-20 min-h-full">
        {children}
      </div>
    </div>
  );
};

export default LoadingLayout;
