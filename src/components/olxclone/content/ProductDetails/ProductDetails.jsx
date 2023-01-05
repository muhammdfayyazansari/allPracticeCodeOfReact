import React from "react";
import Header from "../../header/Header";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./productDetails.css";
import { auth } from "./../../../config/Firebase";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
// import { signOut } from "./../../../config/Firebase";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCartAction , subTotal, total} from "../../../../store/actions/AddToCartActions/AddToCartAction";
// import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const addToCartReducerData = useSelector(state => state.addToCartReducer);
  // console.log("addToCartReducerData Product Details ==>", addToCartReducerData)
  const dispatch = useDispatch();
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
  // console.log("location=>", location);
  useEffect(() => {
    setProduct(location.state);
  }, []);
  const [addToCart, setaddToCart] = useState();
  const userLogOut = () => {
    signOut(auth);
 
  };

  const addToCartFunction = ()=>{
    const currentDocId = product.docId;
    const oldState = {...addToCartReducerData};
    const lastProduct = oldState.productsInCart;

    let oldProductsWithQuantity;
    let flagForCurrentDocId = currentDocId in lastProduct;

    let flagForQuantity;
    if(flagForCurrentDocId){
      
       flagForQuantity = 'quantity' in lastProduct[currentDocId];
 
    }else{
      flagForQuantity = false;
    }
    if(!flagForQuantity){
      // oldProductsWithQuantity = {...lastProduct, [currentDocId] : {...product, quantity : 1}};
      oldProductsWithQuantity = {...lastProduct, [currentDocId] : {...product, quantity : 1, subTotal : Number(product.price * 1)}};
      dispatch(total(Number(addToCartReducerData['total']) + Number(oldProductsWithQuantity[currentDocId]["subTotal"])))
    }else {
      let myTotal = 0;
      
      oldProductsWithQuantity = {...lastProduct, [currentDocId] : {...product, quantity : lastProduct[currentDocId]['quantity'] + 1, subTotal: Number(Number(lastProduct[currentDocId]['quantity'] + 1) * Number(lastProduct[currentDocId]['price']))}};
      Object.keys(oldProductsWithQuantity).map((product, index)=>{
        myTotal += Number(oldProductsWithQuantity[product]["subTotal"]);
      })
      console.log('mysubtotal', myTotal)
      // console.log('mysubtotal', Number(oldProductsWithQuantity[currentDocId]["subTotal"]))
      // console.log('mysubtotal', Number(addToCartReducerData['total']) )
      // dispatch(total(Number(addToCartReducerData['total']) + Number(oldProductsWithQuantity[currentDocId]["subTotal"])))

      // oldProductsWithQuantity = {...lastProduct, [currentDocId] : {...product, quantity : lastProduct[currentDocId]['quantity'] + 1}};
      // subTotal.push(Number(product.quantity) * Number(product.price))
      // mySubTotal.push(oldProductsWithQuantity[currentDocId].subTotal)
      dispatch(total(myTotal))
      // dispatch(subTotal(myTotal))
    }
    
    // console.log("check >>>> ", oldState)
    // console.log("check >>>> ", lastProduct)
    // console.log("check >>>> ", flagForCurrentDocId)
    // console.log("check >>>> ", currentDocId)
    // console.log("check >>>> ", lastProduct[currentDocId]['quantity'])

    dispatch(addToCartAction({...oldProductsWithQuantity}))

  }

  return (
    <Box sx={{ mt: { xs: "290px", md: "150px" }, mb: 20 }}>
      {/* {console.log("My Current Products==>", product)} */}

      <Header userLogOut = {userLogOut} />
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
              <Box component="div" >
              <Button variant="outlined" onClick={addToCartFunction}>
                  Add to Cart
              </Button>
            </Box>
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
