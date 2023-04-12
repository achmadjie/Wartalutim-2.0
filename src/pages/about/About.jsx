import React from "react";
import logo_about from "../../assets/images/logo_about.png"
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.about_container}>
      <img className={styles.about_logo} src={logo_about} alt="about-logo" />
      <div className={styles.about_desc_container}>
        <h3 className={styles.about_text}>Tentang Kami</h3>
        <p className={styles.about_desc_text}>
          Warta Lutim hadir sebagai media online yang bertujuan untuk memberikan
          informasi yang akurat, terpercaya, dan bermanfaat bagi masyarakat
          kabupaten Luwu Timur dan wilayah sekitarnya. Dalam menjalankan
          misinya, Warta Lutim senantiasa mengutamakan prinsip keberagaman dan
          etika jurnalistik yang tinggi, sehingga dapat memberikan manfaat yang
          sebesar-besarnya bagi pembaca.
        </p>
      </div>
    </div>
  );
}
