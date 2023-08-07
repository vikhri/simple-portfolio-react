import './socials.css'

const socialList = [
  {
    name:'GitHub',
    iconDark: '../../src/assets/socials/github-dark.svg',
    iconLight: '../../src/assets/socials/github-light.svg',
    link: 'github.com/vikhri/'
  },
  {
    name:'Instagram',
    iconDark: '../../src/assets/socials/instagram-dark.svg',
    iconLight: '../../src/assets/socials/instagram-light.svg',
    link: 'instagram.com/ivikhrova'
  }
]

function Socials() {
  return (
    <ul className='socials'>
      {
        socialList.map((item) => (
          <SocialsItem item={item} key={item.name}/>))
      }
    </ul>
  )
}

// eslint-disable-next-line react/prop-types
function SocialsItem({item}) {
  return (
    <li className='socials__item'>
      <a className='socials__link'
        href={item.link}>
        <img src={item.iconLight}/>
      </a>
    </li>
  )
}

export default Socials