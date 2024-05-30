import React, { useState, useEffect} from 'react'
import './Body.css'
import Tasks from './Tasks'

function Body() {
    const lsd = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")):[];
    const [tasks, setTasks] = useState(lsd)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const submitController = (e)=>{
        e.preventDefault();
        setTasks([...tasks, {title, description}])
        setTitle("")
        setDescription("")
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])
    

    const deleteButton = (index) =>{
        const filteredtasks = tasks.filter((val, i)=>{
            return i !== index
        })
        setTasks(filteredtasks)
    }
  return (
    <div className='body'>
        <h1 id='dt'>Daily Tasks</h1>
        <div className="box">
            <input type="text" name="title" id="title" value={title} placeholder='Enter the Title...' onChange={(e)=> setTitle(e.target.value)} required/>
            <textarea name="description" id="description" value={description} placeholder='Enter the Description...' onChange={(e)=> setDescription(e.target.value)} required></textarea>
            <button type='submit' onClick={submitController}>ADD</button>
        </div>
        
        {tasks.map((val, index) => (
            <Tasks key={index} title={val.title} description={val.description} deleteButton={deleteButton} index={index}/>
        ))}
    
    </div>
  )
}

export default Body