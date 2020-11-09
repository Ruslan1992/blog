import cls from './Person.module.scss';

type PersonInfoItem = {
  _key: string;
  key: string;
  value: string;
};
type PersonStatsItem = {
  _key: string;
  count: string;
  title: string;
};
type PropsType = {
  avatar: string;
  info: PersonInfoItem[];
  stats: PersonStatsItem[];
};

export const PersonInfo = ({ avatar, info, stats }: PropsType) => (
  <div className='d-flex page-block flex-wrap'>
    <div className='col-12 col-lg-5'>
      <div className={cls.PersonInfo}>
        <div className={cls.PersonAvatar}>
          <img src={avatar} alt={'Ruslan Andreichikov'} />
        </div>
        <ul>
          {info.map((item) => (
            <li key={item._key}>
              {item.key}: <strong>{item.value}</strong>
            </li>
          ))}
        </ul>
        <a href='/' className={'btn btn-yellow'}>
          Download CV
        </a>
      </div>
    </div>
    <div className='col-12 col-lg-7'>
      <div className={cls.PersonAbout}>
        <div className={cls.ListStats + ' mt-3'}>
          {stats.map((stat) => (
            <div className={cls.BoxStats} key={stat._key}>
              <h3 className='position-relative yellow'>{stat.count}</h3>
              <div className='position-relative text-uppercase'>
                {stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);