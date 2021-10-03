import { fetchMovies } from "../../API/fetchMovies";
import { transformGetMovies } from "../../utils/transformHelpers";

const setMovies = "setMovies";
const setLoaded = "setLoaded";
const setCurrentPage = "setCurrentPage";
const setTotalPagesCount = "setTotalPagesCount";
const setSearchValue = "setSearchValue";

export const getMovies = (currentPage, searchValue) => async (dispatch) => {
  const data = await fetchMovies(currentPage, searchValue);
  const { results, totalPages } = transformGetMovies(data);
  console.log(totalPages)
  dispatch(setTotalPagesCountAC(totalPages));
  dispatch(setMoviesAC(results));
};

export const setMoviesAC = (payload) => ({ type: setMovies, payload });

export const setCurrentPageAC = (payload) => ({
  type: setCurrentPage,
  payload,
});

export const setTotalPagesCountAC = (payload) => ({
  type: setTotalPagesCount,
  payload,
});

export const setSearchValueAC = (payload) => ({
    type: setSearchValue,
    payload,
  });
export const setLoadedAC = (payload) => ({ type: setLoaded, payload });
