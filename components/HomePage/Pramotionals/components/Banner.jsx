import ProductCard from "@/components/product/productCard";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Image from "next/image";
import Link from "next/link";

const Banner = ({ item }) => {
  return (
      <ProductCard item={item} style={{
        backgroundColor:'#F5F5F5'
      }} />
    // <div className={classname} style={{
    //   height:height
    // }}>
    //   <Image fill alt="image description" src={image} />
    //   <div className="holder">
    //     <h2>{name}</h2>
    //     <div className="txts">
    //       <Link href={"/"} className="btn-shop">
    //         <span>shop now</span>
    //         <ChevronRightIcon className="fa" />
    //       </Link>
    //       {onSale && (
    //         <div className="discount">
    //           <span>{(((regularPrice - salePrice)/regularPrice) * 100).toFixed(0)}%</span>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
