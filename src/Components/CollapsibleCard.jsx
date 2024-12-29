import React, { useState } from "react";
import "../css/CollapsibleCard.css";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import data from "../assets/data.json";

const CollapsibleCard = () => {
  const [collapsed, setCollapsed] = useState(true);
  const assets = data.tasks[0].assets;

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`collapsible-card ${collapsed ? "collapsed" : "expanded"}`}>
      <div className="card-header">
        {collapsed ? (
          <div></div>
        ) : (
          <p
            style={{
              color: "white",
              textAlign: "center",
              alignItems: "center",
              margin: "1%",
              fontSize: "1rem",
            }}
            className="colapsible-card-heading"
          >
            Journey Board
          </p>
        )}
        {collapsed ? (
          <ArrowRightOutlined className="arrow-icon" onClick={toggleCollapse} />
        ) : (
          <ArrowLeftOutlined className="arrow-icon" onClick={toggleCollapse} />
        )}
      </div>
      {collapsed ? (
        <div className="collapsed-card-content">
          <p className="collapsed-content">1</p>
        </div>
      ) : (
        <div className="card-content">
          {data.tasks.map((value) => (
            <div key={value.task_id}>
              <li className="li-item">
                <b>{value.task_title}</b>
              </li>
              <ul className="ul-list">
                {value.assets.map((subValue) => (
                  <li key={subValue.asset_id}>{subValue.asset_title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollapsibleCard;
