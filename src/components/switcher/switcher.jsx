import './switcher.css'

// eslint-disable-next-line react/prop-types
function Switcher ({currentTab, onCurrentTab, themeIsDark, dict}) {
  return (
    <div className={`switcher ${themeIsDark && 'dark'}`}>
      <span className={`switcher__tab ${(currentTab == 'Portfolio') ? '' : 'endPosition'}`} ></span>
      <button
        className='switcher__button'
        tabIndex={6}
        onClick={() => onCurrentTab('Portfolio')}>
        {/* eslint-disable-next-line react/prop-types */}
        {dict.portfolio}
      </button>
      <button
        className='switcher__button'
        tabIndex={7}
        onClick={() => onCurrentTab('About')}>
        {/* eslint-disable-next-line react/prop-types */}
        {dict.about}
          </button>
    </div>
  )
}

export default Switcher