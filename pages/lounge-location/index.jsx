export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};

const LoungeLocation = () => {
  return <></>;
};

export default LoungeLocation;
