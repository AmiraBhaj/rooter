import React, {useState} from 'react'
import{Button, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MovieList from './movieList'


function Search() {
    const [search, setSearch] = useState("")
  return (
    <div>
            <Form.Control type="email" placeholder="Search by name or rate" 
            onChange={(e)=>setSearch(e.target.value)}/>
            <br/>
            <MovieList imput={search}/>
            <Link to={"/"}><Button>Home</Button></Link>
    </div>
  )
}

export default Search