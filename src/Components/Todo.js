import {Button, TextField, Card} from '@mui/material'
import React, {useState, useEffect} from 'react'
//import {Add} from '@mui/icons-material';
import './Todo.css'
const Todo = () =>{
  const [userName, setUserName] = useState()
  const [message, setMessage] = useState()
  const [file, setFile] = useState()
  const [input, setInput] = useState([])
  const [toggle, setToggle] = useState(true)
  const [count, setCount] = useState(0)
  const time = new Date().toLocaleDateString()
  const click = () =>{
     if (!userName && !message) {
    }else{
      setInput([...input, {userName, message, file}])
      setMessage('')
      setUserName('')
      setCount(count+1)
    }
  }
  const removeItem = (id) =>{
    const newData = input.filter((curr, ind) =>{
      return ind !== id
    })
    setInput(newData)
    setCount(count-1)
  }
  const editItem = (id) =>{
    //alert(id)
    const editedItem = input.find((curr, ind) =>{
       if (ind == id) {
          return(
             setUserName(curr.userName),
             setMessage(curr.message),
             setToggle(false),
             setInput(editedItem)
          )
       }
    })
  }
  return(
    <>
    <Card variant='filled' className='form'>
      <h1> Add Your Note </h1>
      <TextField label='Enter your title' type='text' variant='outlined' onChange={e => setUserName(e.target.value)} value={userName} />
      <TextField label='enter mesaage' type='text' variant='outlined' onChange={e => setMessage(e.target.value)} value={message} />
      <TextField label='enter mesaage' type='file' variant='outlined' onChange={e => {
        const Img = URL.createObjectURL(e.target.file[0])
        setFile(Img)
      }} />
      <Button className='Button' onClick={ click } variant='outlined'>   Add Note </Button>    
      <img src={file} alt='hg'/>
      </Card>
    <div className='flex'>
      {
        input.map((curr, ind) =>{
          return (
            <>
            <Card className='filled' key={ind}>
              <div className='cardTitle'>
                <h1 className='title'> {curr.userName} </h1>
                <hr className='hr' />
              </div>
              <div className='cardBody'>
              <img src={curr.file} alt='img not found ' />
                <h1 className='message'> {curr.message} </h1>
                <h1 className='message'> data was saved in {time} </h1>
              </div>
              <Button variant='outlined' className='remove' onClick={()=> removeItem(ind)}> Delete </Button>
              <Button variant='outlined' className='remove' onClick={()=> editItem(ind)}> Use </Button>
            </Card>
          </>
          )
        })
      }
      </div>
    </>
  )
}
export default Todo