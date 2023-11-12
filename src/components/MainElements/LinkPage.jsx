import React from "react";
import photo from "../../../static/fe.jpg";
function TopicDetail() {
  return (
    <div className="blockLinkPage">
      <div className="blockLinkPage__pageLink page-link">
        <img src={photo} alt="photo" className="page-link__img" />
        <a href="#" className="page-link__link">
          <h2 className="page-link__title">Сторінка 1</h2>
          <p className="page-link__text">Опис</p>
        </a>
      </div>
      <div className="blockLinkPage__pageLink page-link">
        <img src={photo} alt="photo" className="page-link__img" />
        <a href="#" className="page-link__link">
          <h2 className="page-link__title">Сторінка 2</h2>
          <p className="page-link__text">Опис</p>
        </a>
      </div>
      <div className="blockLinkPage__pageLink page-link">
        <img src={photo} alt="photo" className="page-link__img" />
        <a href="#" className="page-link__link">
          <h2 className="page-link__title">Сторінка 3</h2>
          <p className="page-link__text">Опис</p>
        </a>
      </div>
    </div>
  );
}
//333333
export default TopicDetail;
