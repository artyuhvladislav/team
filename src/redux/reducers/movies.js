const initialState = {
  items: [],
  currentPage: 1,
  totalPagesCount: null,
  searchValue: ''
};

const setMovies = "setMovies";
// const setLoaded = "setLoaded";
const setCurrentPage = "setCurrentPage";
const setTotalPagesCount = "setTotalPagesCount";
const setSearchValue = "setSearchValue";

const movies = (state = initialState, action) => {
  switch (action.type) {
    case setMovies:
      return { ...state, items: action.payload };

    // case setLoaded:
    //   return { ...state, loaded: action.payload };

    case setCurrentPage:
      return { ...state, currentPage: action.payload };

    case setTotalPagesCount:
      return { ...state, totalPagesCount: action.payload };

    case setSearchValue:
      return { ...state, searchValue: action.payload };

    default:
      return state;
  }
};

export default movies;
