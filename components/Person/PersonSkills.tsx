export const PersonSkills = ({ skills }) => (
  <div className='page-block'>
    <h2>My Skills</h2>
    <div className='row'>
      {skills.map((skill) => (
        <div className='col-6 col-md-3 mb-5' key={skill._key}>
          <div className={`c100 p${skill.percent}`}>
            <span>{skill.percent}%</span>
            <div className='slice'>
              <div className='bar'></div>
              <div className='fill'></div>
            </div>
          </div>
          <h6 className='text-center mt-2 mt-sm-4'>
            {skill.title}
          </h6>
        </div>
      ))}
    </div>
  </div>
);
