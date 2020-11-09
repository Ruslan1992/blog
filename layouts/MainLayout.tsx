import { Navbar } from '../components/Navbar/Navbar';
import Head from 'next/head';

export const MainLayout = ({ children, headProps }) => {
  return (
    <>
      <Head>
        <title>{headProps.title}</title>
      </Head>
      <>
        <Navbar />
        <div className='Page'>{children}</div>
      </>
    </>
  );
};
