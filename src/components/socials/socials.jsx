import './socials.css'

const socialList = [
  {
    name:'GitHub',
    iconDark: '../../src/assets/socials/github-dark.svg',
    iconLight: '../../src/assets/socials/github-light.svg',
    link: 'https://github.com/vikhri/'
  },
  {
    name:'Instagram',
    iconDark: '../../src/assets/socials/instagram-dark.svg',
    iconLight: '../../src/assets/socials/instagram-light.svg',
    link: 'https://instagram.com/ivikhrova'
  }
]

function Socials({themeIsDark}) {
  return (
    <ul className={`socials ${themeIsDark && 'dark'}`}>
      {
        socialList.map((item) => (
          <SocialsItem themeIsDark={themeIsDark} item={item} key={item.name}/>))
      }
    </ul>
  )
}

// eslint-disable-next-line react/prop-types
function SocialsItem({item, themeIsDark}) {
  return (
    <li className='socials__item'>
      <a tabIndex={2} className='socials__link'
        href={item.link}
        target='_blank'
      >
        <img src={themeIsDark ? item.iconDark : item.iconLight}/>
      </a>
    </li>
  )
}

export default Socials