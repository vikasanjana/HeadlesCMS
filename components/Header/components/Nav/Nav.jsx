import React from "react";
import MegaMenu from "./components/MegaMenu";
import NavItem from "./components/NavItem";

const Nav = () => {
  return (
    <nav
      id="nav"
      className="m-0 d-flex justify-content-end align-item-center ckCustomNav"
      style={{ flexGrow: 1 }}
    >
      <ul className="my-auto">
        <NavItem />
      </ul>
    </nav>
  );
};

export default Nav;
