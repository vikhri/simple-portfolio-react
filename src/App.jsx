import {useState} from "react";
import './App.css'
import Header from "./components/header/header.jsx";
import Main from "./components/main/main.jsx";
function App() {

let [themeIsDark, setThemeIsDark] = useState(false);

function HandleToggleTheme() {
  setThemeIsDark(themeIsDark = !themeIsDark);
}

  return (
    <div className={`app ${themeIsDark && 'dark'}`}>
      <Header onToggleTheme={HandleToggleTheme} themeIsDark={themeIsDark}/>
      <Main themeIsDark={themeIsDark} />
    </div>
  )
}


export default App
