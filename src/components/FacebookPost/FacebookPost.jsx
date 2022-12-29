import React from "react";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareIcon from '@mui/icons-material/Share';

const FacebookPost = (props) => {
  console.log("props>>>", props)
  const customButton = {
    
    width: "auto"
  }


  return (
    <div>
      {/* full width container */}
      <Grid
        container
        sx={{
          display: "flex",
          // minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          // background: "rgb(2,0,36)",
          // background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", 
        }}
        
      >
        <Grid item xs={10} sm={7} md={4} >
          {/* Center container */}
          <Grid
            container
            
            p={2}
            sx={{background: "skyblue",
              borderRadius: 2,
              marginBottom: 5,
            
            }}
          >
            {/* Center container Header Avatar and user Id  Grid */}
            <Grid item xs={12} mb={1}>
              <Grid container>
                <Grid
                  item
                  xs={2}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {/*  Avatar  */}

                  <Stack direction="row" spacing={2}>
                    <Avatar
                      alt="Remy Sharp"
                      src="data:image/jpeg;base64,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"
                    />
                  </Stack>
                  {/*  User Id  */}

                  <Box ml={2}>
                    <Typography variant="body1">User{props.userId}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            {/* Center container Body Description Grid */}
            <Grid item xs={12} mb={1}>
              <Typography variant="subtitle1">
                  <Box component="span">Title: {props.title}</Box>
              </Typography>
              <Typography variant="body2" sx={{ wordBreak: "break-all" }}>
              <Box component="span"><span style={{fontWeight:"700px"}}>Description:</span> {props.description}</Box>
                
                {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur, quaerat repellendus explicabo harum mollitia nesciunt
                facere saepe consequatur, architecto non tempora eveniet
                provident aliquid placeat veritatis, corrupti quisquam
                laboriosam impedit! */}
              </Typography>
            </Grid>
            {/* Center container Image  Grid */}

            <Grid item xs={12} mb={1}>
              <img
                width="100%"
                src={props.image}
                // src="https://www.supercars.net/blog/wp-content/uploads/2022/01/lamborghini-aventador-lp-780-4-ultimae.jpg"
                alt=""
              />
            </Grid>
            {/* Center container Like Comment And Share  Grid */}

            <Grid item xs={12} >
              <Stack direction="row" sx={{display:"flex", justifyContent:"space-between"}} spacing={1} >
                <Button variant="outlined" sx={customButton} startIcon={<ThumbUpOutlinedIcon />}>
                  Like
                </Button>
                <Button variant="outlined" sx={customButton} startIcon={<ChatBubbleOutlineOutlinedIcon />}>
                  Comment
                </Button>
                <Button variant="outlined" sx={customButton} startIcon={<ShareIcon />}>
                  Share
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default FacebookPost;
