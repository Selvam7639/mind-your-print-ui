import React, { useState } from "react";
import Sidebar from "../sideBar/sideBar";
import NavBar from "../navBar/NavBar";

const MainComponent = () => {
  const [moduleName, setModuleName] = useState("Dashboard");

  const updateModule = (modName) => {
    setModuleName(modName);
  };

  return (
    <div>
      <NavBar moduleName={moduleName} />
      <Sidebar updateModule={updateModule} />
    </div>
  );
};

export default MainComponent;
