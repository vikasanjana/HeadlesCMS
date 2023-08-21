import Image from "next/image";
import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
const ProductCard = ({ item, style }) => {
  const { id, name, image, onSale, regularPrice, salePrice, priceHtml } = item;
  console.log(priceHtml)
  // console.log('image from product card' . image)
  return (
    <Card style={style}>
      <CardMedia component="img" height="194" image={image} alt={name} />
      <CardContent  style={{
        paddingBottom :0
      }} >
        <Typography variant="subtitle2" className=" text-dark">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div dangerouslySetInnerHTML={{ __html: priceHtml }}></div>
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        style={{
          paddingTop:0
        }}
        sx={{
          display: "flex",
          flexDirection: "column-reverse",
          alignItems:'start'
        }}
      >
        <Button
          variant="contained"
          color="inherit"
          startIcon={<LocalMallIcon />}
        >
          Add to Cart{" "}
        </Button>
        <div >
          <IconButton
            aria-label="add to favorites"
            sx={{
              maxWidth: "50%",
            }}
          >
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton aria-label="share">
            <VisibilityIcon />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
