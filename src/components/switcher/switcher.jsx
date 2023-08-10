import './switcher.css'

function Switcher ({currentTab, onCurrentTab, themeIsDark}) {
  return (
    <div className={`switcher ${themeIsDark && 'dark'}`}>
      <span className={`switcher__tab ${(currentTab == 'Portfolio') ? '' : 'endPosition'}`} ></span>
      <div className='switcher__button' onClick={() => onCurrentTab('Portfolio')}>Portfolio</div>
      <div className='switcher__button' onClick={() => onCurrentTab('About')}>About</div>
    </div>
  )
}

export default Switcher