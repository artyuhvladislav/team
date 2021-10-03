export const getMoviesSelector = ({ movies }) => movies.items;

export const getPageInfoSelector = ({ movies }) => ({
  currentPage: movies.currentPage,
  totalPagesCount: movies.totalPagesCount,
});

// export const getSearchValue= ({ movies }) => movies.searchValue;