import { useState } from 'react'
import './main.css'
import Intro from "../intro/intro.jsx";
import ButtonBar from "../bar/bar.jsx";
import ProjectsList from "../list/list.jsx";
import Switcher from "../switcher/switcher.jsx";
import About from "../about/about.jsx";


function Main({themeIsDark}) {

  const [currentTab, setCurrentTab] = useState('Portfolio');

  function HandleCurrentTab (tab) {
    setCurrentTab(tab)
  }

  return (
    <div className='main__container'>
      <Intro themeIsDark={themeIsDark}/>
      <ButtonBar themeIsDark={themeIsDark}/>
      <Switcher themeIsDark={themeIsDark} currentTab={currentTab} onCurrentTab={HandleCurrentTab}/>
      <Content themeIsDark={themeIsDark} currentTab={currentTab}/>
    </div>
  )
}

function Content ({currentTab, themeIsDark}) {
  if (currentTab == 'Portfolio')  return (<ProjectsList themeIsDark={themeIsDark}/>)
    else return (<About themeIsDark={themeIsDark}/>);

}
export default Main