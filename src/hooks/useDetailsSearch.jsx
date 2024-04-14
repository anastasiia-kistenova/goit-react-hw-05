import { useEffect, useState } from "react";
import {
  fetchMovieCastById,
  fetchMovieDetailsById,
  fetchMovieReviewsById,
} from "../services/api";
import { useParams } from "react-router-dom";

export const useDetailsSearch = () => {
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [movieCast, setMovieCast] = useState(null);
  const [movieReviews, setMovieReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    async function fetchMovieDetails() {
      setLoading(true);
      try {
        const movieData = await fetchMovieDetailsById(movieId);
        setMovieData(movieData);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  useEffect(() => {
    if (!movieId) return;
    async function fetchMovieCast() {
      setLoading(true);
      try {
        const movieCast = await fetchMovieCastById(movieId);
        setMovieCast(movieCast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieCast();
  }, [movieId]);

  useEffect(() => {
    async function fetchMovieReviews() {
      if (!movieId) return;
      setLoading(true);
      try {
        const movieReviews = await fetchMovieReviewsById(movieId);
        setMovieReviews(movieReviews);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieReviews();
  }, [movieId]);

  return {
    movieData,
    movieCast,
    movieReviews,
    loading,
    error,
    imageUrl,
  };
};