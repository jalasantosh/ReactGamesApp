import React,{useEffect,useRef,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import path1 from "./utils/utils";
import coinSvg from "./img/coin.svg";


var coinPosition = 0;
function App() {
  var x =[...Array(15)];
  var y =[...Array(15)];
  const [dice,setDice] = useState();

  // useEffect(()=>{
  //   var dic = 5;
  //   moveCoin(dic);

  //   path1.forEach((val,i)=>{      
  //     setTimeout(()=>{
  //       move(val);
  //     },500 * i)
  //   })

  // },[])



  // On dice change execute moveCoin function
  useEffect(()=>{
    moveCoin(dice);
  },[dice])


  // generates random number and sets it to dice
  function rollDice(){
    var randomNum = getRandomInt(1,6);
    setDice(randomNum);
  }

  // generates random number using min and max value 
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  // moves the coins multiple steps in path based on number passed 
  function moveCoin(dice){

    for(var i = 0;i<dice;i++){
      setTimeout(()=>{
        coinPosition++;

        if(coinPosition < path1.length-1 )
        {
          var val = path1[coinPosition];
          move(val);
        }

      },500*i)
    }

  }

  // gets co-ordinates based on id from board and sets it to coin
  function move(val) {
    var element = document.querySelector("#"+val);
    var rect = element.getBoundingClientRect();
    

    var coin1 = document.querySelector(".coin1");
    coin1.style.top = (rect.top + 14 ) +"px";
    coin1.style.right = (rect.right) +"px";
    coin1.style.bottom = (rect.bottom)+"px";
    coin1.style.left = (rect.left+14)+"px";
  }

  return (
    <div className="App">

      <div style={{margin:32, position:"absolute",right:150}}>
        <button onClick={()=>rollDice()}>Roll Dice</button>
          {dice}
      </div>

      <div style={{width:540,position:"relative"}}>

        <div className="coin1">
          <img src={coinSvg}/>
        </div>

        <div className="home one">
          <div className="whitePanel">
            <div className="coin one"></div>
            <div className="coin two"></div>
            <div className="coin three"></div>
            <div className="coin four"></div>

          </div>
        </div>
        <div className="home two">
          <div className="whitePanel">
            <div className="coin one"></div>
            <div className="coin two"></div>
            <div className="coin three"></div>
            <div className="coin four"></div>
          </div>
        </div>
        <div className="home three">
          <div className="whitePanel">
            <div className="coin one"></div>
            <div className="coin two"></div>
            <div className="coin three"></div>
            <div className="coin four"></div>
          </div>
        </div>
        <div className="home four">
          <div className="whitePanel">
            <div className="coin one"></div>
            <div className="coin two"></div>
            <div className="coin three"></div>
            <div className="coin four"></div>
          </div>
        </div>

        <div className="house"></div>

        {
          // generated borad 15 x 15 matrix
          x.map((xval, i) => {
            return (
              <div style={{display:"flex"}} > 
                {
                  y.map((yval,j)=>{
                    return  <div id={"_"+i+"_"+j} style={{height:35,width:35,border:"0.5px solid"}}> x{i} y{j} </div>
                  })
                } 
              </div>
            )
          })
        }
      </div>
      
    </div>
  );
}

export default App;
