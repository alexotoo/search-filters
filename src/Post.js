import React from "react";

const Post = ({ post }) => {
  return (
    <article className="post__item">
      <a href="">{post.title}</a>
      <p>{post.body}</p>
      <h5>Post ID: {post.id}</h5>
    </article>
  );
};
export default Post;
