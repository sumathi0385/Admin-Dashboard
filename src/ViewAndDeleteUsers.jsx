import * as React from 'react';
import { IconButton, Typography } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

export function ViewAndDeleteUsers({ userData, setuserData, editUser}) {

// const navigate = useNavigate();

const onDelete = (item) =>{

  setuserData(userData.filter((x) => x.id !==item.id))

  userData.includes(item.id) ? (
    alert("Record not Deleted")
    ) : (
      alert("Record Deleted Successfully")
    )
  
}

  return (
    <div>
      <Typography padding={3} textAlign={"center"} fontSize={"30px"}> View and Delete Users</Typography>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>
                <IconButton onClick={() => editUser(user)}>
                  <ModeEditIcon />
                </IconButton>
              </td>
              <td>
                <IconButton onClick={() => onDelete(user)}>
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>

          ))}
        </tbody>
      </table>

    </div>
  );
}
