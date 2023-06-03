import { useState, useEffect } from "react";
import IssPositionCard from './components/IssPositionCard';
import Astronauts from './components/Astronauts';
import MapData from './components/MapData';
import Hamburger from "./../src/assets/hamburger.svg";
import X from "./../src/assets/x.svg";
import Logo from "./../src/assets/logo.svg";
import Iss from "./../src/assets/iss.png";

function App() {
  const [longitude, setLongitude] = useState<number>();
  const [latitude, setLatitude] = useState<number>();
  const [showButton, setShowButton] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth <= 1023) {
      setShowButton(true);
    } 
    else if (window.innerWidth > 1023) {
      setShowButton(false);
      setShowMenu(true);
    }

  })

  return (
    <>
      <div className="fixed z-20 ml-5 mt-5 overflow-scroll">
        <img src={Logo} className="mb-5 w-56 lg:w-40" />
        {showButton && 
          <div onClick={() => setShowMenu(showMenu ? false : true)} className={`cursor-pointer flex justify-center items-center rounded-full inline-block leading-none h-10 w-10 bg-[color:var(--menu-blue)] border-solid border border-[color:var(--menu-divider-blue)] " ${showMenu && "rounded-b-none border-b-0"}`}>
            <img 
              src={showMenu ? X : Hamburger} 
              className={`${showMenu ? "w-6" : "w-7"}`}
              alt="hamburger menu" />
        </div>}
        {showMenu && <Astronauts />}
        {showMenu && <IssPositionCard latitude={latitude} longitude={longitude} />}
      </div>
      
      <div className="flex relative justify-center items-center">
        <img className="w-80 z-10 pointer-events-none fixed lg:w-60" src={Iss} />
        <MapData setLongitude={setLongitude} setLatitude={setLatitude}/>
      </div>
    </>
  )
}

export default App
