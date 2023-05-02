import React,{useState} from 'react'
import './square.css'
import Button from '@mui/material/Button';
// import { cyan, red, yellow } from '@mui/material/colors';
import Restart from '../restart/restart';



function Square({value,handclick,col}){

  return (
  <Button variant="outlined" className="square" onClick={handclick} style={{backgroundColor:col?'cyan':'yellow'}}>{value}</Button>
  )

}


export default function Board() {

  let [prevx,setX]  =useState(true)

  let [square,setSquare] = useState(Array(9).fill(null))
  let winner
  let status

  function handleClick(i){
    if(square[i] ||calculateWinner(square)){
      return
    }


    let nextSquares = square.slice()
    if(prevx){
      nextSquares[i] = "O"
      setX(false)
    }else{
      nextSquares[i] = "X";
      setX(true)
    }
    setSquare(nextSquares);
  }


  function handleRestart(){
    window.location.reload()
  }

  winner = calculateWinner(square)
     
    
  if(winner && winner==='X'){

    status =   "player 2 is the winner, Blue wins!!"
    console.log(status)

  }else if(winner==='O'){

    status = "player 1 is the winner,Yellow wins!"
    console.log(status)

  }

  return (
    <div className='totbak'>
    <div className='totBoard'>
    <div className="board-row">
    <Square value = {square[0]} handclick = {() => handleClick(0)} col = {prevx}/>
    <Square value = {square[1]} handclick = {() => handleClick(1)} col = {prevx}/>
    <Square value = {square[2]} handclick = {() => handleClick(2)} col = {prevx}/>
    </div>
    <div className="board-row">
    <Square value = {square[3]} handclick = {() => handleClick(3)} col = {prevx}/>
    <Square value = {square[4]} handclick = {() => handleClick(4)} col = {prevx}/>
    <Square value = {square[5]} handclick = {() => handleClick(5)} col = {prevx}/>
    </div>
    <div className="board-row">
    <Square value = {square[6]} handclick = {() => handleClick(6)} col = {prevx}/>
    <Square value = {square[7]} handclick = {() => handleClick(7)} col = {prevx}/>
    <Square value = {square[8]} handclick = {() => handleClick(8)} col = {prevx}/>
    </div>
    </div>
    <button className='btn' onClick={handleRestart}>Restart</button>

    <div><Restart winner ={winner} stat = {status} /></div>
  </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

