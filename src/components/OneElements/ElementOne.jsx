import React from "react";
// import { HashLink } from "react-router-hash-link";
function One() {
  return (
    <div className="blockWrap">
      <div className="blockWrap__topic-block1 topic-block1">
        <h2 className="topic-block1__title" id="section1">
          Тема 1
        </h2>
        <p className="topic-block1__text">Lorem ipsum dolor, sit amet ct...</p>
      </div>
      <div className="blockWrap__topic-block1 topic-block1">
        <h2 className="topic-block1__title" id="section2">
          Тема 2
        </h2>
        <p className="topic-block1__text">Lorem ipsum</p>
      </div>
      <div className="blockWrap__topic-block1 topic-block1">
        <h2 className="topic-block1__title" id="section3">
          Тема 3
        </h2>
        <p className="topic-block1__text">Lorem t...</p>
      </div>
    </div>
  );
}
export default One;
