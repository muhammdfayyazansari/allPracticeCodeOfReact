import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';




function CustomButton(props){




  return <div>

       <Stack spacing={2} direction="row">
   
    <Button onClick={()=>{props.signup()}} variant="outlined">{props.buttonName}</Button>
  </Stack>
  </div>

}


export default CustomButton;


















