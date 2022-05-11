import Content from '@/components/Container/Content';
import { Field, Group } from '@/components/List';
import useGetQuery from '@/hooks/useGetQuery';
import PageLayout from '@/layout/PageLayout';

const MySeat = () => {
  const { data, isFetching } = useGetQuery(
    ['profile', 'list'],
    `/students/byEmail?email=mc80013@student.uph.edu`
  );

  if (isFetching) return <LoadingModal />;
  return (
    <Content title="My Seat">
      <Group>
        {Object.entries(data[0]).map((entry) => {
          const [key, value] = entry;
          return <Field key={key} label={key} value={value} />;
        })}
      </Group>
    </Content>
  );
};

MySeat.layout = PageLayout;

export default MySeat;
