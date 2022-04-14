import React from "react";

function Poem(props) {
  const {title, content, author}= props
  

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>{author}</strong>
      </p>
      <button>Mark as read</button>
    </div>
  );
}

export default Poem;
