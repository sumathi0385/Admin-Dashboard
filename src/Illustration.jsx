import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export function Illustration() {
  return (
    // <div className="illustration-container" style={{display:"inline"}}>
    <Card className="illustration-container" >
      <CardContent>
        <Typography className="section-title" sx={{ color: "Blue", fontWeight: "Bold", display: "inline-block", width: "20%" }}>
          Illustrations
        </Typography>
        <hr></hr>
        <CardMedia sx={{height:300}}
          component="img"                  
          image="\src\assets\undraw_task_list_6x9d.png"
          alt="green iguana" />
          
        {/* <Typography> */}
          <ul>
            <li>Test 1</li>
            <li>Test 2</li>
            <li>Test 3</li>
          </ul>
        {/* </Typography> */}


      </CardContent>
    </Card>


    // </div>
  );
}
