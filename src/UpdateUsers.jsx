import * as React from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function UpdateUsers({currentUser, updateuser, userData, setuserData}) {
  console.log(currentUser);
  console.log(currentUser.id); //Need clarity on how to print specific id
  
const [user, setUser] = React.useState(currentUser) 

  const [id, setId] = React.useState(currentUser.id);
  const [firstName, setFirstName] = React.useState(currentUser.firstName);
  const [lastName, setLastName] = React.useState(currentUser.lastName);
  const [age, setAge] = React.useState(currentUser.age); 

  const navigate = useNavigate();
  
  return (    
    <div>
      <div className="user-form">
        <h4 className="userform-title"> UPDATE USER FORM</h4>
        <fieldset className="update-user">

          <TextField id="outlined-basic"
          
            label= "ID"
            
            variant="outlined"
            onChange={(event) => setId(event.target.value) }
            disabled="true"
            value={id}/>
          <TextField id="outlined-basic"
            label="FirstName"
            variant="outlined"
            onChange={(event) => setFirstName(event.target.value) }
            value={firstName}/>
          <TextField id="outlined-basic"
            label="LastName"
            variant="outlined"
            onChange={(event) => setLastName(event.target.value) }
            value={lastName}/>
          <TextField id="outlined-basic"
            label="Age"
            variant="outlined"
            onChange={(event) => setAge(event.target.value) }
             value={age}/>
          <Button 
        
          onClick={()=> {
            const updateduserinfo = {
              id: id,                
              lastName: lastName,
              firstName:firstName,
              age: age,
            };            

            setuserData(userData.map((user) => (user.id ===currentUser.id ? ({...user, ...updateduserinfo}) : (user)) ));
            console.log(userData)
            navigate("/view-users"); 
            userData.includes(currentUser.id)          

          } }
          variant="contained"         
            
            >UPDATE</Button>

        </fieldset>


      </div>



    </div>
  );
}


