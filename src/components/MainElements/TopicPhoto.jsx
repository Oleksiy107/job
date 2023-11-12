import React from "react";
import PhotoBack from "../../../static/g.jpeg";
function TopicPhoto() {
  return (
    <div
      className="photoBlock"
      style={{
        backgroundImage: `url(${PhotoBack})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="photoBlock__blockTopic">
        <h2 className="photoBlock__title">Тема:</h2>
        <p className="photoBlock__text">Короткий опис:</p>
      </div>
    </div>
  );
}
//333333
export default TopicPhoto;
