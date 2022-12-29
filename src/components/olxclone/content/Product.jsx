import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Typography } from "@mui/material";
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const navigate = useNavigate();

  console.log("Props.myProducts>>>>", props.myProducts);
  if (props.myProducts) {
    return (
      <Grid item xs={12} sm={6} md={3}>
        <Grid container>
          <Grid item xs={12}>
            <Button
              variant={"outlined"}
              onClick={() => {
                // console.log("fayyaz ansari>>>>", props.allProducts[props.productIndex].docId)
                navigate(`/updateproduct/${props.allProducts[props.productIndex].docId}`)
              }}
              color={"primary"}
              fullWidth
            >
              Edit Product
            </Button>
          </Grid>
        </Grid>
        <Card
          onClick={() => {
            console.log("fayyaz ansari");
            console.log("Products in Products pages>>", props.allProducts);
            console.log("product index >>> ", props.productIndex);
            console.log(
              "product index >>> ",
              props.allProducts[props.productIndex]
            );
            navigate(
              `/productDetails/${props.allProducts[props.productIndex].docId}`,
              { state: props.allProducts[props.productIndex] }
            );
          }}
          sx={{ maxWidth: 345 }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width="100%"
              image={props.image}
              alt="Bughatti Chiron"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="subtitle2"
                sx={{ fontWeight: 500 }}
                component="div"
              >
                {props.title}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                sx={{ fontWeight: 500, mb: 2 }}
                component="div"
              >
                Rs {props.price}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                sx={{ fontWeight: 500, mb: 2 }}
                component="div"
              >
                Description: {props.description}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                color="text.secondary"
                component="div"
              >
                Mobile: {props.number}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.address}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        onClick={() => {
          console.log("fayyaz ansari");
          console.log("Products in Products pages>>", props.allProducts);
          console.log("product index >>> ", props.productIndex);
          console.log(
            "product index >>> ",
            props.allProducts[props.productIndex]
          );
          navigate(
            `/productDetails/${props.allProducts[props.productIndex].docId}`,
            { state: props.allProducts[props.productIndex] }
          );
        }}
        sx={{ maxWidth: 345 }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            width="100%"
            image={props.image}
            alt="Bughatti Chiron"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="subtitle2"
              sx={{ fontWeight: 500 }}
              component="div"
            >
              {props.title}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              sx={{ fontWeight: 500, mb: 2 }}
              component="div"
            >
              Rs {props.price}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              sx={{ fontWeight: 500, mb: 2 }}
              component="div"
            >
              Description: {props.description}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="text.secondary"
              component="div"
            >
              Mobile: {props.number}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.address}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Product;
