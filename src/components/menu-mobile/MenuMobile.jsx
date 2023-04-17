import React from "react";
import logo from "../../assets/images/logo.png";
import { BiSearch } from "react-icons/bi";
import styles from "./MenuMobile.module.css";

export default function MenuMobile() {
  return (
    <div className={styles.menu_mobile_container}>
      <img className={styles.logo} src={logo} alt="wartalutim-logo" />
      <div className={styles.menu_container}>
        <hr className={styles.menu_rule} />
        <div className={styles.search_bar_container}>
          <div className={styles.search_bar}>
            <BiSearch size={"20px"} color={"var(--purple)"} />
          </div>
          <button className={styles.search_btn}>Cari</button>
          <button className={styles.add_menu_btn}>Tambahkan Menu</button>
        </div>
        <div className={styles.menu_details}>
          <div className={styles.news_menu}>
            <h3 className={styles.news_text}>berita</h3>
            <div className={styles.news_details}>
              <p className={styles.news_desc}>beranda</p>
              <p className={styles.news_desc}>tentang kami</p>
              <p className={styles.news_desc}>ekonomi</p>
              <p className={styles.news_desc}>pendidikan</p>
              <p className={styles.news_desc}>pariwisata</p>
              <p className={styles.news_desc}>kesehatan</p>
              <p className={styles.news_desc}>pemerintahan</p>
              <p className={styles.news_desc}>infografis</p>
            </div>
          </div>
          <div className={styles.district_menu}>
            <h3 className={styles.district_text}>kecamatan</h3>
            <div className={styles.district_details}>
              <p className={styles.district_desc}>tomoni timur</p>
              <p className={styles.district_desc}>wotu</p>
              <p className={styles.district_desc}>towuti</p>
              <p className={styles.district_desc}>nuha</p>
              <p className={styles.district_desc}>wasuponda</p>
              <p className={styles.district_desc}>malili</p>
              <p className={styles.district_desc}>angkona</p>
              <p className={styles.district_desc}>tomoni</p>
              <p className={styles.district_desc}>mangkutana</p>
              <p className={styles.district_desc}>kalaena</p>
              <p className={styles.district_desc}>burau</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
