import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import blueLogo from "./../../images/blueLogo.png";
import blackLogo from "./../../images/blackLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCar } from "@fortawesome/free-solid-svg-icons";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import sellImage from "./../../images/sellImage.jpg";
import Modal from "@mui/material/Modal";
import { useState, useEffect } from "react";
import AdPost from "../../content/AdPost";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./../../../config/Firebase";

import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { darkTheme, defaultTheme } from "../../../../store/actions/theme/themeChangeAction";


function ResponsiveAppBar(props) {
  const dispatch = useDispatch();
  const reduxData = useSelector(state => state.themeReducer)
  console.log("app bar redux Data >>> ", reduxData)
  const [dashboard, setDashboard] = useState(false);
  const [forSignUP, setForSignUP] = useState(true);
  const [userUID, setUserUID] = useState();
  // const [theme, setTheme] = useState({ background: "#002F34", color: "#ffffff" , darkThem: true})
  // const [theme, setTheme] = useState({ background: "#F7F8F8", color: "#002F34" })

  const [userData, setUserData] = useState({});
  
  // console.log(userData);
  // const darkTheme = { background: "#111B21", color: "#ffffff" };
  const dark = { background: "#002F34", color: "#ffffff" , darkThem: true };
  const lightTheme = {background: "#F7F8F8", color: "#002F34", darkTheme : false};
  const handleChangeTheme = ()=>{
    if(reduxData.value.darkThem ){
      dispatch(defaultTheme(lightTheme))
    }else{
      dispatch(darkTheme(dark))
    }
    console.log("change chalala", reduxData.value)
  }

  
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #002F34",
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const [signup, setSignup] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const signInstead = () => {
    let user = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    setUserData(user);
    setSignup(!signup);

    console.log("signInstead");
  };

  const signUpUser = async () => {
    setForSignUP(false);
    let result = await props.signup(userData);

    if (!result.error) {
      props.changeScreen(setSignup, signup);
    }
  };

  const logInUser = async () => {
    let result = await props.login(userData);

    if (!result.error) {
      console.log("result  in sign up user>>> ", props);
      props.dashboardAfterLogined(setDashboard, dashboard);
      let user = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
      setUserData(user);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && forSignUP) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("user uid >>>", uid);
        setUserUID(uid);
        setDashboard(true);
      } else {
        console.log("user Is Sign Out");
        setDashboard(false);
        // User is signed out
        // ...
      }
    });
    // async function getCurrentUser(){

    //   let currentUserUID =  await props.getCurrentUser();
    //   console.log("currentUserUID", currentUserUID)
    // }
    // getCurrentUser();
  }, [forSignUP]);

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl"
      // className={
        // className="defaultTheme"
      //  sx={{ background: "#002F34", color: "#ffffff" }}
      //  sx={{ background: "#F7F8F8", color: "#002F34" }}
      sx={reduxData.value}
       >
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            xs: { justifyContent: "space-between" },
            paddingY: "10px",
          }}
        >
          <Grid item xs={1} sm={2} md={1}>
            <img src={blueLogo} width="35%" alt="olxLogo" />
          </Grid>
          <Grid item xs={4} sm={2} md={2} sx={{ display: "flex" }}>
            <Typography variant="subtitle1">
              <FontAwesomeIcon icon={faCar} />
              <Box component="span" sx={{ ml: 1 }}>
                Motors
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={7} sm={8} md={9} sx={{display:"flex", justifyContent:"space-between",alignItems:"center", alignContent:"center"}}>
            <Typography variant="subtitle1">
              <FontAwesomeIcon icon={faBuilding} />
              <Box component="span" sx={{ ml: 1 }}>
                Building
              </Box>
            </Typography>
            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 1 }}  />}
              onChange={handleChangeTheme}
              checked={reduxData.value.darkThem}
              inputProps={{ 'aria-label': 'controlled' }}
              label="Dark Theme"
            />
          </Grid>
        </Grid>

        <Toolbar disableGutters>
          <Grid
            container
            spacing={1}
            sx={{
              display: "flex",
              alignItems: "center",
              xs: { justifyContent: "space-between" },
            }}
          >
            <Grid item xs={4} sm={3} md={1}>
              <img src={blackLogo} alt="Olx-Logo" width="50%" />
            </Grid>

            <Grid item xs={8} sm={9} md={3}>
              <TextField
                id="input-with-icon-textfield"
                size="medium"
                value="Pakistan"
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                // endAdornment={<InputAdornment position="end"></InputAdornment>}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <KeyboardArrowDownIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <TextField
                id="input-with-icon-textfield"
                fullWidth
                size="medium"
                placeholder="Fine Cars, Mobile Phones and more..."
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                // endAdornment={<InputAdornment position="end"></InputAdornment>}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Grid container>
                <Grid
                  item
                  xs={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {!dashboard ? (
                      <div>
                        <Button onClick={handleOpen} sx={{ color: "#002F34" }}>
                          Login
                        </Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          {/* // Sign In Modal */}
                          <Box sx={style}>
                            <Typography
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                            >
                              {!signup ? (
                                <span>Sign In With Registered Email</span>
                              ) : (
                                <span>Sign Up With Email</span>
                              )}
                            </Typography>
                            <Typography
                              id="modal-modal-description"
                              sx={{ mt: 2 }}
                            >
                              {!signup ? null : (
                                <span>
                                  <TextField
                                    fullWidth
                                    label="Name"
                                    type="text"
                                    value={userData.name}
                                    id="fullWidth"
                                    sx={{ mt: 2 }}
                                    onChange={(e) => {
                                      setUserData({
                                        ...userData,
                                        name: e.target.value,
                                      });
                                    }}
                                  />
                                </span>
                              )}

                              <TextField
                                fullWidth
                                label="Email"
                                type="email"
                                value={userData.email}
                                id="fullWidth"
                                onChange={(e) => {
                                  setUserData({
                                    ...userData,
                                    email: e.target.value,
                                  });
                                }}
                                sx={{ mt: 2 }}
                              />

                              <TextField
                                fullWidth
                                label="Password"
                                id="fullWidth"
                                type="password"
                                value={userData.password}
                                sx={{ mt: 2 }}
                                onChange={(e) => {
                                  setUserData({
                                    ...userData,
                                    password: e.target.value,
                                  });
                                }}
                              />

                              {!signup ? null : (
                                <span>
                                  <TextField
                                    value={userData.confirmPassword}
                                    fullWidth
                                    label="Confirm Password"
                                    id="fullWidth"
                                    type="password"
                                    sx={{ mt: 2 }}
                                    onChange={(e) => {
                                      setUserData({
                                        ...userData,
                                        confirmPassword: e.target.value,
                                      });
                                    }}
                                  />
                                </span>
                              )}
                              <Grid container>
                                {!signup ? (
                                  <Grid
                                    item
                                    xs={12}
                                    sx={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      mt: 4,
                                    }}
                                  >
                                    <Button
                                      variant="outlined"
                                      onClick={() => logInUser()}
                                    >
                                      Login
                                    </Button>

                                    <span>
                                      <Button
                                        variant="outlined"
                                        onClick={() => signInstead()}
                                      >
                                        SignUp Instead
                                      </Button>
                                    </span>
                                  </Grid>
                                ) : (
                                  <Grid
                                    item
                                    xs={12}
                                    sx={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      mt: 4,
                                    }}
                                  >
                                    <Button
                                      variant="outlined"
                                      onClick={() => signUpUser()}
                                    >
                                      Signup
                                    </Button>

                                    <Button
                                      variant="outlined"
                                      onClick={() => signInstead()}
                                    >
                                      Signin Instead
                                    </Button>
                                  </Grid>
                                )}
                              </Grid>
                            </Typography>
                          </Box>
                        </Modal>
                      </div>
                    ) : (
                      <Button
                        onClick={() => {
                          props.userLogOut();
                        }}
                        sx={{ color: "#002F34" }}
                      >
                        Logout
                      </Button>
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="subtitle1">
                    {dashboard ? (
                      <AdPost
                        userUID={userUID}
                        // changeForGetData={props.changeForGetData}
                      />
                    ) : (
                      <img
                        src={sellImage}
                        alt="AdPost"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleOpen();
                        }}
                      />
                    )}
                    {/* <img src={sellImage} alt="AdPost" style={{cursor:"pointer"}} onClick={()=>{addPost()}} /> */}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export { ResponsiveAppBar };
