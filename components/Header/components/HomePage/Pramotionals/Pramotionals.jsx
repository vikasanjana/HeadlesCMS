import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PramotionalContext from "./PramotionalContext";
import PramotionalSimmer from "./components/PramotionalSimmer";
import axios from "axios";
import Banner from "./components/Banner";

const Pramotionals = () => {
  const [pramotionalProduct, setPramotionalProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const taxonomy = "promotional";
  const slug = "home-page";
  async function getPramotionalProducts() {
    try {
      const response = await axios.get(
        `/api/products?taxonomy=${taxonomy}&slug=${slug}`
      );
      console.log(response);
      let productsArray = [];
      Object.entries(response.data).map(([key, value]) => {
        const id = value.id;
        const name = value.name;
        const image = value.images[0].src;
        const onSale = value.on_sale;
        const regularPrice = value.regular_price;
        const salePrice = value.sale_price;
        productsArray.push({
          id,
          name,
          image,
          onSale,
          regularPrice,
          salePrice,
        });
      });
      setPramotionalProduct(productsArray);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    getPramotionalProducts();
  }, [taxonomy, slug]);
  return (
    <>
      {isLoading ? (
        <PramotionalSimmer />
      ) : (
        <PramotionalContext.Provider value={{ pramotionalProduct }}>
          <div className="banner-frame">
            <Banner
              classname={"banner-1 wow fadeInLeft"}
              image={pramotionalProduct[3].image}
              name={pramotionalProduct[3].name}
              salePrice={pramotionalProduct[3].salePrice}
              regularPrice={pramotionalProduct[3].regularPrice}
              onSale={pramotionalProduct[3].onSale}
              id={pramotionalProduct[3].id}
            />
            <div className="banner-box first">
              <Banner
                classname={"banner-2 wow fadeInUp"}
                image={pramotionalProduct[2].image}
                name={pramotionalProduct[2].name}
                salePrice={pramotionalProduct[2].salePrice}
                regularPrice={pramotionalProduct[2].regularPrice}
                onSale={pramotionalProduct[2].onSale}
                id={pramotionalProduct[2].id}
              />

              <Banner
                classname={"banner-3 right wow fadeInDown"}
                image={pramotionalProduct[1].image}
                name={pramotionalProduct[1].name}
                salePrice={pramotionalProduct[1].salePrice}
                regularPrice={pramotionalProduct[1].regularPrice}
                onSale={pramotionalProduct[1].onSale}
                id={pramotionalProduct[1].id}
              />
            </div>

            <Banner
              classname={"banner-4 hidden-sm wow fadeInRight"}
              image={pramotionalProduct[0].image}
              name={pramotionalProduct[0].name}
              salePrice={pramotionalProduct[0].salePrice}
              regularPrice={pramotionalProduct[0].regularPrice}
              onSale={pramotionalProduct[0].onSale}
              id={pramotionalProduct[0].id}
            />
          </div>
        </PramotionalContext.Provider>
      )}
    </>
  );
};

export default Pramotionals;
