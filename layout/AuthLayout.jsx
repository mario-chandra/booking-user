import Navbar from '@/components/Navbar';
import Image from 'next/image';

const AuthLayout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <div className="mt-nav flex items-center relative h-[calc(100vh_-_76px)] bg-shade-BG">
        <div className="relative h-[calc(100%_-_56px_-_56px)] w-6/12">
          <Image
            className="relative rounded-r-4 overflow-hidden"
            src={'https://source.unsplash.com/random/?city,night'}
            alt="Picture of the author"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="flex w-6/12">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
