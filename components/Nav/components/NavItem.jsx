import Link from "next/link";
import React from "react";

const NavItem = ({ item }) => {
  const { id, title, slug } = item;
  return (
    <li>
      <Link href={`${slug}`} className="drop-link">
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
