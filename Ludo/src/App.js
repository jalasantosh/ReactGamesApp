import React,{useEffect,useRef,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import path1 from "./utils/utils";
import coinSvg from "./img/coin.svg";
import Board from './player/board';


var coinPosition = 0;
function App() {
  
  var board = new Board();
  var x = board.x;
  var y= board.y;
  const [dice,setDice] = useState();

  // select active player
  board.setActivePlayer(1);

  const [isReady,setReady] = useState(false);

  // roll dice


  // active player select coin


  // coin moves based on dice value


  // On dice change execute moveCoin function
 
  useEffect(()=>{
    setReady(true);
  },[])
   
  


  // generates random number and sets it to dice
  function rollDice(){
    var randomNum = getRandomInt(1,6);
    setDice(randomNum);
    // moveCoin(randomNum);
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
    

    var activeCoin  = board.activePlayer.activeCoin;
    if(null) return;

    var coin1 = document.querySelector("#"+activeCoin);

    if(coin1){
      coin1.style.top = (rect.top + 14 ) +"px";
      coin1.style.right = (rect.right) +"px";
      coin1.style.bottom = (rect.bottom)+"px";
      coin1.style.left = (rect.left+14)+"px";
    }
    
  }

  function coinClicked(coinId){
    board.activePlayer.updateActiveCoin(coinId);
    // id dice is active then move coin


  }

  // UI lOGIC
  
  return (
    <div className="App">

      <div style={{margin:32, position:"absolute",right:150}}>
        <button onClick={()=>rollDice()}>Roll Dice</button>
          {dice}
      </div>

      <div style={{width:540,position:"relative"}}>

        { isReady ?
            board.players.map((player,i)=>{
              console.log(i);
              return (
                
                  player.coins.map((coin,j)=>{

                    var id = "p"+(i+1)+"p"+(j+1);
                    var position = document.querySelector("#"+id).getBoundingClientRect();
                    
                    return (
                      <div className="coin1" style={{top:position.top+8,left:position.left+9,right:position.right-9,bottom:position.bottom-8}} id={coin} onClick={()=>coinClicked(coin)}>
                        <img src={coinSvg}/>
                      </div>
                    );
    
                  })

              )

            }):
          null
        }
        

        <div className="home one">
          <div className="whitePanel">
            <div id="p1p1" className="coin one"></div>
            <div id="p1p2" className="coin panel2"></div>
            <div id="p1p3" className="coin panel3"></div>
            <div id="p1p4" className="coin panel4"></div>

          </div>
        </div>
        <div className="home two">
          <div className="whitePanel">
            <div id="p2p1" className="coin one"></div>
            <div id="p2p2" className="coin panel2"></div>
            <div id="p2p3" className="coin panel3"></div>
            <div id="p2p4" className="coin panel4"></div>
          </div>
        </div>
        <div className="home three">
          <div className="whitePanel">
            <div id="p3p1" className="coin one"></div>
            <div id="p3p2" className="coin panel2"></div>
            <div id="p3p3" className="coin panel3"></div>
            <div id="p3p4" className="coin panel4"></div>
          </div>
        </div>
        <div className="home four">
          <div className="whitePanel">
            <div id="p4p1" className="coin one"></div>
            <div id="p4p2" className="coin panel2"></div>
            <div id="p4p3" className="coin panel3"></div>
            <div id="p4p4" className="coin panel4"></div>
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
