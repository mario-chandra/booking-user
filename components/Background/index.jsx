import Image from 'next/image';
import BG from '@/public/images/bg.png';

const Background = () => {
  return (
    <div className="w-full h-full">
      <Image src={BG} layout="fill" objectFit="contain" />
    </div>
  );
};

export default Background;
