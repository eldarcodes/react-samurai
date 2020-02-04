import React from "react";
import "../Pages.scss";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="posts">
      <div className="create_post">
        <h4>My posts</h4>
        <div>
          <div class="input-field ">
            <input
              placeholder="Post"
              id="last_name"
              type="text"
              class="validate"
            />
          </div>
        </div>
        <button class="blue waves-effect waves-light btn">button</button>
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
