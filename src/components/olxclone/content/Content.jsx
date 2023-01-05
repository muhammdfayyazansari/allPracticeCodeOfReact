import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { auth, db, uploadImage } from "./../../config/Firebase";
import Product from "./Product";
import { doc, onSnapshot, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { darkTheme } from "../../../store/actions/theme/themeChangeAction";

const Content = () => {
  const dispatch = useDispatch();
  const reduxData = useSelector(state => state.themeReducer);
  // console.log("redux Data in Content >>>> ", reduxData.value);
  let {value} = reduxData; 
  const [products, setProduct] = useState([1]);
  const [userUID, setUserUID] = useState();
  const navigate = useNavigate();
  const myProducts = () => {
    console.log("myProducts >>>>");
    navigate(`/myproducts/${userUID}`);
  };

  useEffect(() => {
    // let productArr = [];
    const colRef = collection(db, "products");
    onSnapshot(colRef, (snapshot) => {
      setProduct(snapshot.docs.map((doc) => doc.data()));
    });
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("user uid content >>>", uid);
        setUserUID(uid);
      } else {
        console.log("user Is Sign Out");
        setUserUID(false);

        // User is signed out
        // ...
      }
    });


    // const unsub = onSnapshot(doc(db, "products"), (doc) => {
    //   console.log("Current data: ", doc.data());
    // });

    // const getData = async () => {
    //   let productArray = [];
    //   console.log("get dAta");
    //   const allProductsData = await getProductsData();
    //   allProductsData.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     // console.log(doc.id, " => ", doc.data());
    //     productArray.push(doc.data());
    //   });
    //   setProduct(productArray);
    // };
    // getData();
  }, []);
  // useEffect(()=>{
  //   // <button onClick={()=>{uploadImage(imageData)}}>upload Image</button>
  //   console.log("imageData useEffect chala")
  //   uploadImage(imageData);
  // }, [imageData])
  console.log("Products>>>>>", products);

  if (userUID) {
    return (
      <div>
        {/* <AdPost /> */}
        <Box sx={{ mt: { xs: "230px", md: "110px" } }}>

          {/* <Grid container spacing={2} sx={{ background: "#fff", padding: 5 }}> */}
          <Grid container spacing={2} sx={{ ...value, padding: 5 }}>
            <Grid item xs={12}>
              <Grid container justifyContent="flex-end">
                <Grid item>
      

                </Grid>
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
                      myProducts();
                    }}
                  >
                    My Products
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {products.map((item, index) => {
              return (
                <>
                  {/* <button onClick={console.log("aman")}>aman</button> */}
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
                    myProducts={false}
                  />
                </>
              );
            })}
          </Grid>
        </Box>
        {/* <button onClick={() => getData()}>get dAT</button> */}
      </div>
    );
  }else{
    return (
      <div>
       
        <Box sx={{ mt: { xs: "230px", md: "110px" } }}>
          <Grid container spacing={2} sx={{ background: "#fff", padding: 5 }}>
            {products.map((item, index) => {
              return (
                <>
                  {/* <button onClick={console.log("aman")}>aman</button> */}
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
                    myProducts={false}
                  />
                </>
              );
            })}
          </Grid>
        </Box>
        {/* <button onClick={() => getData()}>get dAT</button> */}
      </div>
    );
  }
};

export { Content };
