import React, { useState, useEffect } from "react";
import { getPosts } from "./api/axiosAPI";
import ListScreen from "./ListScreen";
import SearchBar from "./SearchBar";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getPosts()
      .then((json) => {
        setPosts(json);
        return json;
      })
      .then((json) => {
        setSearchResults(json);
      });
  }, []);

  return (
    <>
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <ListScreen searchResult={searchResults} />
    </>
  );
}

export default App;
