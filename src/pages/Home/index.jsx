import Layout from './Layout';
import Sidebar from '../../components/Sidebar';
import WelcomeMessage from '../../components/WelcomeMessage';

const Home = () => {
  return (
    <Layout>
      <Sidebar />
      <WelcomeMessage />
    </Layout>
  );
};

export default Home;
