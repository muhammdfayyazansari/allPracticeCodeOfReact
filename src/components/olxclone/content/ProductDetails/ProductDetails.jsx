import React from "react";
import Header from "../../header/Header";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./productDetails.css";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";;
// import { useParams } from "react-router-dom";

const ProductDetails = () => {
  // const Params = useParams();
  const [product, setProduct] = useState({
    address: "dfasf",
    description: "dse",
    image:
      "https://www.bugatti.com/fileadmin/_processed_/sei/p121/se-image-4f750982624e527a8b1003408e4febcf.jpg",
    number: "0115615646486",
    price: "84848",
    title: "fayyaz ansari icots",
    uid: "k37ao9iPxaOFUUQae6ByadYVE7P2",
  });
  const location = useLocation();
  console.log("location=>", location);
  useEffect(() => {
    setProduct(location.state);
  }, []);

  return (
    <Box sx={{ mt: { xs: "260px", md: "120px" }, mb: 20 }}>
      {console.log("My Current Products==>", product)}

      <Header />
      <Grid container px={10} columnSpacing={1}>
        <Grid item xs={12} lg={8}>
          <Grid container rowGap={1}>
            <Grid item xs={12} className="forBorder">
              <img src={product.image} width="100%" height="500px" alt="" />
            </Grid>
            <Grid item xs={12} className="forBorder">
              <Typography variant="h5">Details</Typography>
              <Typography variant="subtitle1" sx={{ mb: 5 }}>
                Price: {product.price}
              </Typography>

              <Typography variant="h5">Description</Typography>
              <Typography variant="subtitle1" sx={{ mb: 5 }}>
                {product.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container rowGap={1}>
            <Grid item xs={12} className="forBorder">
              <Typography variant="h3">Rs {product.price}</Typography>
              {/* <Typography variant='subtitle1' sx={{mb: 5}}>
              Price: 1200000
            </Typography> */}

              <Typography
                variant="body1"
                sx={{ color: "#808080" }}
                gutterBottom
              >
                {product.title}
              </Typography>
            </Grid>
            <Grid item xs={12} className="forBorder">
              <Typography variant="subtitle1" gutterBottom>
                Seller Description
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "#808080" }}
                gutterBottom
              >
                Phone: {product.number}
              </Typography>
              <Button variant={"outlined"} color={"primary"} fullWidth>
                Chat With Seller
              </Button>
            </Grid>
            <Grid item xs={12} className="forBorder">
              <Typography variant="h6">Posted In</Typography>
              <Typography variant="body1" gutterBottom>
                {product.address}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <img
                  src="https://olxwithbootstrap.netlify.app/images/map.svg"
                  width="100%"
                  alt=""
                />
              </Typography>
              <Typography variant="body1" gutterBottom>
                See Location
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;
