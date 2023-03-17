import * as React from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export function UpdateUsers() {

const {id} = useParams();
const [firstName, setFirstName] = React.useState("");
const [lastName, setLastName] = React.useState("");
const [age, setAge] = React.useState(""); 
// const [user, setUser] = React.useState([]) 

const getusers = () => {
  fetch(`https://6409f9596ecd4f9e18c1111c.mockapi.io/userinfo/${id}`)
  .then((res) => res.json())
  .then((data) => {
    setFirstName(data.firstName)
    setLastName(data.lastName)
    setAge(data.age)
  })

}

React.useEffect(() => getusers(), [])

const updateusers =async() =>{
  const updateduserinfo = { 

        firstName:firstName,
        lastName: lastName,        
        age: age,
      };
      
      await fetch(`https://6409f9596ecd4f9e18c1111c.mockapi.io/userinfo/${id}`,
      {method: "PUT", 
      headers:{
        'Content-Type': "application/json",
      },   
      body:JSON.stringify(updateduserinfo),
    }).then(navigate("/view-users"))
}

  

  const navigate = useNavigate();

  console.log(firstName)
  
  return (    
    <div>
      <div className="user-form">
        <h4 className="userform-title"> UPDATE USER FORM</h4>
        <fieldset className="update-user">

          <TextField id="outlined-basic"
          
            label= "ID"
            
            variant="outlined"
            // onChange={(event) => setId(event.target.value) }
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
          <Button onClick={()=> updateusers()}                        
            variant="contained"         
            
            >UPDATE</Button>

        </fieldset>


      </div>



    </div>
  );
}


