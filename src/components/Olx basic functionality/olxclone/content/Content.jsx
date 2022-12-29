import React from "react";
import { Grid, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { getProductsData } from "./../../config/Firebase";
import Product from "./Product";

const Content = () => {
  const [products, setProduct] = useState([1]);
  const [forGetData, setForGetData] = useState(true);
  useEffect(() => {
    const getData = async () => {
      let productArray = [];
      console.log("get dAta");
      const allProductsData = await getProductsData();
      allProductsData.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        productArray.push(doc.data());
      });
      setProduct(productArray)
  
    };
    getData();
  }, [forGetData]);
 
  return (
    <div>
      {/* <AdPost /> */}
      <Box sx={{ mt: { xs: "220px", md: "100px" } }}>
        <Grid container spacing={2} sx={{ background: "#fff", padding: 5 }}>
          {products.map((item, index) => {
            return <Product 
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
            address={item.address}
            number={item.number}
            uid={item.uid}

            />;
          })}
        </Grid>
      </Box>
      {/* <button onClick={() => getData()}>get dAT</button> */}
    </div>
  );
};

export  {Content};
