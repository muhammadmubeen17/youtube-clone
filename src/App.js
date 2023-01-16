import React from 'react';
import Navbar from './components/Navbar';
import SidebarCollapse from './components/SidebarCollapse';
import SidebarExpand from './components/SidebarExpand';
import Home from './screens/Home';
import { useState } from 'react';
import './App.css';
import Filterbar from './components/Filterbar';
import Bottombar from './components/Bottombar';

function App() {

  const [sidebarstate, setsidebarstate] = useState();

  return (
    <>
      <Navbar setsidebarstate={setsidebarstate} />
      {
        sidebarstate == "expand" ?
          <SidebarCollapse />
          : <></>
      }
      {
        sidebarstate == "collapse" || sidebarstate == undefined ?
          <SidebarExpand />
          : <></>
      }
      {
          <Bottombar />
      }
      <div className="flex flex-row pt-14 px-2 md:px-4">
        <Filterbar sidebarstate={sidebarstate} />
        <Home sidebarstate={sidebarstate} />
      </div>
    </>
  );
}

export default App;
