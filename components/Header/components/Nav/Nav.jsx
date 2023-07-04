import React, { useEffect, useState } from "react";
import NavItem from "./components/NavItem";
import axios from "axios";
import { Box, Skeleton } from "@mui/material";

const Nav = () => {
  const [menus, setMenus] = useState();
  const [isLoading, setIsLoading] = useState(true);
  async function getMenus() {
    try {
      const response = await axios.get(
        `${process.env.HEADLESS_API_URL}/menu-items?menus=${process.env.HEADLESS_API_MENU_ID}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.HEADLESS_JWT_TOKEN}`,
          },
        }
      );
      let menusArray = [];
      Object.entries(response.data).map(([key, value]) => {
        const id = value.id;
        const title = value.title.rendered;
        const slug = value.title.rendered.toLowerCase().replace(/ /g, "-");
        menusArray.push({ id, title, slug });
      });
      setMenus(menusArray);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMenus();
  }, []);
  return (
    <nav
      id="nav"
      className="m-0 d-flex justify-content-end align-item-center ckCustomNav"
      style={{ flexGrow: 1 }}
    >
      {isLoading ? (
        <Box sx={{ width: 300 }}>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Box>
      ) : (
        <ul className="my-auto">
          {menus?.map((item) => {
            return <NavItem item={item} key={item.id} />;
          })}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
