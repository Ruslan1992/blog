import { InferGetStaticPropsType } from 'next';
import { MainLayout } from 'layouts/MainLayout';
import { getHomeContent } from 'lib/api';
import cls from 'styles/home.module.scss';
import { getWindowWidth } from 'helpers/getWindowWidth';

type HomeContent = {
  greeting: string;
  fullname: string;
  about: string;
  photo: string;
  avatar: string;
};

const headProps = {
  title: 'Ruslan Andreichikov',
};

export const getStaticProps = async () => {
  const homeContent: HomeContent = await getHomeContent();
  return {
    props: {
      homeContent,
    },
  };
};

const Home = ({
  homeContent,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { greeting, fullname, about, photo, avatar } = homeContent;
  const windowWidth = getWindowWidth(992);
  const myPhoto: string = windowWidth ? photo : avatar;

  return (
    <MainLayout headProps={headProps}>
      <div className='container-fluid'>
        <div className={cls.main}>
          <div className={cls.colorBlock}></div>
          <div className='row align-items-center'>
            <div className={cls.img + ' col-lg-4'}>
              <img src={myPhoto} alt={fullname} />
            </div>
            <div className='col-12 col-lg-8 offset-lg-4 text-center text-lg-left'>
              <div className={cls.header}>
                <div className={cls.greating}>{greeting}</div>
                <div className={cls.title}>
                  <h1>{fullname}</h1>
                </div>
                <div className={cls.description}>{about}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
