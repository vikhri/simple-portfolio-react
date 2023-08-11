import './header.css'

function Header({onToggleTheme, themeIsDark, onLangSwitch, langIsRu}) {

  return (
    <div className={`header container ${themeIsDark && 'dark'}`}>
      <div className='header__logo-container'>
        <img className='header__logo' src='../../src/assets/iv-logo-2.png' alt='Logo'/>
      </div>
      <div className='header__toolbar'>
      <LangSwitcher themeIsDark={themeIsDark} onLangSwitch={onLangSwitch} langIsRu={langIsRu}/>
      <Mode onToggleTheme={onToggleTheme}/>
      </div>
    </div>
  )
}


function Mode({onToggleTheme}) {
  return (
    <div className='mode__circle' tabIndex={1} onClick={onToggleTheme}>
      <span className='mode__icon'></span>
    </div>
  )
}


function LangSwitcher({onLangSwitch,langIsRu}) {
  return (
    <>
      <button className='langSwitch__button' onClick={() => onLangSwitch()}>
        <span className={langIsRu ? 'larger' : 'smaller'}>RU</span>
        /
        <span className={!langIsRu ? 'larger' : 'smaller'}>EN</span>
      </button>
    </>
  )
}
export default Header