import BlockContent from '@sanity/block-content-to-react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MainLayout } from 'layouts/MainLayout';
import { PageContainer } from 'components/PageContainer/PageContainer';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { ContactForm } from 'components/Contact/ContactForm';
import { getPersonContact } from 'lib/api';
import cls from 'styles/contact.module.scss';

const headProps = {
  title: 'Contacts | Ruslan Andreichikov',
};

// const serializers = {
//   types: {
//     code: () => <h1>Code block</h1>,
//   },
// };

type Social = {
  _key: string
  link: string,
  social: IconName
}

type PropsContact = {
  contact: {
    content: any,
    phone: string,
    mail: string,
    socials: Social[]
  }
}

const Contacts = ({ contact }:PropsContact) => {
  return (
    <MainLayout headProps={headProps}>
      <PageContainer>
        <PageTitle shadow={'contact'}>
          get in <span>touch</span>
        </PageTitle>
        <div className='row'>
          <div className='col-12 col-lg-4'>
            <div className={cls.left}>
              <BlockContent blocks={contact.content} className={cls.content} />
              <a
                href={`mailto:${contact.mail}`}
                className={cls.mail + ' d-flex'}
              >
                <div className={cls.icon}>
                  <FontAwesomeIcon icon='envelope-open' />
                </div>
                <div className={cls.text}>
                  <strong>Mail Me</strong>
                  {contact.mail}
                </div>
              </a>
              <a
                href={`tel:${contact.phone}`}
                className={cls.phone + ' d-flex'}
              >
                <div className={cls.icon}>
                  <FontAwesomeIcon icon='phone-square' />
                </div>
                <div className={cls.text}>
                  <strong>Call Me</strong>
                  {contact.phone}
                </div>
              </a>
              <ul className={cls.socialsList + ' d-flex'}>
                {contact.socials.map((item) => (
                  <li key={item._key}>
                    <a href={item.link} className={item.social}>
                      <FontAwesomeIcon icon={['fab', item.social]} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </PageContainer>
    </MainLayout>
  );
};

export async function getStaticProps() {
  const contact = await getPersonContact();
  return {
    props: {
      ...contact
    },
  };
}

export default Contacts;
