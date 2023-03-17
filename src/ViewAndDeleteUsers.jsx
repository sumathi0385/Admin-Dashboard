import * as React from 'react';
import { IconButton, Typography } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Home} from './App'

export function ViewAndDeleteUsers() {

  const [userData, setuserData] = useState([]);
  const [teacher, setTeacher] = useState([])
  const [user, setUser] = useState([])

  const getusers = ()=>{
    fetch("https://6409f9596ecd4f9e18c1111c.mockapi.io/userinfo")
  .then((res) => res.json())
  .then((data) => setuserData(data))
  
  }

  useEffect(() => getusers(), [])    
  

const navigate = useNavigate();



const onDelete = (id) =>{  

  fetch(`https://6409f9596ecd4f9e18c1111c.mockapi.io/userinfo/${id}`, {method:"DELETE",})  
  .then((res) => res.json())
  .then(() => getusers())

  
  
}



const getTeacherInfo = () => {  
 
  fetch(`https://6409f9596ecd4f9e18c1111c.mockapi.io/teacherinfo/`)
  .then((res) => res.json())
  .then((data) => {
    setTeacher(data)
})
  
}

useEffect(() => getTeacherInfo(), [])



const mergeUser = () => {
  let student = [];
  for(let i of userData){
    for(let j of teacher){
      

      if(i.teacherid == j.id){
        
        student.push({...i, teacher:{...j}})
        // student.push({...i})
      }

    }
  }
  setUser(student)
  console.log(student)

}

useEffect(() => mergeUser(), [userData])



  return (
    <Home>
    <div>
      <Typography padding={3} textAlign={"center"} fontSize={"30px"}> View and Delete Users</Typography>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>Teacher</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {user?.map((user) => 
          {            
            return(                       

              <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.age}</td>
              <td>
              {user.teacher.firstname}
              
              </td>    
                       
              
              <td>
                <IconButton onClick={() => navigate(`/update-users/${user.id}`) }>
                  <ModeEditIcon />
                </IconButton>
              </td>
              <td>
                <IconButton onClick={() => onDelete(user.id)}>
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>

            
            

          )})}
        </tbody>
      </table>

    </div>
    </Home>
  );
}
