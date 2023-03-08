import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';


export function AccountingCard({ accountsvalue }) {
  // const styles = {
  //   backgroundImage:accountsvalue.backgroundImage
  // }
  return (
    <Card sx={{ backgroundImage: accountsvalue.backgroundImage, display: "flex", justifyContent: "center", }}>
      <CardContent>
        <Typography sx={{ fontSize: "1rem" }}>
          {accountsvalue.title}
        </Typography>
        <Typography sx={{ fontSize: "1.5rem" }}>
          {accountsvalue.value}
        </Typography>
        <Typography sx={{ fontSize: "0.8rem" }}>
          {accountsvalue.subtitle}
        </Typography>
      </CardContent>
    </Card>



  );
}
