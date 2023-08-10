import './intro.css'
import Socials from "../socials/socials.jsx";

function Intro({themeIsDark}) {
  return (
    <div className={`intro ${themeIsDark && 'dark'}`}>
      <div className='intro__avatar-wrapper'>
        <img className='intro__avatar' src='../../src/assets/avatar.jpg' alt='My photo' width='100' height='100'/>
      </div>
      <div className='intro__description'>
        <h1 className='intro__name'>Irina Vikhrova</h1>
        <p className='intro__position'>Front-End Developer</p>
        <Socials themeIsDark={themeIsDark}/>
      </div>
    </div>
  )
}


export default Intro