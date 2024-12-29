import React from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import { DownOutlined } from "@ant-design/icons";
import SubThread from "./SubThread";
import bulb from "../assets/bulb.png";
import chat from "../assets/chat.png";
import flower from "../assets/flower.png";
import questionmsg from "../assets/questionmsg.png";
import FileEditor from "./FileEditor";
import Collapse from "./Collapse";

function AssetCard({ asset }) {
  console.log("ASSET==>", asset.asset_content);
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const renderCard = () => {
    switch (asset.asset_content_type) {
      case "video":
        return (
          <div className="asset-card video-card">
            <h3 className="asset-card-heading">{asset.asset_title}</h3>
            <p>
              <b>Description:</b>
              {asset.asset_description}
            </p>
            <iframe className="video-iframe" src={asset.asset_content}></iframe>
          </div>
        );

      case "article":
        if (asset.asset_type == "display_asset") {
          return (
            <div className="asset-card article-card">
              <h3 className="asset-card-heading">{asset.asset_title}</h3>
              <p>
                <b>Descrpition:</b>
                {asset.asset_description}
              </p>
              <div className="display-asset-content">
                <Collapse>
                  <Collapse.Panel header="Introduction">
                    <p>The 4SA Method , How to bring a idea into progress ?</p>
                  </Collapse.Panel>
                  <Collapse.Panel header="Panel 2">
                    <p>This is the content of Panel 2.</p>
                  </Collapse.Panel>
                  <Collapse.Panel header="Panel 3">
                    <p>This is the content of Panel 3.</p>
                  </Collapse.Panel>
                </Collapse>
              </div>
            </div>
          );
        } else if (asset.asset_type == "input_asset") {
          return (
            <div className="asset-card article-card">
              <h3 className="asset-card-heading">{asset.asset_title}</h3>
              <p>
                <b>Description:</b>
                {asset.asset_description}
              </p>
              <div className="input-article-card">
                <div className="sub-heading">
                  <b>Title</b>
                </div>
                <input type="text" className="title-input" />
                <div className="sub-heading">
                  <b>Content</b>
                </div>
                <div>
                  <FileEditor />
                </div>
              </div>
            </div>
          );
        }

      case "threadbuilder":
        return (
          <div className="asset-card threadbuilder-card">
            <h3 className="asset-card-heading">{asset.asset_title}</h3>
            <p>
              <b>Description:</b>
              {asset.asset_description}
            </p>
            <div className="threadbuild-container">
              <div className="threadbuild-heading">
                <DownOutlined />
                <div>Thread A</div>
              </div>
              <div className="threadbuild-content">
                <SubThread type={"Sub Thread 1"} cols={"25"} rows={"5"} />
                <SubThread
                  type={"Sub Interpretation 1"}
                  cols={"25"}
                  rows={"5"}
                />
              </div>
              <div className="threadbuild-options">
                <img src={bulb} alt="img" />
                <img src={chat} alt="img" />
                <img src={questionmsg} alt="img" />
                <img src={flower} alt="img" />
                <select name="Select Categ">
                  <optgroup label="Select Categ">
                    <option value="volvo">Select Categ</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </optgroup>
                </select>
                <select name="Select Process">
                  <optgroup label="Select Process">
                    <option value="volvo">Select Process</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </optgroup>
                </select>
              </div>
              <div>
                <button className="add-sub-thread">+ Sub Thread</button>
              </div>
              <SubThread type={"Summary for Thread A"} cols={"55"} rows={"5"} />
            </div>
          </div>
        );

      default:
        return (
          <div className="asset-card default-card">
            <h2>{asset.asset_title}</h2>
            <p>Unknown Content Type</p>
          </div>
        );
    }
  };

  return <>{renderCard()}</>;
}

export default AssetCard;
