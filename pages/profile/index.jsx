import Content from '@/components/Container/Content';
import { Field, Group } from '@/components/List';
import PageLayout from '@/layout/PageLayout';

import axios from 'axios';

export const getServerSideProps = async ({ req, query }) => {
  const email = req.cookies.email;
  const token = req.cookies.token;

  if (!email && !token) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  const data = await axios
    .get(
      `${process.env.NEXT_PUBLIC_MAIN_HOST}/students/byEmail?email=${email}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => res.data[0])
    .catch((err) => console.log('err123', err.response));

  return {
    props: { data },
  };
};

const Profile = ({ data }) => {
  return (
    <Content title="Profile">
      <Group>
        {Object.entries(data).map((entry) => {
          const [key, value] = entry;
          if (key === 'id_program') return;
          return (
            <Field
              key={key}
              label={key === 'program_name' ? 'program' : key}
              value={value}
            />
          );
        })}
      </Group>
    </Content>
  );
};

Profile.layout = PageLayout;

export default Profile;
