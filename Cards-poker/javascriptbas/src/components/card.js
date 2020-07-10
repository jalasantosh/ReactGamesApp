import React, { Component } from 'react';
import spade from "../images/spade.svg";
import heart from "../images/heart.svg";
import diamonds from "../images/diamonds.svg";
import clubs from "../images/clubs.svg";


function Card(props){
    function getSuite(suite){

        if(suite==="S"){
          return <img style={{height:34,width:34}} src={spade}/>
        } else if(suite === "H"){
          return <img style={{height:34,width:34}} src={heart}/>
        }else if(suite === "D"){
          return <img style={{height:34,width:34}} src={diamonds}/>
        }else if(suite === "C"){
          return <img style={{height:34,width:34}} src={clubs}/>
        }
    
      }
    return(

        <div className="card">
            <div className={`number ${props.suite}`} style={{position:"absolute",top:0,left:8}}> {props.number}</div>
            <div> {getSuite(props.suite)}</div>
            <div className={`number ${props.suite}`} style={{position:"absolute",right:8,bottom:0}}> {props.number}</div>
        </div>

    )
}




export default Card;