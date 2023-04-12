import React from "react";
import WelcomeDate from "../../components/welcome-date/WelcomeDate";
import Headlines from "../../components/headlines/Headlines";
import PopularRelated from "../../components/popular-related/PopularRelated";
import LatestNews from "../../components/latest-news/LatestNews";
import Posters from "../../components/posters/Posters";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <div className={styles.homepage_container}>
      {/* <Navbar /> */}
      <WelcomeDate />
      <div className={styles.headlines_popular_container}>
        <Headlines />
        <PopularRelated />
      </div>
      <div className={styles.headlines_container_mobile}>
        <Headlines />
      </div>
      <hr className={styles.homepage_line_mobile} />
      <div className={styles.latest_news_container_mobile}>
        <LatestNews />
      </div>
      <hr className={styles.homepage_line_mobile} />
      <div className={styles.popular_related_container_mobile}>
        <PopularRelated />
      </div>
      <div className={styles.posters_mobile}>
        <Posters />
      </div>
      <hr className={styles.homepage_line} />
      <div className={styles.latest_news_posters}>
        <LatestNews />
        <Posters />
      </div>
      <div className={styles.homepage_container}></div>
      {/* <Footer /> */}
    </div>
  );
}
