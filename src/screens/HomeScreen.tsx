import { FC } from 'react';
import BaseLayout from '../components/BaseLayout/BaseLayout';
import HomeContainer from '../components/HomeContainer/HomeContainer';

const HomeScreen: FC = () => {
  return (
    <BaseLayout>
      <HomeContainer />
    </BaseLayout>
  )
}

export default HomeScreen;
