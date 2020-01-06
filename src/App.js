import React, { useState, useEffect } from 'react'

const MostraVoltas = (props) => {
  return (
    <p>
      {props.volta} <br/> 
      Voltas
    </p>
  )
}

const MostraTempo = (props) => {
  return (
    <p>
      {props.tempo}<br/>
      Tempo médio por volta
    </p>
  )
}

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>
function App() {
  const [numVoltas, setNumVoltas] = useState(14)
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    setInterval(() => {
      console.log('chamou');
      
    }, 1000)
  }, [])


  const increment = () => {
    setNumVoltas(numVoltas + 1)
    console.log(numVoltas);
  }
  const decrement = () => {
    setNumVoltas(numVoltas - 1)
    console.log(numVoltas);
    
  }
  return (
    <div className='App'>
      <MostraVoltas volta={numVoltas}/>
      <Button text='+' onClick={increment}/>
      <Button text='-' onClick={decrement}/>
      <MostraTempo tempo={tempo}/>
      <Button text='Iniciar'/>
      <Button text='Reiniciar'/>
    </div>
  )
}

export default App;
