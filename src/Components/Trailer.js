import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MovieData } from "../Constants/data";

function Trailer() {
  const params = useParams();
  const foundmovie = MovieData.find((el) => el.id === params.id);
  const Navigate = useNavigate();
  return (
    <div>
      <h2> Title: {foundmovie.title} </h2>
      <iframe
        width="560"
        height="315"
        src={foundmovie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h3>Description: {foundmovie.description} </h3>
      <button style={{backgroundColor:"red", border:'light'}} onClick={() => Navigate(-1)}>
        <h6>Go Back</h6>
      </button>
    </div>
  );
}

export default Trailer;
