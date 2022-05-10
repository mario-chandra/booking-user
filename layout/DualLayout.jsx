import Breadcrumbs from '@/components/Breadcrumbs';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const DualLayout = ({ children }) => {
  return (
    <div className="relative w-[90%] mx-auto">
      <Navbar />
      <div className="mt-nav flex items-center relative h-full bg-success-BG">
        <div className="mt-8 space-y-8 h-[calc(100%_-_56px_-_56px)] w-6/12">
          <Breadcrumbs />
          <div className="relative h-[calc(100vh_-_56px_-_56px_-_32px_-_32px_-_32px)]">
            <Image
              className="relative rounded-r-4 overflow-hidden"
              src={'https://source.unsplash.com/random/?city,night'}
              alt="Picture of the author"
              // width={500}
              // height={500}
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex w-6/12">{children}</div>
      </div>
    </div>
  );
};

export default DualLayout;
