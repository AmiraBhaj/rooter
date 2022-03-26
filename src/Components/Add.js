import React, {useState} from 'react'
import {Button,Modal} from 'react-bootstrap'

function Add({addMovie}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //--------------------//
  const [title, setTitle] = useState("")  
  const [description, setDescription] = useState("")
  const [poster, setPoster] = useState("")
  const [rate, setRate] = useState("")
  //---------------//

  const handleAdd =()=> {
      addMovie ({title,description,poster,rate}) ;
      handleClose() ;
  }


  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
        Add new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="Enter your movie title" onChange={(e)=>setTitle(e.target.value)}/> 
            <label htmlFor="description">description</label>
            <input type="text" placeholder="Enter the description" onChange={(e)=>setDescription(e.target.value)}/> 
            <label htmlFor="URl">posterUrl</label>
            <input type="text" placeholder="Enter your URL" onChange={(e)=>setPoster(e.target.value)}/> 
            <label htmlFor="rate">rate</label>
            <input type="text" placeholder="Enter your rate" onChange={(e)=>setRate(e.target.value)}/> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add