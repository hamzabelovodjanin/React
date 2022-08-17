import React, { useState } from 'react'
import "./App.css"

export default function App() {

// const [name,setName] = React.useState("");
// const [email,setEmail] = React.useState("")
// const [hobi,setHobi] = React.useState("")

const [formValues, setFormValues] = useState ({
  name: "",
  email: "",
  hobi: "",
  password: "",
});

  return (
<div className="card-container">
      <form onSubmit={(e) => {e.preventDefault()
      console.log(formValues)
      console.log(`NAME: ${formValues.name} EMAIL: ${formValues.email} HOBI ${formValues.hobi} `)}}>
        <label htmlFor="html">Name</label>
        <input 
          type="text" 
          id="html" 
          name="fav_language"  
          value={formValues.name}
          onChange={(event) => setFormValues(prev => ({
            ...prev,
            name: event.target.value
          }))}/>
        <br />

        <label htmlFor="css">email</label>
        <input 
        type="text" 
        id="css" 
        name="fav_language"
        value={formValues.email}
        onChange={(event) => setFormValues(prev => ({
          ...prev,
          email: event.target.value
        }))}/>
        <br />


        <label htmlFor="javascript">Hobi</label>
        <input 
        type="text" 
        id="javascript"
         name="fav_language"
        value={formValues.hobi}
        onChange={(event) => setFormValues(prev => ({
          ...prev,
          hobi: event.target.value
        }))}/>
        <br />
        <br />
        <input type="submit" defaultValue="Submit" />
      </form>

      


      
</div>
  )
      }