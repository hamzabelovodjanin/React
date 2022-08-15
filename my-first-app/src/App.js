import logo from './logo.svg';
import './App.css';
import React from 'react'
import Incrementer from './components/Incrementer/Incrementer';



export default function App() {
const [count, setCount] = React.useState(0)
  const handleClick = () => {
    setCount((prev) => prev +1)
  }

  const sayHello = (name) => {
    alert(`Hello ${name}`)
  }
  // let count = 0
  return (
    
    <div className="card-container">
      {/* <button onClick={() => sayHello("John") }>Click me</button>
      <button 
      onClick={() => {
        sayHello("Rick")
        console.log("Neka nova funkcija nije definisana")
      }}
      >
        In line anonimna funkcija
      </button> */}
      {count}
      <button onClick ={handleClick}
      //  onClick={() => {
      //   count++
      //   console.log(count)
      >Increase</button>
<Incrementer />

    </div>
    
  )
}


