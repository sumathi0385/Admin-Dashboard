import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  
];





export function ListUsers() { 

  const [userData, setuserData] = useState([])
  useEffect(() =>{
    fetch("https://6409f9596ecd4f9e18c1111c.mockapi.io/userinfo")
  .then((res) => res.json())
  .then((data) => setuserData(data))
  }, []
    
  )
  
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={userData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );

  
}
  
