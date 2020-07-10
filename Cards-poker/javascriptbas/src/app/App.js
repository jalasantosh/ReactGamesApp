import React from 'react';
import logo from './logo.svg';
import './App.css';
import spade from "./images/spade.svg";
import heart from "./images/heart.svg";
import diamonds from "./images/diamonds.svg";
import clubs from "./images/clubs.svg";

function App() {
  
  var suits = ["S","H","D","C"];
  var nums = [2 , 3 ,4 ,5 ,6 ,7 ,8 ,9, 10, "J", "Q", "K","A"];


  function getSuite(suite){

    if(suite==="S"){
      return <img style={{height:50,width:50}} src={spade}/>
    } else if(suite === "H"){
      return <img style={{height:50,width:50}} src={heart}/>
    }else if(suite === "D"){
      return <img style={{height:50,width:50}} src={diamonds}/>
    }else if(suite === "C"){
      return <img style={{height:50,width:50}} src={clubs}/>
    }

  }

  return (
    <div>
      {
        suits.map((suite,i)=>{
          return (
            <div style={{display:"inline-flex"}}>
              {
                nums.map((num,i)=>{
                  return (
                    <div className="card">
                     <div className={`number ${suite}`} style={{position:"absolute",top:12,left:12}}> {num}</div>
                     <div> {getSuite(suite)}</div>
                     <div className={`number ${suite}`} style={{position:"absolute",right:12,bottom:12}}> {num}</div>
                    </div>
                  )
                  
                   
                })
              }
            </div>            
          ) 
        })
        
       
      }


    </div>
  );
}

export default App;
