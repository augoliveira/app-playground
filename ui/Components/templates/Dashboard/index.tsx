import { Main } from '#/ui/Components/Main/';
import Link from 'next/link';



const Dashboard = () => {
  return (
    <Main>

      {/* Nao precisa mais da tag <a/> como children */}
      <Link
        href={{
          pathname: '/about',
          query: { name: 'test' },
        }}
      >
        About
      </Link>
    </Main>
  );
};

export default Dashboard;
