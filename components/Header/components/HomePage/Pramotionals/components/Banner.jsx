import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";

const Banner = ({
  classname,
  image,
  name,
  salePrice,
  regularPrice,
  onSale,
  id,
}) => {
  return (
    <div className={classname}>
      <img alt="image description" src={image} />
      <div className="holder">
        <h2>{name}</h2>
        <div className="txts">
          <Link href={"/"} className="btn-shop">
            <span>shop now</span>
            <ChevronRightIcon className="fa" />
          </Link>
          {onSale && (
            <div className="discount">
              <span>{(((regularPrice - salePrice)/regularPrice) * 100).toFixed(0)}%</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
