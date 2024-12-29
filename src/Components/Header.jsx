import React from "react";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import profile from "../assets/profile.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Header() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://deepthought.education/assets/images/logo/logo.svg"
          alt="logo"
          className="deep-thoughts-logo"
        />
      </div>
      <div className="nav-items">
        <img src={icon3} alt="Item 1" />
        <img src={icon2} alt="Item 2" />
        <img src={icon3} alt="Item 3" />
        <img src={profile} alt="Item 4" className="profile-pic-logo" />
        <MoreVertIcon className="icon" />
        {/* <img src="item4.png" alt="Item 4"/> */}
        {/* <img src="item5.png" alt="Item 5"/> */}
      </div>
    </nav>
  );
}

export default Header;
