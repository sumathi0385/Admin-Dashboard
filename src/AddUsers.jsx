import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'


export function AddUsers({userData, setuserData}) {
  
  const [id, setId] = useState("")
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [teacher, setTeacher] = useState("")

  const [teacherid, setTeacherid] = useState("")

  const [allteacher, setAllTeacher] = useState([])

  const adduser =() =>{

    const newuser = {
      id:id,
      lastname: lastName,
      firstname: firstName,      
      age:age,
      teacherid:teacher
    }
    
    console.log(newuser)

    fetch(`https://6409f9596ecd4f9e18c1111c.mockapi.io/userinfo`,
    {method: "POST",
    headers:{
      'Content-Type': "application/json",
    },   
    body:JSON.stringify(newuser),})
    .then(() => console.log(newuser) )
    .then(() => navigate("/view-users"))
   

  } 

  const getTeacherInfo = () => {  
 
    fetch(`https://6409f9596ecd4f9e18c1111c.mockapi.io/teacherinfo/`)
    .then((res) => res.json())
    .then((data) => {
      setAllTeacher(data)
  })
    
  }
    
  useEffect(() => {getTeacherInfo()}, [])

  const navigate = useNavigate();

 
  return (
    <div>
      <div className="user-form">
        <h4 className="userform-title"> ADD USER FORM</h4>
        <fieldset className="add-user">
          
            <TextField id="outlined-basic"
             label="ID"
             variant="outlined" 
            onChange={(event) => setId(event.target.value) }
              />
            <TextField id="outlined-basic"
             label="FIRST NAME" 
             variant="outlined"
             onChange={(event) => setFirstName(event.target.value) } />
            <TextField id="outlined-basic" 
             label="LAST NAME" 
             variant="outlined"
             onChange={(event) => setLastName(event.target.value) } />
            <TextField id="outlined-basic" 
             label="AGE" 
             variant="outlined" 
             onChange={(event) => setAge(event.target.value) }/>

            {/* <InputLabel id="demo-simple-select-label">Teacher</InputLabel>  */}
            
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={teacher}
            label="teacher"
            onChange={(event) => setTeacher(event.target.value)}         
            >
              {allteacher.map((t) =>           
                
                <MenuItem                                 
                 value={t.id}>{t.firstname}
                </MenuItem>              
               
              )}            
            
          </Select>
            <Button variant="contained"
            onClick={() => adduser()}    
            
            >ADD {teacher} {teacherid}</Button>

            
          
          
        </fieldset>

        
      </div>
      

      
    </div>
  );
}
