import React from "react";
import headlines_img_1 from "../../assets/images/headlines1.png";
import headlines_img_2 from "../../assets/images/headlines2.png";
import headlines_img_3 from "../../assets/images/headlines3.png";
import styles from "./Headlines.module.css";
import { Link } from "react-router-dom";

export default function Headlines() {
  return (
    <div className={styles.headlines_container}>
      <div className={styles.headlines_single}>
        <img
          className={styles.headlines_img_single}
          src={headlines_img_1}
          alt="headlines-img-1"
        />
        <p className={styles.headlines_title_single}>
          Pemkab Lutim Gelar Pertemuan Koordinasi Pelayanan Kesehatan Anak Usia
          Sekolah
        </p>
        <p className={styles.headlines_desc_single}>
          Pemerintah Kabupaten Luwu Timur melalui Dinas Kesehatan menggelar
          Pertemuan Koordinasi Pelayanan Kesehatan Anak Usia Sekolah Lintas
          Sektor di Masa Pandemi tingkat Kabupaten
        </p>
        <div className={styles.headlines_type_container}>
          <hr className={styles.headlines_rule} />
          <p className={styles.headlines_type_text}>Pariwisata</p>
        </div>
      </div>
      <div className={styles.headlines_double_container}>
        <Link to={"/News"}>
          <div className={styles.headlines_double}>
            <img
              className={styles.headlines_img_double}
              src={headlines_img_2}
              alt="headlines-img-2"
            />
            <p className={styles.headlines_title_double}>
              Bupati Budiman Resmikan Pondok Pesantren Nurhidayah Khaera Ummah
              Burau
            </p>
            <p className={styles.headlines_desc_double}>
              Bupati Luwu Timur, H. Budiman bersama Ketua TP PKK Luwu Timur, Hj.
              Sufryati Budiman, menghadiri Wisuda Kahofmil Qur'an dan Peresmian
              Pondok Pesantren
            </p>
            <div className={styles.headlines_type_container}>
              <hr className={styles.headlines_rule} />
              <p className={styles.headlines_type_text_double}>Pemerintahan</p>
            </div>
          </div>
        </Link>

        <div className={styles.headlines_double}>
          <img
            className={styles.headlines_img_double}
            src={headlines_img_3}
            alt="headlines-img-3"
          />
          <p className={styles.headlines_title_double}>
            Tingkatkan Produksi Perikanan dan Utamakan Keselamatan Nelayan
          </p>
          <p className={styles.headlines_desc_double}>
            Petaka di laut yang menimpa para nelayan Luwu Timur membuat
            pemerintah Kabupaten Luwu Timur memberikan perhatian khusus bagi
            keselamatan jiwa bagi nelayan.
          </p>
          <div className={styles.headlines_type_container}>
            <hr className={styles.headlines_rule} />
            <p className={styles.headlines_type_text_double}>Ekonomi</p>
          </div>
        </div>
      </div>
      <div className={styles.headlines_double_container}>
        <div className={styles.headlines_double}>
          <img
            className={styles.headlines_img_double}
            src={headlines_img_2}
            alt="headlines-img-2"
          />
          <p className={styles.headlines_title_double}>
            Bupati Budiman Resmikan Pondok Pesantren Nurhidayah Khaera Ummah
            Burau
          </p>
          <p className={styles.headlines_desc_double}>
            Bupati Luwu Timur, H. Budiman bersama Ketua TP PKK Luwu Timur, Hj.
            Sufryati Budiman, menghadiri Wisuda Kahofmil Qur'an dan Peresmian
            Pondok Pesantren
          </p>
          <div className={styles.headlines_type_container}>
            <hr className={styles.headlines_rule} />
            <p className={styles.headlines_type_text_double}>Pendidikan</p>
          </div>
        </div>
        <div className={styles.headlines_double}>
          <img
            className={styles.headlines_img_double}
            src={headlines_img_3}
            alt="headlines-img-3"
          />
          <p className={styles.headlines_title_double}>
            Tingkatkan Produksi Perikanan dan Utamakan Keselamatan Nelayan
          </p>
          <p className={styles.headlines_desc_double}>
            Petaka di laut yang menimpa para nelayan Luwu Timur membuat
            pemerintah Kabupaten Luwu Timur memberikan perhatian khusus bagi
            keselamatan jiwa bagi nelayan.
          </p>
          <div className={styles.headlines_type_container}>
            <hr className={styles.headlines_rule} />
            <p className={styles.headlines_type_text_double}>Kesehatan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
