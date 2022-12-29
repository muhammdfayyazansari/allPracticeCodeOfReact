import React from 'react';
import Typography from '@mui/material/Typography';

const Loader = () => {
  return (
    <span style={{display:"inline"}}><Typography sx={{textAlign:"center"}} variant='h5' color='white'  fontWeight={700}>API CAllING <br />AFTER 5 SECOND <br />IF DATA NOT SHOW <br />THEN CHECK YOUR INTERNET <br />AND REFRESH THE PAGE</Typography></span>
  )
}

export default Loader
