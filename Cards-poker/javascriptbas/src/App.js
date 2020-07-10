import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Card from "./components/card";

function App() {
  
  var suits = ["S","H","D","C"];
  var nums = [2 , 3 ,4 ,5 ,6 ,7 ,8 ,9, 10, "J", "Q", "K","A"];

  const [randomCards,setRandomCards] = useState([]);

  useEffect(()=>{
    var temp = [];
    for(var i=0;i<5;i++){
      
      // get randm number for suite
      var num1 = getRandomInt(0,3);
      var randomSuit = suits[num1];
      // get random number for card
      var num2 = getRandomInt(0,12);
      var randomNumber = nums[num2];
      
      temp.push({suit:randomSuit,num:randomNumber})

    }

    setRandomCards(temp);
    
  },[])

  

  


  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

  return (
    <div  style={{display:"flex" , justifyContent:"center",alignItems:"center",height:"100vh"}}>
      
      <div style={{width:500,height:152,border:"2px solid red",display:"flex",transform: "rotate(90deg)"}}>
        {
          randomCards.map((val,i)=>{
            return <Card key={i} suite={val.suit} number={val.num} />
          })    
        }        
      </div>

      <div style={{width:500,height:152,border:"2px solid red",display:"flex"}}>
        {
          randomCards.map((val,i)=>{
            return <Card key={i} suite={val.suit} number={val.num} />
          })    
        }        
      </div>

      <div style={{width:500,height:152,border:"2px solid red",display:"flex",transform: "rotate(270deg)"}}>
        {
          randomCards.map((val,i)=>{
            return <Card key={i} suite={val.suit} number={val.num} />
          })    
        }        
      </div>
      {/* <Card suite="S" number="5"/>   */}
      {/* <Card suite="H" number="5"/>
      <Card suite="D" number="5"/>
      <Card suite="C" number="5"/> */}

    </div>
  );
}

export default App;
