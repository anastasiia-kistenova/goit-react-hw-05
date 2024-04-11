import React, { useState } from "react";
import axios from "axios";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false`, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDZiNmIxYzRjYmM5YThiYjJiMDMxYWE5NzNiYmQyZSIsInN1YiI6IjY2MTgwOGE5ZDhmNDRlMDE3YzJmMWRiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GWxBxPnivlKlI9-9Y_WaGpJq7urxVBOm-SJj5oHxp_U"
      }
    })
    .then(response => {
      setSearchResults(response.data.results);
    })
    .catch(error => {
      console.error("Error searching movies:", error);
    });
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
