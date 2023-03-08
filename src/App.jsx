import * as React from 'react';
import './App.css';
import { TitleBar } from './TitleBar';
import { TopBar } from './TopBar';
import { SummaryCardList } from './SummaryCardList';
import { ProgressList } from './ProgressList';
import { Illustration } from './Illustration';
import { AccountingCardList } from './AccountingCardList';
import { ContactList } from './ContactList';

import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { ViewAndDeleteUsers} from './ViewAndDeleteUsers';
import { UpdateUsers } from './UpdateUsers';
import { Paper} from '@mui/material';
import { ArgumentAxis, BarSeries, Chart, ValueAxis } from '@devexpress/dx-react-chart-material-ui';
import { AddUsers } from './AddUsers';

function App(){
  const navigate = useNavigate();

  const [userData, setuserData] = React.useState([
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'edwin', firstName: 'galwin', age: 10 },
  ])
  
  const initialformstate = {id:"null", firstName:"", lastName:"", age:""};
  const [currentUser, setCurrentuser] = React.useState(initialformstate);

  const editUser = (user) => {
    console.log(user)
    navigate("/update-users");    
    setCurrentuser({id:user.id, firstName:user.firstName, lastName:user.lastName, age:user.age})  

  } 

  
  return (
    <div>     
      
      <Routes>
        <Route path="/" element={<Home />} />         
        <Route path="/view-users" element={<ViewAndDeleteUsers userData={userData} setuserData={setuserData} editUser={editUser}  />} /> 
          <Route path="/update-users" element={<UpdateUsers
            currentUser={currentUser}
            userData={userData}
            setuserData = {setuserData}           
          />}
        />           
          
        <Route path="/add-users" element={<AddUsers userData={userData} setuserData={setuserData}   />} />            
      </Routes>

    </div>
  )
}

function Home() {
  return(

    <div>        
      <div>
        <TopBar />
        
      </div>
      <div className="bottom-bar">
        <div className="left-bar"> 
          <SideBar />     
         
          
        </div>
        <div className="right-bar"> 
          <div>
            <TitleBar />
            <SummaryCardList />            
          </div>
          <div className="content-area">
           <div className="inner-container">
           <ProgressList />
            </div>
          <div className="inner-container">
           <Illustration />
           </div >
             <div className="inner-container">
              <AccountingCardList />
             </div>
            <div className="inner-container">
              <ContactList />
             </div>
             {/* <div className="inner-container">
             <DisplayGraph />
             </div> */}
           </div>
        </div>
      </div>

      

    
    </div>
    // <div >  
    //   <div>
    //     <TopBar />
    //   </div>   
      
    //   <div className="main-container">
    //     <div className="left-container"  >
    //       <SideBar />
    //     </div>
    //     <div className="right-container">
    //       <div>
    //         <TitleBar />
    //         <SummaryCardList />            
    //       </div>
          
    //       <div className="content-area">
    //         <div className="inner-container">
    //         <ProgressList />
    //         </div>
    //         <div className="inner-container">
    //         <Illustration />
    //         </div >
    //         <div className="inner-container">
    //           <AccountingCardList />
    //         </div>
    //         <div className="inner-container">
    //           <ContactList />
    //         </div>
    //       </div>
    //     </div>

    //   </div>
      
      
      
        
        
       
        
      
      

    // </div>
  )
  
}



function SideBar(){
  return(
    <div className="side-bar">
      <ul>
          <li><Link to ="/">Home</Link></li>    
          <li><Link to ="/view-users">View/Delete Users</Link></li>    
          <li><Link to ="/add-users">Add Users</Link></li> 
                      
        </ul>

        

        
       

        

        

      </div>

  )
}

export function DisplayGraph(){

 
  
    // Sample data
    const data = [
      { argument: 'Monday', value: 30 },
      { argument: 'Tuesday', value: 20 },
      { argument: 'Wednesday', value: 10 },
      { argument: 'Thursday', value: 50 },
      { argument: 'Friday', value: 60 },
    ];
    return (
        <Paper>
        <Chart
          data={data}
        >
          <ArgumentAxis />
          <ValueAxis />
      
          <BarSeries  valueField="value" argumentField="argument" />
        </Chart>
      </Paper>
    );
    }
      
   
  

export default App


