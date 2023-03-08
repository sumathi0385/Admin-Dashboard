import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { ProgressBar } from "./ProgressBar";

export function ProgressList() {
  const progressValue = [{
    title: "Server Migration",
    value: "25%",
    className: "progress-bar bg-success"
  },
  {
    title: "Sales Tracking",
    value: "45%",
    className: "progress-bar bg-info"
  },
  {
    title: "Customer Database",
    value: "60%",
    className: "progress-bar bg-warning"
  },
  {
    title: "Payout Details",
    value: "85%",
    className: "progress-bar bg-danger"
  },
  {
    title: "Account Setup",
    value: "100%",
    className: "progress-bar bg-primary"
  }
  ];
  return (
    // <div className="progressList-container" >
      <Card className="progressList-container">
        <CardContent>
          <Typography className="section-title" sx={{ color: "Blue", fontWeight: "Bold" }}>
            Projects
          </Typography>
          <hr></hr>
          {progressValue.map((p) => <ProgressBar progressData={p} />)}

        </CardContent>
      </Card>




    // </div>
  );
}
