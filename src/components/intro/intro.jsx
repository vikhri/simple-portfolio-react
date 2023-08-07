import './intro.css'
import Socials from "../socials/socials.jsx";

function Intro() {
  return (
    <div className='intro'>
      <div className='intro__avatar-wrapper'>
        <img className='intro__avatar' src='../../src/assets/avatar.jpg' alt='My photo' width='100' height='100'/>
      </div>
      <div className='intro__description'>
        <h1 className='intro__name'>Irina Vikhrova</h1>
        <p className='intro__position'>Front-End Developer</p>
        <Socials />
      </div>
    </div>
  )
}


export default Intro