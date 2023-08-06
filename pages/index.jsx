import BannerSlider from "@/components/Header/components/HomePage/BannerSlider/BannerSlider";
import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import HomePageContext from "./HomePageContext";
import { fetchGetReqFromUrl } from "@/utility/AxiosFetch";
import { Box, Skeleton } from "@mui/material";
import Pramotionals from "@/components/Header/components/HomePage/Pramotionals/Pramotionals";
import { Col, Container, Row } from "react-bootstrap";
import FeaturedTabs from "@/components/Header/components/HomePage/FeaturedTabs/FeaturedTabs";

const index = () => {
  const [slides, setSlides] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function getSlides() {
    let url = `${process.env.HEADLESS_API_URL}/${process.env.HEADLESS_SLIDER_POST_TYPE}?_embed`;
    let response = await fetchGetReqFromUrl(url);
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
        <HomePageContext.Provider value={{ slides }}>
          <Layout>
            <BannerSlider />
            <Container style={{width:1230 + 'px'}}>
              <Row>
                <Col xs={12}>
                  <Pramotionals />
                </Col>
              </Row>
            </Container>
            <FeaturedTabs />
          </Layout>
        </HomePageContext.Provider>
      )}
    </>
  );
};

export default index;
