import React from "react";
import { IconContext } from "react-icons";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ posts, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSrarchChange = (e) => {
    if (!e.target.value) return setSearchResults(posts);

    const resultsArray = posts.filter(
      (post) =>
        post.title.includes(e.target.value) ||
        post.body.includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };
  return (
    <header className="search-bar">
      <form className="search" onSubmit={handleSubmit}>
        <input type="text" id="search" onChange={handleSrarchChange} />
        <button type="submit">
          <IconContext.Provider value={{ className: "react-icons" }}>
            <CiSearch />
          </IconContext.Provider>
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
