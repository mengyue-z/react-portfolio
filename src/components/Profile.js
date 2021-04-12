import React from "react";
import "../App.css";
import avatar from "../images/aboutme.jpeg"
import {Image} from "react-bootstrap"

function Profile() {
  return (
    <div className="col-lg-3 col-md-4 photo">
    <Image src={avatar} alt="My Photo" thumbnail fluid className = "avatar" />
</div>
  );
}

export default Profile;