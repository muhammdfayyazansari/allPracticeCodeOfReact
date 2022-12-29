import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Typography } from "@mui/material";
import { Grid } from "@mui/material";

const Product =  (props) => {





  return (
    <Grid item xs={12} sm={6} md={3}>
    <Card sx={{ maxWidth: 345 }}>
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
            Description:  {props.description}
          </Typography>
          <Typography gutterBottom variant="body2"  color="text.secondary" component="div">
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
