import React from "react";

import Post from "./Post";

const ListScreen = ({ searchResult }) => {
  const results = searchResult.map((post) => (
    <Post key={post.id} post={post} />
  ));

  if (!results.length || results === undefined) {
    return <h1 className="no__post">No Post found</h1>;
  }

  return <main className="post__screen">{results}</main>;
};
export default ListScreen;
