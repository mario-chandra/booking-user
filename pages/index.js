import Dropdowns from '@/components/Dropdowns';
import { LoadingModal } from '@/components/Loading';
import Navbar from '@/components/Navbar';
import useGetQuery from '@/hooks/useGetQuery';
import HomeLayout from '@/layout/HomeLayout';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import LocationIcon from '@/icons/Fill/Location.svg';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthenticationContext';

export const getServerSideProps = ({ req }) => {
  const user = req.cookies.token;
  if (!user) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const Home = () => {
  const router = useRouter();

  const { isAuthenticated } = useAuth();
  const { data, isFetching } = useGetQuery(['locationasds'], '/location', {
    onSuccess: (res) => console.log('success', res),
    onError: (err) => console.log('err123', err),
  });

  const handleSelect = (item) => {
    console.log('item', item);

    if (isAuthenticated) {
      console.log('masuk');
      // return navigate("/booking", { state: { selectedLocation: item } });
      return router.push({
        pathname: `/lounge-location/${item.name_location}`,
        query: { id_location: item.id_location },
      });
    }
    return router.push('/auth/login');
  };

  console.log('data', data);
  if (isFetching) return <LoadingModal />;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xxl-1 font-bold mb-3 text-primary-500">
          BOOK your seat
        </h1>
        <h3 className="text-lg-3 font-medium text-primary-300">
          start find your seat and learn awsome
        </h3>
        <h3 className="text-lg-3 font-medium mb-8 text-primary-300">
          online classes at UPH Lounge
        </h3>

        <Dropdowns
          placeholder="Select Lounge Location"
          Icon={LocationIcon}
          datas={data}
        >
          {data.map((item) => (
            <li
              className="hover:bg-gray-300 cursor-pointer py-4 px-6"
              onClick={() => handleSelect(item)}
              key={item.id_location}
            >
              <a>{item.name_location}</a>
            </li>
          ))}
        </Dropdowns>
      </div>
    </div>
  );
};

Home.layout = HomeLayout;

export default Home;
