import './about.css'

function About({themeIsDark, dict}) {


  return (
    <div className={`about ${themeIsDark && 'dark'}`}>
      <div className='about__prolog'>
        <p>{dict.aboutDesc}</p>
      </div>
      <div className='about__experience'>
        <h2 className='about__list-title'>{dict.workExp}</h2>
        <ul className='about__list'>
          <li className='about__item'>
            <span className='about__dates'>{dict.present}</span>
            <h3 className='about__item-title'>{dict.workPosition1}</h3>
            <p className='about__company'>{dict.employer1}</p>
            <p className='about__description'>{dict.workDesс1}</p>
          </li>
        </ul>
      </div>
      <div className='about__education'>
        <h2 className='about__list-title'>{dict.educationTitle}</h2>
        <ul className='about__list about__list--two-columns'>
          { dict.education.map((school, i) => (
              <li className='about__item' key={i} >
                <span className='about__dates'>{school.dates}</span>
                <h3 className='about__item-title'>{school.course}</h3>
                <p className='about__company'>{school.place}</p>
                <p className='about__description'>{school.desc}</p>
              </li>
            ))
          }
        </ul>
      </div>
      <div className='about__hard-skills'>
        <h2 className='about__list-title'>Hard Skills</h2>
        <ul className='about__list about__list--four-columns'>
          {dict.hardSkills.map((item) => (
            <HardSkill item={item} key={item.name}/>
          ))}

        </ul>
      </div>
      <div className='about__soft-skills'>
        <h2 className='about__list-title'>Soft Skills</h2>
        <ul className='about__list about__list--two-columns'>
          {dict.softSkills.map((item, i) => (
            <li className='about__skills-item soft-skill' key={i}>
              <p className='soft-skill__name'>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function HardSkill({item}) {
  return (
    <li className='about__skills-item '>
      <figure className='hard-skill'>
      <div className='hard-skill__image-wrapper' style={{backgroundColor: item.bgColor}}>
        <img className='hard-skill__image' src={item.img}/>
      </div>
        <span className='hard-skill__level'>{item.tags}</span>
        <figcaption className='hard-skill__name'>{item.name}</figcaption>
      </figure>
    </li>
  )
}
export default About