import cls from './Person.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PersonExperience = ({ education, experience }) => (
  <div className='row page-block'>
    <div className='col-12'>
      <h2 className='text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600'>
        Experience &amp; Education
      </h2>
    </div>
    <div className={cls.resumeBox}>
      <ul className={cls.ExperienceList}>
        {[...education, ...experience].map((item, i) => (
          <li className={cls.ExperienceItem} key={item._key}>
            <div className={cls.icon}>
              {i === 0 ? (
                <FontAwesomeIcon icon='graduation-cap' />
              ) : (                
                <FontAwesomeIcon icon='briefcase' />
              )}
            </div>
            <span className={cls.time + ' open-sans-font text-uppercase'}>
              {item.duaration}
            </span>
            <h5 className='poppins-font text-uppercase'>{item.title}</h5>
            <p className='open-sans-font'>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
