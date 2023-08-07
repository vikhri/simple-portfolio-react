import { useState } from 'react'
import './main.css'
import Intro from "../intro/intro.jsx";
import ButtonBar from "../bar/bar.jsx";
import ProjectsList from "../list/list.jsx";
import Switcher from "../switcher/switcher.jsx";
import About from "../about/about.jsx";


function Main() {

  const [currentTab, setCurrentTab] = useState('Portfolio');

  function HandleCurrentTab (tab) {
    setCurrentTab(tab)
  }

  return (
    <div className='main__container'>
      <Intro />
      <ButtonBar/>
      <Switcher currentTab={currentTab} onCurrentTab={HandleCurrentTab}/>
      <Content currentTab={currentTab}/>
    </div>
  )
}

function Content ({currentTab}) {
  if (currentTab == 'Portfolio')  return (<ProjectsList />)
    else return (<About />);

}
export default Main