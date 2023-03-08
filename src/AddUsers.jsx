import { Button, TextField } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export function AddUsers({userData, setuserData}) {
  const [id, setId] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState("");

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
            <Button variant="contained"
            onClick={() =>
            {
              const newUser = {
                id: id,                
                lastName: lastName,
                firstName:firstName,
                age: age,

              };             

              setuserData([...userData, newUser]) 
              debugger;

              
              userData.includes(newUser.id) ? (
                alert("User added successfully")
              ) : (
                alert("User not added due to server issue")
              )
              navigate("/view-users") 
                

              
            }

            }>ADD</Button>

            
          
          
        </fieldset>

        
      </div>
      

      
    </div>
  );
}
