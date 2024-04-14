import { useDetailsSearch } from "../../hooks/useDetailsSearch";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css";


const MovieReviews = () => {
  const { loading, error, movieReviews } = useDetailsSearch();
  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage />}


      <ul className={css.reviewList}>
        {movieReviews !== null && movieReviews.length > 0 ? (
          movieReviews.map((review) => (
            <li key={review.id} className={css.reviewItem}>
              <p>{`Author: ${review.author}`}</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don&apos;t have any reviews for this movie.</p>
        )}
      </ul>
    </>
  );
};


export default MovieReviews;



