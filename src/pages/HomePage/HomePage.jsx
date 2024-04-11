import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/trending/movie/day", {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDZiNmIxYzRjYmM5YThiYjJiMDMxYWE5NzNiYmQyZSIsInN1YiI6IjY2MTgwOGE5ZDhmNDRlMDE3YzJmMWRiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GWxBxPnivlKlI9-9Y_WaGpJq7urxVBOm-SJj5oHxp_U"
      }
    })
    .then(response => {
      setTrendingMovies(response.data.results);
    })
    .catch(error => {
      console.error("Error fetching trending movies:", error);
    });
  }, []);

  return (
    <div>
      <h2>Trending Today</h2>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
