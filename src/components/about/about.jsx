import './about.css'

function About() {

  const skills = {
    hardSkills: [
      { name: 'HTML5',
        img: '../../src/assets/hard/html.png',
        tags: '',
        bgColor: 'darkorange',
      },
      { name: 'PUG',
        img: '../../src/assets/hard/pug.png',
        tags: '',
        bgColor: 'white',
      },
      { name: 'CSS3',
        img: '../../src/assets/hard/css.png',
        tags: '',
        bgColor: '#35a8db'
      },
      { name: 'POSTCSS',
        img: '../../src/assets/hard/pcss.png',
        tags: '',
        bgColor: 'black'
      },
      { name: 'Sass',
        img: '../../src/assets/hard/sass.png',
        tags: '',
        bgColor: 'white'
      },
      { name: 'Vanila JS',
        img: '../../src/assets/hard/js.png',
        tags: '',
        bgColor: '#f0db4f'
      },
      { name: 'REACT JS',
        img: '../../src/assets/hard/react.png',
        tags: '',
        bgColor: 'black'
      },
      { name: 'GIT',
        img: '../../src/assets/hard/git.png',
        tags: '',
        bgColor: 'white'
      },
      { name: 'WEBPACK',
        img: '../../src/assets/hard/wp.png',
        tags: '',
        bgColor: 'white'
      },
      { name: 'VITE',
        img: '../../src/assets/hard/vite.png',
        tags: '',
        bgColor: 'white'
      },
      { name: 'Figma',
        img: '../../src/assets/hard/figma.png',
        tags: '',
        bgColor: 'white'
      }],
    softSkills: ['Fast Learning', 'Empathy', 'Time management', 'Team work', 'Responsibility']
  }

  return (
    <div className='about'>
      <div className='about__prolog'>
        <p>About About About bout About About bout About About bout About About bout About About bout About Aboutbout About About</p>
      </div>
      <div className='about__experience'>
        <h2 className='about__list-title'>Work Experience</h2>
        <ul className='about__list'>
          <li className='about__item'>
            <span className='about__dates'>Present</span>
            <h3 className='about__item-title'>Frontend developer</h3>
            <p className='about__company'>Optimal Group</p>
            <p className='about__description'>desc desc desc desc descdesc desc desc</p>
          </li>
        </ul>
      </div>
      <div className='about__education'>
        <h2 className='about__list-title'>Education</h2>
        <ul className='about__list about__list--two-columns'>
          <li className='about__item'>
            <span className='about__dates'>Present</span>
            <h3 className='about__item-title'>HTML</h3>
            <p className='about__company'>HTML-academy</p>
            <p className='about__description'>desc desc desc desc descdesc desc desc</p>
          </li>
          <li className='about__item'>
            <span className='about__dates'>Present</span>
            <h3 className='about__item-title'>JS professional</h3>
            <p className='about__company'>Udemy</p>
            <p className='about__description'>desc desc desc desc descdesc desc desc</p>
          </li>
        </ul>
      </div>
      <div className='about__hard-skills'>
        <h2 className='about__list-title'>Hard Skills</h2>
        <ul className='about__list about__list--four-columns'>
          {skills.hardSkills.map((item) => (
            <HardSkill item={item} key={item.name}/>
          ))}

        </ul>
      </div>
      <div className='about__soft-skills'>
        <h2 className='about__list-title'>Soft Skills</h2>
        <ul className='about__list about__list--two-columns'>
          {skills.softSkills.map((item, i) => (
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