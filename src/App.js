import React , {useState} from 'react';
import './App.css';
import Logo from './components/Logo';
import Start from './components/Start';
import Cricketer from './components/Cricketer';
import Colors from './components/Colors';
import Final from './components/Final';
import History from './components/History';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  
  //State to maintain the data such as name,answers,time
  const [data, setdata] = useState({
    name : '',
    cricketer : '',
    colors : [],
    timeCreation : ''
  })

  // adding name of the user and creation time to the state
  const addName  = (name) => {


    //Start time of the user
    let nameMonth =  ["January", "February", "March", "April",
     "May", "June", "July", "August", "September", "October", "November", "December"];
    let today = new Date();
    let date = today.getDate();
    let month = nameMonth[today.getMonth()];

    let hour = today.getHours(); /*extract hours from date*/
    let min = today.getMinutes(); /*extract minutes from date*/


    function updatetime  (t)  {
      if (t < 10) return "0" + t;
      else return t;
    };


    hour = updatetime(hour);
    min = updatetime(min);

     /*condition for AM and PM in clock*/
    let am_pm
    if(hour >= 12)
    am_pm = 'pm';
    else
    am_pm = 'am';
    
    /*condition for hour in clock*/
    if(hour === 0){
      hour = 12;
    }
    else if( hour > 12)
    {
      hour = hour - 12;
    }

    const time = date + ' ' + month + ' ' + hour + ":" + min + " " + am_pm;

    //updating state value of name and time
    setdata({...data,name : name , timeCreation : time})

  }

  //noting answer of cricketer question to the state
  const addCricketer = (cricketer) => {
    setdata({...data,cricketer})
  }

  //adding multiple color option to the state
  const addColor = (color) => {
 
    let newColors;
    if(!data.colors.includes(color)){
      newColors = [...data.colors, color];
    } else {
      newColors = data.colors.filter(item => item !== color);
    }
    setdata({ ...data, colors: newColors });
  }

  //for the finish button to initiate the questions again
  const clearState = () => {
    setdata({
      name : '',
      cricketer : '',
      colors : [],
    })
  }
  return (
    <div className = 'content'>
          <Logo/>
          <div className = 'App'>
          <Router>
            <Switch>
              <Route path = '/1'>
                <Cricketer addCricketer = {addCricketer} data = {data}/>
              </Route>
              <Route path = '/2'>
                <Colors addColor = {addColor} data = {data}/>
              </Route>
              <Route path = '/summary'>
                <Final clearState = {clearState} data = {data}/>
              </Route>
              <Route path = '/' exact>
                <Start  addName = {addName}/>
              </Route>
              <Route path = '/history' >
                <History/>
              </Route>
            </Switch>
          </Router>
          </div>
    </div>
  );
}

export default App;
