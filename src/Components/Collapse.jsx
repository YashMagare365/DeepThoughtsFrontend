import React, { useState } from "react";
import "../css/Collapse.css";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const Collapse = ({ children }) => {
  return <div className="collapse-container">{children}</div>;
};

const Panel = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-panel">
      <div className="panel-header" onClick={togglePanel}>
        <span className="toggle-icon">
          {isOpen ? <UpOutlined /> : <DownOutlined />}
        </span>
        {header}
      </div>
      {isOpen && <div className="panel-content">{children}</div>}
    </div>
  );
};

Collapse.Panel = Panel;

export default Collapse;
