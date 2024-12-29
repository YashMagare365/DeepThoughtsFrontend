import React from "react";

function SubThread(props) {
  return (
    <div className="sub-thread-container">
      <div className="sub-thread-heading">{props.type}</div>
      <textarea
        className="text-area"
        name="text"
        id=""
        cols={props.cols}
        rows={props.rows}
        placeholder="Enter Text Here"
      ></textarea>
    </div>
  );
}

export default SubThread;
