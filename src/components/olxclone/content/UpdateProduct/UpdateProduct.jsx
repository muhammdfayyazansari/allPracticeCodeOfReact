import React from "react";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { InputAdornment, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateMyProduct , auth} from "../../../config/Firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import ClearIcon from "@mui/icons-material/Clear";
// import { SweetAlert } from "sweetalert/typings/core";

const UpdateProduct = (props) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState();
  const [uid, setUID] = useState();
  console.log("product >>>" , product)
  const customInput = {
    "& .MuiInputLabel-root": { borderColor: "#002F34" }, //styles the label
    "& .MuiOutlinedInput-root": {
      "& > fieldset": { borderColor: "#002F34" },
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#002F34",
    },

    "& .MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": {
        borderColor: "#002F34",
      },
    },
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user)=>{
      if (user){
        const uid = user.uid;
        console.log("user uid in update Product >>", uid)
        setUID(uid)
      }else{
        console.log("user Is Signed Out")
      }
    })
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/firebase.User
    //     const uid = user.uid;
    //     console.log("user uid content >>>", uid);
    //     setUserUID(uid)
      
    //   } else {
    //     console.log("user Is Sign Out");
        
    //     // User is signed out
    //     // ...
    //   }
    // });

  }, []);
  const Params = useParams();
  console.log("Params>>>>", Params);


  const updateNow = async ()=>{

    const result = await updateMyProduct(product, Params.docref);
    // handleClose()
    console.log("result update product>> ", result.error, result .message)
    if(!result.error){
      navigate(`/myproducts/${uid}`)
      // console.log(product[0].uid)
    }else{
      console.log("product update nahi hui")
    }
    
    console.log("updateNow");
    // const result = await sendProductData(product, props.userUID);
    // if(!result.error){
    //   console.log("get product wala function run kar do , docRef.id>>", result.docRef)
    //   props.changeForGetData()
    // }else{
    //   console.log("product add nahi hui error ye hai", result.message)
    // }
  }
  return (
    <div>
       <Grid container sx={{ display: "flex", justifyContent: "end" }}>
            <Grid item>
              <ClearIcon
                sx={{ cursor: "pointer" }}
                onClick={() => {
                 navigate(`/myproducts/${uid}`)
                }}
              />
            </Grid>
          </Grid>
      <Grid container>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <span>
            <Typography variant="h5" sx={{ fontWeight: 800 }}>
             Update Your Post
            </Typography>
          </span>
        </Grid>
      </Grid>

      <Grid
        container
        rowSpacing={4}
        sx={{
          mt: 2,
          border: "0.1px solid #bdbdbd",
          borderRadius: 1,
          paddingX: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            SET SOME DETAILS
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Ad Title"
            size="small"
            type="text"
            id="fullWidth"
            sx={customInput}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            size="small"
            type="text"
            id="fullWidth"
            sx={customInput}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </Grid>

        <hr />

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Price"
            size="small"
            type="number"
            id="fullWidth"
            sx={customInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Rs</InputAdornment>
              ),
            }}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address"
            size="small"
            type="text"
            id="fullWidth"
            sx={customInput}
            onChange={(e) =>
              setProduct({ ...product, address: e.target.value })
            }
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Mobile Number"
            size="small"
            type="number"
            id="fullWidth"
            sx={customInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+92</InputAdornment>
              ),
            }}
            onChange={(e) => setProduct({ ...product, number: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sx={{ my: 2 }}>
          <button
            style={{
              background: "#002F34",
              padding: "8px 20px",
              border: "0px solid #000",
              borderRadius: "2px",
              cursor: "pointer",
            }}
            onClick={() => {
              updateNow();
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                color: "#fff",
              }}
            >
              Update
            </Typography>
          </button>
        </Grid>
      </Grid>
    </div>
  );
};

export default UpdateProduct;
