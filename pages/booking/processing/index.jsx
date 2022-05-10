import LoadingLayout from '@/layout/PageLayout';
import Image from 'next/image';
import ProcessingImage from '@/public/images/processing.png';
import { Button } from '@/components/Buttons';

const BookingProcessing = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={ProcessingImage}
        alt="processing image"
        width={340}
        height={340}
        quality={100}
        objectFit="responsive"
      />
      <div className="my-16 flex flex-col items-center justify-center text-black">
        <h1 className="mb-3  text-xxl-1 font-bold text-primary-500">
          Your Booking is on Processing
        </h1>
        <p className="text-lg-3 font-medium text-primary-300">
          Please kindly wait, we will notify
        </p>
        <p className="text-lg-3 font-medium text-primary-300">
          you as soon as possible
        </p>
      </div>
      <Button title="Continue" />
    </div>
  );
};

BookingProcessing.layout = LoadingLayout;

export default BookingProcessing;
