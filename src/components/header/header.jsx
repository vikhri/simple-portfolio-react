import './header.css'

function Header() {

  return (
    <div className='header container'>
      <div className='header__logo-container'>
        <img className='header__logo' src='../../src/assets/iv-logo-2.jpg' alt='Logo'/>
      </div>
      <Mode/>
    </div>
  )
}


function Mode() {
  return (
    <div className='mode__circle'>
      <span className='mode__icon'>L</span>
    </div>
  )
}

export default Header