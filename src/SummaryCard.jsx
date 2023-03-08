import { Card, CardContent, IconButton, Typography } from '@mui/material';
import * as React from 'react';


export function SummaryCard({ summary }) {
  const styles = {
    display: summary.title === "TASKS" ? ("inline") : ("none"),
    
    
  };

  return (
    <div>
      <Card sx={{ maxWidth: 300, display: "flex", justifyContent: "space-between", backgroundImage: summary.backgroundImage, borderLeft: summary.borderLeft }}>

        <CardContent className="summary-card">
          <Typography sx={{ fontSize: "0.8rem", color: "black", fontWeight: "bold" }}>
            {summary.title}
          </Typography>
          <Typography sx={{ fontSize: "1.5rem" }}>
            {summary.value}
          </Typography>

        </CardContent>

        <CardContent>
          <progress className="progress-bar" value="32" max="100" style={styles}>32%</progress>
        </CardContent>
        <CardContent>
          <IconButton>
            {summary.icon}
          </IconButton>
        </CardContent>

      </Card>

    </div>
  );

}
