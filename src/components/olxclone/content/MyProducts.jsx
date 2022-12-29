import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { db } from "../../config/Firebase";
import Product from "./Product";
import { onSnapshot, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import { auth } from "./../../config/Firebase";
import { signOut } from "firebase/auth";
import { getMyProducts } from "../../config/Firebase";

const MyProducts = () => {
  const params = useParams();
  console.log("Params >>>> ", params)
  const {uid} = params;
  const [products, setProduct] = useState([1]);
  const navigate = useNavigate();
  const allProducts = () => {
    console.log("AllProducts >>>>");
    navigate("/");
  };

  useEffect(() => {
    // const {uid} = params;
    // let productArr = [];
    async function callMyProducts (){

      const myProducts = await getMyProducts(uid);
      console.log(myProducts)
      setProduct([...myProducts])
      console.log("My Products in My products >>", [...myProducts])
    }
    callMyProducts()


      // myProducts.map((doc)=>{
      //   productArr.push(doc.data())
      // })



    // const colRef = collection(db, "products");
    // onSnapshot(colRef, (snapshot) => {
    //   setProduct(snapshot.docs.map((doc) => doc.data()));
    // });


  }, []);
  const userLogOut = () => {
    signOut(auth);
    navigate('/')
 
  };

  return (
    <div>
      {/* <AdPost /> */}
      <Header userLogOut={userLogOut} />
      <Box sx={{ mt: { xs: "220px", md: "100px" } }}>
        <Grid container spacing={2} sx={{ background: "#fff", padding: 5 }}>
          <Grid item xs={12}>
            <Grid container justifyContent="flex-end">
              <Grid
                item
                xs={8}
                sm={6}
                md={4}
                lg={2}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button
                  variant="outline"
                  onClick={() => {
                    allProducts();
                  }}
                >
                  All Products
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {products.map((item, index) => {
            return (
              <>
                <Product
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  address={item.address}
                  number={item.number}
                  uid={item.uid}
                  allProducts={products}
                  productIndex={index}
                  myProducts = {true}
                 
                />
              </>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export { MyProducts };
