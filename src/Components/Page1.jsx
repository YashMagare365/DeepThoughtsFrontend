import React from "react";
import CollapsibleCard from "./CollapsibleCard";
import data from "../assets/data.json";
import Tasks from "./Tasks";
import DownButtons from "./DownButtons";

function Page1() {
  return (
    <div className="page-container">
      <CollapsibleCard />
      <div className="div2">
        {/* heading code */}
        <div className="task-title-heading">
          <h1>{data.title}</h1>
          <button className="task-submit-button">Submit Now</button>
        </div>
        {/* code below */}
        <div className="tasks-container">
          {data.tasks.map((item) => {
            return <Tasks key={item.task_id} item={item} />;
          })}
        </div>
      </div>
      <DownButtons />
    </div>
  );
}

export default Page1;
