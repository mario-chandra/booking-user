import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';
import { useAuth } from '@/context/AuthenticationContext';
import { useRouter } from 'next/router';
import { Button } from '../Buttons';
import LoggedButton from './LoggedButton';

const Navbar = ({ hasButton = true }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  console.log('r', router.pathname);
  return (
    <div className="z-50 h-nav flex justify-center items-center fixed top-0 left-0 w-full bg-shade-FG shadow-2xl">
      {router.pathname.includes('/auth') ? (
        <div className="max-w-[80%] w-full self-center ml-8">
          <Link href="/dashboard" passHref>
            <a>
              <Image src={logo} objectFit="fill" />
            </a>
          </Link>
        </div>
      ) : (
        <>
          <div className="max-w-[80%] w-full self-center ml-8">
            <Link href="/dashboard" passHref>
              <a>
                <Image src={logo} objectFit="fill" />
              </a>
            </Link>
          </div>
          {isAuthenticated ? (
            <LoggedButton />
          ) : (
            <Button title="Login" outlined />
          )}
        </>
      )}
    </div>
  );
};

export default Navbar;
