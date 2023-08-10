import './header.css'

function Header({onToggleTheme, themeIsDark}) {

  return (
    <div className={`header container ${themeIsDark && 'dark'}`}>
      <div className='header__logo-container'>
        <img className='header__logo' src='../../src/assets/iv-logo-2.png' alt='Logo'/>
      </div>
      <Mode onToggleTheme={onToggleTheme}/>
    </div>
  )
}


function Mode({onToggleTheme}) {
  return (
    <div className='mode__circle' onClick={onToggleTheme}>
      <span className='mode__icon'></span>
    </div>
  )
}

export default Header