import React from "react";
import {Card, Button} from "react-bootstrap" ;
import { Link } from "react-router-dom";



function MovieCard({lista}) {
  return (
    <div><Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={lista.posterUrl} />
    <Card.Body>
      <Card.Title>{lista.title}</Card.Title>
      <Card.Text>
        Description: {lista.description}
      </Card.Text>
      <Card.Text>
        Rate: {lista.rate}
      </Card.Text>
    </Card.Body>
    <Link to={`/trailer/${lista.id}`}><Button>Trailer</Button></Link>
  </Card>
  </div>
  )
}

export default MovieCard

