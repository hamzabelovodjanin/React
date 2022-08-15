
import { useState } from "react"
export default function Incrementer () {
const [count, setCount] = useState(0)



    return ( <div>

        <button 
        disable={count === 0 || count > 0}
        onClick={() => setCount (prev => prev - 1) }>Smanji -</button>
        <h3>{count}</h3>
        <button onClick ={() => setCount (prev => prev +1)}>Povecaj +</button>
    </div>
    )
}

