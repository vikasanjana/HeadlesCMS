import { Box, Skeleton } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Logo = () => {
  const [siteIcon, setSiteIcon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getIcon() {
    try {
      const response = await axios.get(
        `${process.env.HEADLESS_HOME_URL}/wp-json/headless-custom/v1/site-logo`,
        {
          headers: {
            Authorization: `Bearer ${process.env.HEADLESS_JWT_TOKEN}`,
          },
        }
      );
      setSiteIcon(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getIcon();
  }, []);
  return (
    <div className="mt-logo d-flex align-items-center">
      {isLoading ? (
        <Box sx={{ width: 50 }}>
          <Skeleton variant="rectangular" />
        </Box>
      ) : (
        <a href="#" className="d-flex align-items-center">
          <Image fill src={siteIcon?.logo_url} alt="headless-icon" />
        </a>
      )}
    </div>
  );
};

export default Logo;
