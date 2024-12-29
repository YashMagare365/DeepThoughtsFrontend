import React from "react";
import { QuestionOutlined } from "@ant-design/icons";
import meeting from "../assets/meeting.png";
import schedule from "../assets/schedule.png";

function DownButtons() {
  return (
    <div className="downimage">
      <QuestionOutlined
        style={{
          borderRadius: "100%",
          backgroundColor: "#0029ff",
          color: "white",
          padding: 10,
          justifyContent: "center",
          alignContent: "center",
        }}
      />
      <img src={meeting} alt="img" style={{ padding: 10 }} />
      <img src={schedule} alt="img" style={{ padding: 10 }} />
    </div>
  );
}

export default DownButtons;
