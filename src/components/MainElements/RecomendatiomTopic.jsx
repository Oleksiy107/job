import React from "react";
import photo from "../../../static/fe.jpg";

function RecommendationTopic() {
  return (
    <div className="recommendation-container">
      <div className="recommendation-article page-link">
        <img src={photo} alt="photo" />
        <a href="#" className="page-link__link">
          <h2 className="page-link__title">Тема 1</h2>
          <p className="page-link-description">Опис</p>
        </a>
      </div>
      <div className="recommendation-page-link page-link">
        <img src={photo} alt="photo" />
        <a href="#" className="page-link__link">
          <h2 className="page-link__title">Тема 2</h2>
          <p className="page-link-description">Опис</p>
        </a>
      </div>
      <div className="recommendation-page-link page-link">
        <img src={photo} alt="photo" />
        <a href="#" className="page-link__link">
          <h2 className="page-link-title">Тема 3</h2>
          <p className="page-link-description">Опис</p>
        </a>
      </div>
    </div>
  );
}

export default RecommendationTopic;
