import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  const locationForP = useLocation();
  return (
    <ul>
      {locationForP.pathname === '/' && <h2>Trending today</h2>}
      {Array.isArray(movies) &&
        movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link state={location} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;

