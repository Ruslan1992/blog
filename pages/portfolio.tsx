import { useState } from 'react';
import { MainLayout } from 'layouts/MainLayout';
import { PageContainer } from 'components/PageContainer/PageContainer';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { Modal } from 'components/Modal/Modal';

import cls from 'styles/portfolio.module.scss';
import { getPortfolio } from 'lib/api';

const headProps = {
  title: 'Home page',
};

const Portfolio = ({ portfolio }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function changePortfolio(count) {
    let future = count;
    if (future < 0) future = portfolio.length - 1;
    if (future > portfolio.length - 1) future = 0;
    setModalContent({
      item: portfolio[future],
      idx: future,
    });
  }

  function portfolioHandler(idx) {
    setModalContent({
      item: portfolio[idx],
      idx,
    });
    setModalOpen(true);
  }

  return (
    <MainLayout headProps={headProps}>
      <PageContainer>
        <PageTitle shadow={'works'}>
          my <span>portfolio</span>
        </PageTitle>
        <div className='portfolio'>
          <ul className={cls.portfolioList + ' card-deck'}>
            {portfolio.map((item, idx) => (
              <li
                key={idx}
                onClick={() => portfolioHandler(idx)}
                className={cls.portfolioItem + ' card'}
                style={{
                  background: `url("${item.image}") center center`,
                }}
              ></li>
            ))}
          </ul>
        </div>
      </PageContainer>

      {modalOpen && (
        <Modal
          modalContent={modalContent}
          onClose={() => setModalOpen(false)}
          onChangeModal={(count) => changePortfolio(count)}
        />
      )}
    </MainLayout>
  );
};

export async function getStaticProps() {
  const portfolio = await getPortfolio();
  return {
    props: {
      portfolio,
    },
  };
}

export default Portfolio;
