import React from "react";
import title_background from "../assets/title_background.png";

function BlogPage() {
  return (
    <>
      <div className="title-container">
        <img src={title_background} />
        <div className="line-text">
          <div className="line"></div>
          <h1>ბლოგი</h1>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
