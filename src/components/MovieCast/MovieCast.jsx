import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDZiNmIxYzRjYmM5YThiYjJiMDMxYWE5NzNiYmQyZSIsInN1YiI6IjY2MTgwOGE5ZDhmNDRlMDE3YzJmMWRiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GWxBxPnivlKlI9-9Y_WaGpJq7urxVBOm-SJj5oHxp_U"
      }
    })
    .then(response => {
      setCast(response.data.cast);
    })
    .catch(error => {
      console.error("Error fetching movie cast:", error);
    });
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
