import React from "react";
import { MdDescription } from "react-icons/md";
import { GiStairsGoal, GiEyeTarget, GiCutDiamond } from "react-icons/gi";
// import {  } from "react-icons/";
// import {  } from "react-icons/";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_text_container}>
        <h1 className={styles.about_text}>tentang kami</h1>
        <hr className={styles.about_text_line} />
      </div>
      <div className={styles.about_part_container}>
        <div className={styles.about_part_double}>
          <div className={styles.about_part}>
            <MdDescription className={styles.about_part_icon} />
            <h3 className={styles.about_part_title}>Deskripsi</h3>
            <p className={styles.about_part_desc}>
              Wartalutim adalah sebuah website yang dikembangkan oleh Diskominfo
              Kabupaten Luwu Timur yang menyediakan berita dan informasi terkini
              seputar kabupaten Luwu Timur. Melalui website ini, pengunjung
              dapat membaca berita-berita terbaru dari berbagai bidang seperti
              politik, ekonomi, sosial, budaya, hingga olahraga.
            </p>
          </div>
          <div className={styles.about_part}>
            <GiStairsGoal className={styles.about_part_icon} />
            <h3 className={styles.about_part_title}>Tujuan</h3>
            <p className={styles.about_part_desc}>
              Tujuannya adalah untuk memberikan informasi yang akurat,
              terpercaya, dan berimbang tentang berbagai isu yang terjadi di
              Luwu Timur dan sekitarnya. Dengan demikian, Warta Luwu Timur
              bertujuan untuk menjadi media yang dapat diandalkan oleh
              masyarakat sebagai sumber informasi yang berkualitas dan dapat
              dipercaya.
            </p>
          </div>
        </div>
        <div className={styles.about_part_double}>
          <div className={styles.about_part}>
            <GiEyeTarget className={styles.about_part_icon} />
            <h3 className={styles.about_part_title}>Visi-Misi</h3>
            <p className={styles.about_part_desc}>
              Visi dari website ini adalah menjadi sumber informasi terpercaya
              dan terdepan di kabupaten Luwu Timur, sementara misinya adalah
              memberikan pelayanan informasi yang cepat, akurat, dan berimbang
              kepada masyarakat Luwu Timur.
            </p>
          </div>
          <div className={styles.about_part}>
            <GiCutDiamond className={styles.about_part_icon} />
            <h3 className={styles.about_part_title}>Nilai-Nilai</h3>
            <p className={styles.about_part_desc}>
              Nilai-nilai yang dijunjung tinggi oleh Warta Luwu Timur adalah
              profesionalisme, integritas, dan keberpihakan pada kebenaran.
              Warta Luwu Timur berkomitmen untuk menyajikan informasi yang
              akurat, jujur, dan berimbang kepada masyarakat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
