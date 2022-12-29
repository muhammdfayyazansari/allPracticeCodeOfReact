import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import sellImage from "./../images/sellImage.jpg";
import ClearIcon from "@mui/icons-material/Clear";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { useState } from "react";
import { sendProductData } from "./../../config/Firebase";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100vw",
  minHeight: "100vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "#002F34",
};

export default function AdPost(props) {
  const navigate = useNavigate();
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [product, setProduct] = useState({});
  const postNow = async () => {
    handleClose();
    console.log("postNow");
    const result = await sendProductData(product, props.userUID);
    if (!result.error) {
      console.log(
        "get product wala function run kar do , docRef.id>>",
        result.docRef
      );
      navigate("/");
      // props.changeForGetData();
    } else {
      console.log("product add nahi hui error ye hai", result.message);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <img src={sellImage} alt="AdPost" style={{ cursor: "pointer" }} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container sx={{ display: "flex", justifyContent: "end" }}>
            <Grid item>
              <ClearIcon
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  handleClose();
                }}
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <span>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  Post Your Ad
                </Typography>
              </span>
            </Grid>
          </Grid>

          <Grid
            container
            rowSpacing={4}
            sx={{
              // mt: 2,
              border: "0.1px solid #bdbdbd",
              borderRadius: 1,
              paddingX: 2,
            }}
          >
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                INCLUDE SOME DETAILS
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
                onChange={(e) =>
                  setProduct({ ...product, title: e.target.value })
                }
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
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
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
                onChange={(e) =>
                  setProduct({ ...product, number: e.target.value })
                }
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
                  postNow();
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  Post Now
                </Typography>
              </button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
