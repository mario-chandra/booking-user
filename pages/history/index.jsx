import Content from '@/components/Container/Content';
import { Field, Group } from '@/components/List';

import PageLayout from '@/layout/PageLayout';
import axios from 'axios';

export const getServerSideProps = async ({ req, query }) => {
  // const email = req.cookies.email;
  const token = req.cookies.token;
  const nim = req.cookies.nim;

  if (!Boolean(nim)) {
    return {
      redirect: {
        destination: '/auth/register',
        permanent: false,
      },
    };
  }

  const data = await axios
    .get(`${process.env.NEXT_PUBLIC_MAIN_HOST}/book/history?nim=${nim}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data)
    .catch((err) => console.log('err123', err.response));

  return {
    props: { data },
  };
};

const History = ({ data }) => {
  return (
    <Content title="My Seat">
      <Group>
        {data ? (
          data.map((item) => (
            <Field
              key={item.order_id}
              label={`ID: ${item.order_id}`}
              value={item.name_location}
              status={item.order_status}
              dateTime={{ date: item.date, time: item.time }}
              note={item.note}
            />
          ))
        ) : (
          <p className="error-text">Sorry something went wrong!!</p>
        )}
      </Group>
    </Content>
  );
};

History.layout = PageLayout;

export default History;