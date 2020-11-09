import { MainLayout } from 'layouts/MainLayout';
import { PageContainer } from 'components/PageContainer/PageContainer';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { PersonInfo } from 'components/Person/PersonInfo';
import { PersonSkills } from 'components/Person/PersonSkills';
import { PersonExperience } from 'components/Person/PersonExperience';
import { getPersonInfo, getPersonSkills, getPersonExperience } from 'lib/api';

const headProps = {
  title: 'Resume',
};

export default function Resume({ personInfo, personSkills, personExperience }) {
  return (
    <MainLayout headProps={headProps}>
      <PageContainer>
        <PageTitle shadow={'resume'}>
          about <span>me</span>
        </PageTitle>
        <PersonInfo {...personInfo} />
        <hr className='separator' />
        <PersonSkills {...personSkills} />
        <hr className='separator'/>
        <PersonExperience {...personExperience} />        
      </PageContainer>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const personInfo = await getPersonInfo();
  const personSkills = await getPersonSkills();
  const personExperience = await getPersonExperience();
  return {
    props: {
      personInfo,
      personSkills,
      personExperience
    },
  };
}
