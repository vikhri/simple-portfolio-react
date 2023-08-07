import './switcher.css'

function Switcher ({currentTab, onCurrentTab}) {
  return (
    <div className='switcher'>
      <div className={`switcher__button ${(currentTab == 'Portfolio') ? 'isCurrent' : ''}`} onClick={() => onCurrentTab('Portfolio')}>Portfolio</div>
      <div className={`switcher__button ${(currentTab == 'About') ? 'isCurrent' : ''}`} onClick={() => onCurrentTab('About')}>About</div>
    </div>
  )
}

export default Switcher