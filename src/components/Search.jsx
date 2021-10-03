import React from "react";

const Search = ({ submitSearchValue }) => {
  const [searchValue, setSearchValue] = React.useState("");

  const handleInputChange = (value) => {
    setSearchValue(value);
  };
  // TODO использовать мемоизацию для функции
  const onSubmitSearchValue = () => {
    submitSearchValue(searchValue);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
        value={searchValue}
      />
      <button onClick={onSubmitSearchValue}>Search</button>
    </div>
  );
};

export default Search;
