import { useState } from 'react'
import './main.css'
import Intro from "../intro/intro.jsx";
import ButtonBar from "../bar/bar.jsx";
import ProjectsList from "../list/list.jsx";
import Switcher from "../switcher/switcher.jsx";
import About from "../about/about.jsx";


// eslint-disable-next-line react/prop-types
function Main({themeIsDark, dict}) {

  const [currentTab, setCurrentTab] = useState('Portfolio');

  function HandleCurrentTab (tab) {
    setCurrentTab(tab)
  }

  return (
    <div className='main__container'>
      <Intro themeIsDark={themeIsDark} dict={dict}/>
      <ButtonBar themeIsDark={themeIsDark} dict={dict}/>
      <Switcher themeIsDark={themeIsDark} currentTab={currentTab} onCurrentTab={HandleCurrentTab} dict={dict}/>
      <Content themeIsDark={themeIsDark} currentTab={currentTab} dict={dict}/>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
function Content ({currentTab, themeIsDark, dict}) {
  if (currentTab == 'Portfolio')  return (<ProjectsList themeIsDark={themeIsDark} dict={dict}/>)
    else return (<About themeIsDark={themeIsDark} dict={dict}/>);

}
export default Main