import { useState } from 'react'
import './index.css'

function App() {
  const [color, setColor] = useState("grey")

  return (
    <>
    <div className='body' style={{backgroundColor: color}}>
     
      <div className='container' >
        <button onClick={()=>setColor("red")} style={{backgroundColor:"red"}}>RED</button>
        <button onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}}>BLUE</button>
        <button onClick={()=>setColor("yellow")} style={{backgroundColor:"yellow"}}>YELLOW</button>
        <button onClick={()=>setColor("green")} style={{backgroundColor:"green"}}>GREEN</button>
        <button onClick={()=>setColor("olive")} style={{backgroundColor:"olive"}}>OLIVE</button>
        <form >
          <input type="text" name="" id="clr" placeholder='Input a color....' />
          <input type="submit" value="Generate" />
        </form>
      </div>
      
      </div>
    </>
  )
}

export default App
