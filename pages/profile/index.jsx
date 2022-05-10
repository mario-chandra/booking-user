import Content from '@/components/Container/Content';
import { LoadingModal } from '@/components/Loading';
import { Field, Group } from '@/components/List';
import useGetQuery from '@/hooks/useGetQuery';
import PageLayout from '@/layout/PageLayout';
import Cookies from 'js-cookie';

const Profile = () => {
  const { data, isFetching } = useGetQuery(
    ['profile', 'list'],
    `/students/byEmail?email=mc80013@student.uph.edu`
  );

  if (isFetching) return <LoadingModal />;

  return (
    <Content title="Profile">
      <Group>
        {Object.entries(data[0]).map((entry) => {
          const [key, value] = entry;
          return <Field key={key} label={key} value={value} />;
        })}
      </Group>
    </Content>
  );
};

Profile.layout = PageLayout;

export default Profile;
