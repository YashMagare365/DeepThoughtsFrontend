import React from "react";
import AssetCard from "./AssetCard";

function Tasks({ item }) {
  console.log("ITEM==>", item);
  return (
    <>
      <div className="task-description">
        <h3>{item.task_title}</h3>
        <p>{item.task_description}</p>
      </div>
      <div className="assets">
        {item.assets.map((item) => {
          return <AssetCard key={item.asset_id} asset={item} />;
        })}
      </div>
    </>
  );
}

export default Tasks;
