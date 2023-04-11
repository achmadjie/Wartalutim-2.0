import React from "react";
import { BiMapPin } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { AiFillHome, AiFillInstagram } from "react-icons/ai";
import { BsTelephoneFill, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_data_container}>
        <div className={styles.contact_us_container}>
          <h4 className={styles.contact_us_title}>Kontak Kami</h4>
          <div className={styles.contact_us_details_container}>
            <div className={styles.data_details}>
              <HiLocationMarker className={styles.contact_us_logo} />
              <Link to="https://goo.gl/maps/ZGpSMRZta7x66kcT8">
                <p className={styles.email_address_text}>
                  Jl. Soekarno-Hatta Puncak Indah, Malili, Kab. Luwu Timur, Prov. Sulawesi Selatan
                </p>
              </Link>
            </div>
            <div className={styles.contact_us_details_container}>
              <div className={styles.data_details}>
                <BiMapPin className={styles.contact_us_logo} />
                <p className={styles.zip_phone_text}>92981</p>
              </div>
            </div>
            <div className={styles.contact_us_details_container}>
              <div className={styles.data_details}>
                <BsTelephoneFill className={styles.contact_us_logo} />
                <p className={styles.zip_phone_text}>0474-321337</p>
              </div>
            </div>
            <div className={styles.contact_us_details_container}>
              <div className={styles.data_details}>
                <MdEmail className={styles.contact_us_logo} />
                <p className={styles.email_address_text}>
                  kominfo@luwutimurkab
                  .go.id
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contact_us_container}>
          <h4 className={styles.contact_us_title}>Menu</h4>
          <div className={styles.contact_us_details_container}>
            <div className={styles.data_details}>
              <AiFillHome className={styles.contact_us_logo} />
              <Link to="/home">
                <p className={styles.menu_list}>Beranda</p>
              </Link>
            </div>
            <div className={styles.contact_us_details_container}>
              <div className={styles.data_details}>
                <FcAbout className={styles.contact_us_logo} />
                <Link to="/about">
                  <p className={styles.menu_list}>Tentang Kami</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contact_us_container}>
          <h4 className={styles.contact_us_title}>Ikuti Kami</h4>
          <div className={styles.contact_us_details_container}>
            <div className={styles.data_details}>
              <FaFacebookF className={styles.contact_us_logo} />
              <Link to="https://www.facebook.com/diskominfolutim">
                <p className={styles.email_address_text}>
                  Dinas Kominfo SP Luwu Timur
                </p>
              </Link>
            </div>
            <div className={styles.contact_us_details_container}>
              <div className={styles.data_details}>
                <AiFillInstagram className={styles.contact_us_logo} />
                <Link to="https://www.instagram.com/dinas_kominfo_sp_luwu_timur/">
                  <p className={styles.email_address_text}>
                    dinas_kominfo_sp_
                    luwu_timur
                  </p>
                </Link>
              </div>
            </div>
            <div className={styles.contact_us_details_container}>
              <div className={styles.data_details}>
                <BsTwitter className={styles.contact_us_logo} />
                <Link to="https://twitter.com/diskominfolutim">
                  <p className={styles.menu_list}>@diskominfolutim</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.footer_line} />
      <h6 className={styles.copyright_text}>Copyright. All rights reserved.</h6>
    </div>
  );
}
