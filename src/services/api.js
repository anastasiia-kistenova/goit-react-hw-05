import axios from "axios";


const API_KEY = "a46b6b1c4cbc9a8bb2b031aa973bbd2e";
const baseURL = "https://api.themoviedb.org/3";


const defaultParams = {
  api_key: API_KEY,
  language: "en-US",
};


const instance = axios.create({
  baseURL: baseURL,
  params: defaultParams,
});


export const fetchTrendingMovies = async () => {
  try {
    const { data } = await instance.get(`trending/movie/day`);
    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};


export const searchMoviesByName = async (query = "") => {
  try {
    const { data } = await instance.get(`/search/movie?query=${query}`);
    return data.results;
  } catch (error) {
    console.error("Error searching for movies:", error);
    throw error;
  }
};


export const fetchMovieDetailsById = async (movieId) => {
  try {
    const { data } = await instance.get(`/movie/${movieId}`);
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};


export const fetchMovieCastById = async (movieId) => {
  try {
    const { data } = await instance.get(`movie/${movieId}/credits`);
    return data.cast;
  } catch (error) {
    console.error("Error fetching movie cast:", error);
    throw error;
  }
};


export const fetchMovieReviewsById = async (movieId) => {
  try {
    const { data } = await instance.get(`movie/${movieId}/reviews`);
    return data.results;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    throw error;
  }
};

