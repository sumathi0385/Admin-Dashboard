import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export function ContactList() {
  return (
    <Card>
      <CardMedia
        sx={{ height: 250, maxWidth: 400 }}
        image="/src/assets/socialmedia-data.jpg"
        title="contact-list" />

      <CardContent sx={{ float: "left" }}>
        <Typography>
          Maild Id: precision@precision.com
        </Typography>
        <Typography>
          Phone No: 044-534324
        </Typography>
        <Typography>
          You Tube: precision@youtube.com
        </Typography>

      </CardContent>


    </Card>
  );
}
