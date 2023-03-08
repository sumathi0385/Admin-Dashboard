import { Button } from '@mui/material';
import * as React from 'react';

export function TitleBar() {
  return (
    <div className="titlebar-container">
      <h1>Dashboard</h1>
      <div>
        <Button sx={{ margin: "20px" }} variant="contained">Generate Report</Button>
      </div>
    </div>
  );
}
