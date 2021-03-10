import React from "react";
import "./UserInfo.scss";

const UserInfo = () => {
    return <div className="userInfoContainer">

        <div className="imageCover">
            <img className="userImg" src={require("../../assets/icons/user.svg")} alt="" />
        </div>
    </div>
}

export default UserInfo;