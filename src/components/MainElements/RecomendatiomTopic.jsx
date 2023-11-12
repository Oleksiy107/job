import React from "react";
import photo from "../../../static/fe.jpg";
import { HashLink } from "react-router-hash-link";

function RecommendationTopic() {
  return (
    <div className="recommendation-container2">
      <h2 className="recommendation-container2__title">
        Рекомендую до прочитання
      </h2>

      <div className="recommendation-container">
        <div className="recommendation-container__article-link article-link">
          <img src={photo} alt="photo" className="article-link__photo" />
          <HashLink smooth to="/one/#section1">
            <h2 className="article-link__title">Тема 1</h2>
            <p className="article-link__link">опис</p>
          </HashLink>
        </div>
        <div className="recommendation-container__article-link article-link">
          <img src={photo} alt="photo" className="article-link__photo" />
          <HashLink smooth to="/one/#section2">
            <h2 className="article-link__title">Тема 2</h2>
            <p className="article-link__link">опис</p>
          </HashLink>
        </div>
        <div className="recommendation-container__article-link article-link">
          <img src={photo} alt="photo" className="article-link__photo" />
          <HashLink smooth to="/one/#section3">
            <h2 className="article-link__title">Тема 3</h2>
            <p className="article-link__link">опис</p>
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default RecommendationTopic;
