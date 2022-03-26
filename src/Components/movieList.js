import React, {useState} from 'react'
import {MovieData} from '../Constants/data'
import Add from './Add'
import MovieCard from './movieCard'

function MovieList({imput}) {
    const [movies,setMovies] = useState(MovieData)
    const addMovie=(newMovie)=>{
      setMovies([...movies,newMovie])
    }

  return (
    <>
    <Add addMovie={addMovie}/>
    <div style={{display:"flex",justifyContent:'space-around',flexWrap:'wrap'}}>
        {movies.filter((el)=>el.title.toUpperCase().includes(imput.toUpperCase()) || el.rate >= imput)
        .map((film)=>
        <MovieCard lista={film}/>)
        }
    </div>
    </>
  )
}

export default MovieList