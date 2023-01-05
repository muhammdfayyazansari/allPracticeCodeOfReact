import { useSelector, useDispatch } from "react-redux";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid, Box } from "@mui/material";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


import {
  deleteFromCartAction,
  quantityMinusAction,
  quantityPlusAction,
  clearCartAction,
  total,
  subTotal
} from "../../../store/actions/AddToCartActions/AddToCartAction";

function createData(
  image,
  title,
  price,
  description,
  address,
  number,
  docId,
  quantity
) {
  return { image, title, price, description, address, number, docId, quantity };
}

export default function BasicTable() {
  const cartReduxData = useSelector((state) => state.addToCartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("fayyaz ansari>>>", cartReduxData);
  let allProductsArray = [];
  let myTotal = 0;
  Object.keys(cartReduxData.productsInCart).map((item) => {
    allProductsArray.push(cartReduxData.productsInCart[item]);
  });
  // console.log("my all productarray >>>>", allProductsArray);
  const rows = [];
  allProductsArray.map((item, index) => {
    rows.push(
      createData(
        item.image,
        item.title,
        item.price,
        item.description,
        item.address,
        item.number,
        item.docId,
        item.quantity
      )
    );
  });
  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];

  const deleteProducFromCart = (docId) => {
    let productDeletedData = { ...cartReduxData.productsInCart };
    let state = {...cartReduxData};
    let productSubTotal = state.total - productDeletedData[docId]['subTotal'];
    console.log("fayyaz ansari>>>", productSubTotal)
    delete productDeletedData[docId];
    dispatch(deleteFromCartAction(productDeletedData));
    dispatch(total(productSubTotal))
  };
  const quantityMinus = (docId) => {
    let myAllProducts = { ...cartReduxData.productsInCart };
    let myDocId = docId;
    if (myAllProducts[docId].quantity !== 1) {
      let currentProductWithNewQuantity = {
        ...myAllProducts[docId],
        quantity: myAllProducts[docId].quantity - 1,
        subTotal : Number(myAllProducts[docId].quantity - 1) * Number(myAllProducts[docId].price)
      };
      let newmyAllProducts = {
        ...myAllProducts,
        [myDocId]: { ...currentProductWithNewQuantity },
      };
      myAllProducts = { ...newmyAllProducts };
      dispatch(quantityMinusAction(myAllProducts));
      dispatch(total(myTotal - Number(myAllProducts[docId].price)));
    }
  };
  const quantityPlus = (docId) => {
    let myAllProducts = { ...cartReduxData.productsInCart };
    let myDocId = docId;
    let currentProductWithNewQuantity = {
      ...myAllProducts[docId],
      quantity: myAllProducts[docId].quantity + 1,
      subTotal : Number(myAllProducts[docId].quantity + 1) * Number(myAllProducts[docId].price)

    };
    let newmyAllProducts = {
      ...myAllProducts,
      [myDocId]: { ...currentProductWithNewQuantity },
    };
    myAllProducts = { ...newmyAllProducts };
    dispatch(quantityPlusAction(myAllProducts));
    dispatch(total(myTotal + Number(myAllProducts[docId].price)));
  };
  const clearCart = () => {
    dispatch(clearCartAction({}));
    dispatch(total(0));
  };
  allProductsArray.map((row, index) => {
    myTotal += Number(row.price * row.quantity);
  })

  return (
    <Grid
      container
      sx={{
        mt: { xs: "145px", md: "0px" },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid item xs={11} md={10}>
        <TableContainer component={Paper}>
         
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Products</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Quantity&nbsp;</TableCell>
                <TableCell align="center">Subtotal&nbsp;</TableCell>
                <TableCell align="center">&nbsp;</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {/* {console.log("rows", rows.length)} */}
              {rows.length ? (
                rows.map((row, index) => (
                  <TableRow
                    key={row.title}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Box
                        component="span"
                        sx={{ display: "flex", justifyContent: "start" }}
                      >
                        <Box
                          component="span"
                          sx={{ width: "25%", marginRight: "20px" }}
                        >
                          <img
                            src={row.image}
                            alt=""
                            width="100%"
                            height="70px"
                          />
                        </Box>
                        <Box component="span" sx={{display:'flex', alignItems:"center"}}>
                          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            {row.title}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="center">{row.price}</TableCell>
                    <TableCell align="center">
                      <Box
                        component="div"
                        sx={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "flex-end",
                        }}
                      >
                        <Box component="span" sx={{ mx: "10px" }}>
                          <button
                            variant="contained"
                            size="small"
                            style={{
                              display: "inline-block",
                              background: "#D0101E",
                              padding: "3px 6px",
                              color: "#fff",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              quantityMinus(row.docId);
                            }}
                          >
                            -
                          </button>
                        </Box>
                        {row.quantity}
                        <Box component="span" sx={{ mx: "10px" }}>
                          <button
                            variant="contained"
                            size="small"
                            style={{
                              display: "inline-block",
                              background: "#D0101E",
                              padding: "3px 6px",
                              color: "#fff",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              quantityPlus(row.docId);
                            }}
                          >
                            +
                          </button>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      {row.price * row.quantity}
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        variant="h6"
                        onClick={() => {
                          deleteProducFromCart(row.docId);
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            borderRadius: "3px",
                            p: "10px",
                            color: "#D0101E",
                            cursor: "pointer",
                            "&:hover": { background: "#dbdbdb" },
                          }}
                        >
                          X
                        </Box>
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" colSpan={5}>
                    <Box
                      component="span"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Typography variant="h6">Cart Is Empty</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid
        item
        xs={11}
        md={10}
        sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
      >
        <Button
          onClick={() => {
            clearCart();
          }}
          variant="contained"
          sx={{
            fontWeight: "bolder",
            background: "#D0101E",
            "&:hover": { background: "#D0101E" },
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bolder" }}>
            Clear Cart
          </Typography>
        </Button>
      </Grid>
      <Grid
        item
        xs={11}
        md={10}
        sx={{ display: "flex", justifyContent: "flex-end", mT: 5 }}
      >
        <Grid container>
          <Grid item xs={6} md={4}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              TOTAL
            </Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <Typography variant="h6">Rs: {myTotal}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={11}
        md={10}
        sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", mt: 2 }}
      >
        <Button
          onClick={() => {
           navigate("/");
          }}
          variant="contained"
          sx={{
            fontWeight: "bolder",
            background: "#D0101E",
            "&:hover": { background: "#D0101E" },
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bolder" }}>
           RETURN TO SHOP
          </Typography>
        </Button>
      </Grid>

      <Box component="span" sx={{ mb: "200px" }}>
        &nbsp; &nbsp;
        <br />
      </Box>
    </Grid>
  );
}
