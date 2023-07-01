import React from "react";
import SearchIcon from "./component/SearchIcon";
import Wishlist from "./component/Wishlist";
import MiniCart from "./component/MiniCart";
import BarIcon from "./component/BarIcon";
import MobileBarIcon from "./component/MobileBarIcon";
import SearchIconMain from "./component/SearchIcon";

const Icons = () => {
  return (
    <ul className="mt-icon-list">
      <SearchIconMain />
      <Wishlist />
      <MiniCart />
      <BarIcon />
    </ul>
  );
};

export default Icons;
