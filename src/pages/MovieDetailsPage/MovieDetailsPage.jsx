import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDZiNmIxYzRjYmM5YThiYjJiMDMxYWE5NzNiYmQyZSIsInN1YiI6IjY2MTgwOGE5ZDhmNDRlMDE3YzJmMWRiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GWxBxPnivlKlI9-9Y_WaGpJq7urxVBOm-SJj5oHxp_U"
      }
    })
    .then(response => {
      setMovie(response.data);
    })
    .catch(error => {
      console.error("Error fetching movie details:", error);
    });
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>Genre: {movie.genres.map(genre => genre.name).join(", ")}</p>
    </div>
  );
};

export default MovieDetailsPage;
