import { APIKey } from "./APIKey";

export const fetchMovies = async (currentPage = 1, query) => {
  let url;
  if (query) {
    url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${query}&page=${currentPage}`;
  } else {
    url = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&page=${currentPage}`;
  }
  try {
    const jsonData = await fetch(url);
    const movies = await jsonData.json();
    return movies;
  } catch (error) {
    alert(error);
  }
};
