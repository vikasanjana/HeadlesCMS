import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import ProductCard from "@/components/product/productCard";
import { useEffect, useState } from "react";
import axios from "axios";

const FeaturedProducts = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const getFeaturedProducts = async () => {
    try {
      const taxonomy = "product_cat";
      const slug = "featured";
      const response = await axios.get(
        `/api/products?taxonomy=${taxonomy}&slug=${slug}`
      );
      const productsArray = response.data
        .filter((value) => value.regular_price.length > 0)
        .map((value) => ({
          id: value.id,
          name: value.name,
          image: value.images[0].src,
          onSale: value.on_sale,
          regularPrice: value.regular_price,
          salePrice: value.sale_price,
          priceHtml: value.price_html,
        }));
      setProducts(productsArray);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getFeaturedProducts();
  }, []);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div
          style={{
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Swiper
            // install Swiper modules
            modules={[Navigation , Autoplay ]}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={4}
            loop
            style={{
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.id}>
                <div className="product-group d-flex flex-column" style={{gap:30}}>
                  {products[index] && (
                    <div className="product-card">
                      <ProductCard item={products[index]} />
                    </div>
                  )}
                  {products[index + 1] && (
                    <div className="product-card">
                      <ProductCard item={products[index + 1]} />
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default FeaturedProducts;
