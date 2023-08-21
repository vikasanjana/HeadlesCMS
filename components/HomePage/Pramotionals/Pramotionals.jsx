import React, { useEffect, useState } from "react";
import PramotionalSimmer from "./components/PramotionalSimmer";
import axios from "axios";
import Banner from "./components/Banner";
import { Col, Row } from "react-bootstrap";
import LoadingButton from "@mui/lab/LoadingButton";
import { IconButton } from "@mui/material";
import { Autorenew } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";

const Pramotionals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pramotionalProduct, setPramotionalProduct] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = useState(1);
  const perPage = 10
  function handleClick() {
    setPage((prevPage) => prevPage + 1)
    setLoading(true);
  }
  async function getPramotionalProducts() {
    try {
      const response = await axios.get(
        `/api/products?perPage=${perPage}&page=${page}`
      );
      let productsArray = [...pramotionalProduct];
      Object.entries(response.data).map(([key, value]) => {
        console.log(value)
        if (value.images.length > 0) {
          const id = value.id;
          const name = value.name;
          const image = value.images[0].src;
          const onSale = value.on_sale;
          const regularPrice = value.regular_price;
          const salePrice = value.sale_price;
          const priceHtml = value.price_html
          productsArray.push({
            id,
            name,
            image,
            onSale,
            regularPrice,
            salePrice,
            priceHtml
          });
        }
      });
      setPramotionalProduct(productsArray);
      setIsLoading(false);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    getPramotionalProducts();
  }, [page]);
  return (
    <>
      {isLoading ? (
        <PramotionalSimmer />
      ) : (
        <Row
          style={{
            padding: "50px 0 50px 0",
          }}
        >
          {pramotionalProduct.map((item, key)  => (
            <Col key={key} xs={6} md={4} lg={3}  style={{ paddingTop: 12, paddingBottom: 12 }}>
              <Banner item={item} />
            </Col>
          ))}
          <Col sm={12}>
            <LoadingButton
              onClick={handleClick}
              endIcon={<Autorenew />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
            >
              <span>Load More</span>
            </LoadingButton>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Pramotionals;
