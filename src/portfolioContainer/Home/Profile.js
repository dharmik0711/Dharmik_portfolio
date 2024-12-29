import React from "react";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
           
            <a href="https://www.instagram.com/dharmikptl07/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fedit%2F%3F__coig_login%3D1">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/dharmik-patel-0ba035275/">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter-square"></i>
            </a>
            <a href="https://github.com/dharmik0711">
              <i className="fa fa-github-square"></i>
            </a>
            </div>            <div className="profile-details-name">
                <span className="primmart-text">
                    {" "}
                    Hello , I am <span className="highlighted-text">Dharmik</span>
                </span>
            
          </div>
        </div>
      </div>
    </div>
  );
}
