import React from "react";
import Logo from "./components/Logo/Logo";
import Icons from "./components/Icons/Icons";
import Nav from "./components/Nav/Nav";

const Header = () => {
  return (
    <header id="mt-header" className="style4" style={{ flexGrow: 1 }}>
      <div className="mt-bottom-bar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 d-flex flex-direction-row justify-content-between align-items-center">
              <Logo />
              <Nav />
              <Icons />
            </div>
          </div>
        </div>
      </div>
      <span className="mt-side-over"></span>
    </header>
  );
};

export default Header;
