import React from 'react'
import "./App.css"

export default function App() {

const [name,setName] = React.useState("");
const [email,setEmail] = React.useState("")
const [hobi,setHobi] = React.useState("")

  return (
<div className="card-container">
      <form onSubmit={(e) => {e.preventDefault()
      console.log(`NAME: ${name} EMAIL: ${email} HOBI ${hobi} `)}}>
        <label htmlFor="html">Name</label>
        <input 
          type="text" 
          id="html" 
          name="fav_language"  
          value={name}
          onChange={(event) => setName(event.target.value)}/>
        <br />

        <label htmlFor="css">email</label>
        <input 
        type="text" 
        id="css" 
        name="fav_language"
        value={email}
        onChange={(event) => setEmail(event.target.value)}/>
        <br />


        <label htmlFor="javascript">Hobi</label>
        <input 
        type="text" 
        id="javascript"
         name="fav_language"
        value={hobi}
        onChange={(event) => setHobi(event.target.value)}/>
        <br />
        <br />
        <input type="submit" defaultValue="Submit" />
      </form>
    </div>
  )


}



