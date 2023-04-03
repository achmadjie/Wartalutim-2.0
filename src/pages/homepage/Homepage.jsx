import React from "react";
import WelcomeDate from "../../components/welcome-date/WelcomeDate";
import Headlines from "../../components/headlines/Headlines";
import PopularRelated from "../../components/popular-related/PopularRelated";
import LatestNews from "../../components/latest-news/LatestNews";
import Posters from "../../components/posters/Posters";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <div className={styles.homepage_container}>
      <WelcomeDate />
      <div className={styles.headlines_popular_container}>
        <Headlines />
        <PopularRelated />
      </div>
      <hr className={styles.homepage_line}/>
      <div className={styles.latest_news_posters}>
        <LatestNews />
        <Posters />
      </div>
    </div>
  );
}
