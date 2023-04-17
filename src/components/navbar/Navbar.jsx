import React from "react";
import { Link } from "react-router-dom";
import wartalutim_logo from "../../assets/images/logo.png";
import { BiSearch } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import "@fontsource/montserrat";
import styles from "./Navbar.module.css";

export default function navbar() {
  return (
    <nav className={styles.navbar_container}>
      <div className={styles.mobile_menu}>
        <div className={styles.nav_search_logo}>
          <FiMenu className={styles.mobile_menu_icon} />
          <div className={styles.nav_left}>
            <Link to="/">
              <img
                className={styles.wartalutim_logo}
                src={wartalutim_logo}
                alt="Wartalutim-logo"
              />
            </Link>
            <hr className={styles.vert_rule} />
            <div className={styles.nav_menu}>
              <ul className={styles.nav_list}>
                <li className={styles.nav_item}>
                  <Link to="/">Beranda</Link>
                </li>
                <li className={styles.nav_item}>
                  <Link to="/about">Tentang Kami</Link>
                </li>
                <li className={styles.nav_item}>
                  <a href="#footer">Hubungi Kami</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.search_bar_container}>
            <div className={styles.search_bar}>
              <BiSearch size={"20px"} color={"var(--purple)"} />
            </div>
            <button className={styles.search_btn}>Cari</button>
            <button className={styles.add_menu_btn}>Tambahkan Menu</button>
          </div>
        </div>
      </div>
      <hr className={styles.horiz_rule} />
      <nav className={styles.navbar_menu_container}>
        <div className={styles.menu}>
          <ul className={styles.menu_list}>
            <li className={styles.menu_item}>Ekonomi</li>
            <li className={styles.menu_item}>Pendidikan</li>
            <li className={styles.menu_item}>Pariwisata</li>
            <li className={styles.menu_item}>Kesehatan</li>
            <li className={styles.menu_item}>Pemerintahan</li>
            <li className={styles.menu_item}>Infografis</li>
            <div className={styles.dropdown_menu}>
              <li className={styles.menu_item}>Kecamatan</li>
              <AiOutlineDown size={"15px"} color={"var(--purple)"} />
            </div>
          </ul>
        </div>
        <hr className={styles.menu_line} />
      </nav>
    </nav>
  );
}
