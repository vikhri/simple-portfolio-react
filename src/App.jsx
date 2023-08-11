import {useState} from "react";
import './App.css'
import Header from "./components/header/header.jsx";
import Main from "./components/main/main.jsx";
import dictionary from "./lang.jsx";
function App() {

let [themeIsDark, setThemeIsDark] = useState(false);
let [langIsRu , setLang ] = useState(false);
let [dict, setDict] = useState(dictionary.en)

function HandleLangSwitch() {
  setLang(langIsRu = !langIsRu);
  langIsRu ? setDict(dictionary.ru) : setDict(dictionary.en);
}

function HandleToggleTheme() {
  setThemeIsDark(themeIsDark = !themeIsDark);
}



  return (
    <div className={`app ${themeIsDark && 'dark'}`}>
      <Header onToggleTheme={HandleToggleTheme} themeIsDark={themeIsDark} onLangSwitch={HandleLangSwitch} langIsRu={langIsRu}/>
      <Main themeIsDark={themeIsDark} dict={dict}/>
    </div>
  )
}


export default App
