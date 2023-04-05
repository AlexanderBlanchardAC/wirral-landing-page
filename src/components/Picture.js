import React from 'react';
import "./picture.css";

const Picture = ({ imageSrc}) => {
  return (
    <div className="picture">
      <img src={imageSrc} alt="wirral" className="wirralPictureImage"/>
      <h1 className="wirralPictureTitle">Welcome to The Wirral</h1>
    </div>
  )
}

export default Picture;
