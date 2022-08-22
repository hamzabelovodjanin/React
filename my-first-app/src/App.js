// import React, { useState } from 'react'
// import "./App.css"
// import Team from './components/Team/Team'

// const deleteTeam =(id) => {
// const newTeams = teams.filter(team => team.id !== id)
// setTeams(newTeams)
// }

// const favoriteTeams = [
// {id: 0, name:"Arsenal", points: 6},
// {id: 1, name:"Man.City", points: 6},
// {id: 2, name:"Man.United", points: 2},
// {id: 3, name:"Liverpool", points: 2},
// {id: 4, name:"Pazar", points: 9},
// {id: 5, name:"Partizan", points: 5},




// ]


// export default function App() {
//   const [teams,setTeams] = useState(favoriteTeams)

// const generateNewWord = () => Math.random().toString(36).slice(2, 7)

// const reverseArray = (arr) => {
// const _array = [...array]
// const reversed = _array.reverse()
// setArray(reversed)
// }

// return (
  
//   // <div className='card-container'>
//   //   {/* <button onClick={() => setArray((prev) => [generateNewWord(), ...prev ])}>Dodaj random recenicu</button>
//   //   <h4>Random recenice</h4>
    
//   //   <ul>
//   // {array.map((el) => (
//   //   <li key ={el} > {el}</li>

//   // ))}
//   //   </ul>
//   //   <button onClick={reverseArray}>Reverse Recenice</button> */}
//   // </div>


// )
// return (
// <div classNAme="card-container">
//   <button onClick={() =>
//   setTeams((prev) => [
//     ...prev, {
//       id: Math.random(),
//       name: "Novi Tim",
//       points: 4,
//     },

//   ])}>Dodaj novi tim</button>
// {teams.map((team) =>(
//   <div key={team.id}>
//     <Team
//   name={team.name} 
//   points={team.points}
//  onDeleteTeam={() => deleteTeam(team.id)}/>
//   </div>
  
// ))}
// </div>



// ) 


// }










/* // const [name,setName] = React.useState("");
// const [email,setEmail] = React.useState("")
// const [hobi,setHobi] = React.useState("")

// const [formValues, setFormValues] = useState ({ */
/* //   name: "",
//   email: "",
//   hobi: "",
//   password: "",
// });

//   return (
// <div className="card-container">
//       <form onSubmit={(e) => {e.preventDefault()
//       console.log(formValues)
//       console.log(`NAME: ${formValues.name} EMAIL: ${formValues.email} HOBI ${formValues.hobi} `)}}>
//         <label htmlFor="html">Name</label>
//         <input 
//           type="text" 
//           id="html" 
//           name="fav_language"  
//           value={formValues.name}
//           onChange={(event) => setFormValues(prev => ({
//             ...prev,
//             name: event.target.value
//           }))}/>
//         <br />

//         <label htmlFor="css">email</label>
//         <input 
//         type="text" 
//         id="css" 
//         name="fav_language"
//         value={formValues.email}
//         onChange={(event) => setFormValues(prev => ({
//           ...prev,
//           email: event.target.value
//         }))}/>
//         <br />


//         <label htmlFor="javascript">Hobi</label>
//         <input 
//         type="text" 
//         id="javascript"
//          name="fav_language"
//         value={formValues.hobi}
//         onChange={(event) => setFormValues(prev => ({
//           ...prev,
//           hobi: event.target.value
//         }))}/>
//         <br />
//         <br />
//         <input type="submit" defaultValue="Submit" />
//       </form>

      


      
// </div>

*/

import React from "react";
import "./App.css";
import CryptoForm from "./components/Crypto/Crypto";

function App() {
  return (
    <div className="card-container">
      <CryptoForm />
    </div>
  );
}

export default App;