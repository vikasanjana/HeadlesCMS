import { Box, Skeleton } from "@mui/material";
import NavItem from "./components/NavItem";

const Nav = () => {
  const menus = [
    {
      id: 1,
      title: "Home",
      slug: "/",
    },
    {
      id: 2,
      title: "About",
      slug: "/about",
    },
    {
      id: 3,
      title: "Shop",
      slug: "/shop",
    },
  ];
  return (
    <nav
      id="nav"
      className="m-0 d-flex justify-content-end align-item-center ckCustomNav"
      style={{ flexGrow: 1 }}
    >
      <ul className="my-auto">
        {menus?.map((item) => {
          return <NavItem item={item} key={item.id} />;
        })}
      </ul>
    </nav>
  );
};

export default Nav;
