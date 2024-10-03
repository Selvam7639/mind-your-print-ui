import React from "react";

const NavBar = ({ moduleName }) => {
  return (
    <div>
      <div className="border-b ml-14 ">
        <div className="h-16 flex items-center">
          <p className="text-black font-bold px-6 uppercase">{moduleName}</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
