import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img alt="avatar" src="https://via.placeholder.com/150" />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
