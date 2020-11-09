import { MainLayout } from 'layouts/MainLayout';
import { PageTitle } from 'components/PageTitle/PageTitle';
import cls from 'styles/blog.module.scss';

const headProps = {
  title: 'Contacts | Ruslan Andreichikov',
};

const Blog = () => (
  <MainLayout headProps={headProps}>
    <div>
      <PageTitle shadow={'posts'}>
        my <span>blog</span>
      </PageTitle>
    </div>
  </MainLayout>
);

export default Blog;
