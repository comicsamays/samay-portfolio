import React from 'react'
import Proptypes from "prop-types"
import avatarImage from "../assets/avatar-image.png"
import "../styles/avatar.css"

const Avatar = ({ page}) => {
    const avatarClass = `avatar ${page}`;
    const spanClass = `shadow-overlay ${page}`;

    return (
        <>
        <span className ={spanClass}></span>
        <img src={avatarImage} className={avatarClass} alt="avatar"/>
        </>
    );
};

Avatar.propTypes = {
    page: Proptypes.string.isRequired,
};

export default Avatar
