import BannerSlider from "@/components/HomePage/BannerSlider/BannerSlider";
import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import { Box, Skeleton } from "@mui/material";
import Pramotionals from "@/components/HomePage/Pramotionals/Pramotionals";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

const HomePage = () => {
  const [slides, setSlides] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function getSlides() {
    
    let response = (await axios.get('/api/banners')).data;
    let slidesArray = [];
    Object.entries(response).map(([key, value]) => {
      const id = value.id;
      const content = value.content.rendered;
      const image = value._embedded["wp:featuredmedia"][0].source_url;
      slidesArray.push({ id, content, image });
    });
    setSlides(slidesArray);
    setIsLoading(false);
  }
  useEffect(() => {
    getSlides();
  }, []);
  return (
    <>
      {isLoading ? (
        <Box sx={{ width: 100 + "vw" }}>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Box>
      ) : (
          <Layout>
            <BannerSlider slides={slides} />
            <Container>
                  <Pramotionals />
            </Container>
            {/* <FeaturedTabs /> */}
          </Layout>
      )}
    </>
  );
};

export default HomePage;
