import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Movies from "./components/Movies";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import { getMovies, setSearchValueAC } from "./redux/actions/moviesAC";
import {
  getMoviesSelector,
  getPageInfoSelector,
  getSearchValue,
} from "./redux/selectors/selectors";

function App() {
  const dispatch = useDispatch();

  const movies = useSelector(getMoviesSelector);
  const { currentPage, totalPagesCount } = useSelector(getPageInfoSelector);
  // const searchValue = useSelector(getSearchValue)
  React.useEffect(() => {
    dispatch(getMovies(currentPage));
  }, []);

  const submitSearchValue = (searchValue) => {
    dispatch(setSearchValueAC(searchValue));
    debugger;
    dispatch(getMovies(currentPage, searchValue));
  };

  return (
    <div>
      <Switch>
        <Route path="/">
        <Movies movies={movies} />
        <Pagination
          currentPage={currentPage}
          totalPagesCount={totalPagesCount}
          pageLimit={20}
        />
         <Search submitSearchValue={submitSearchValue} />
        </Route>
      </Switch>

      
      <Login />
     
    </div>
  );
}

export default App;
