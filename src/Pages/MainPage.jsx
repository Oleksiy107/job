import React from "react";
import Header from "../components/header/Header";
import TopicDetail from "../components/MainElements/TopicDetail.jsx";
import TopicPhoto from "../components/MainElements/TopicPhoto.jsx";
import LinkPage from "../components/MainElements/LinkPage.jsx";
import RecomendationTopic from "../components/MainElements/RecomendatiomTopic.jsx";
function MainPage() {
  return (
    <>
      <Header />
      <TopicPhoto />
      <TopicDetail />
      <LinkPage />
      <RecomendationTopic />
    </>
  );
}

export default MainPage;
