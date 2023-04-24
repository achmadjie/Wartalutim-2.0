import React from "react";
import headlines_img_1 from "../../assets/images/new_headlines1.jpg";
import headlines_img_2 from "../../assets/images/new_headlines2.jpg";
import headlines_img_3 from "../../assets/images/new_headlines3.jpg";
import headlines_img_4 from "../../assets/images/new_headlines4.jpg";
import headlines_img_5 from "../../assets/images/new_headlines5.jpg";
import styles from "./Headlines.module.css";
import { Link } from "react-router-dom";

export default function Headlines() {
  return (
    <div className={styles.headlines_container}>
      <Link to={"/News1"}>
      <div className={styles.headlines_single}>
      
        <img
          className={styles.headlines_img_single}
          src={headlines_img_1}
          alt="headlines-img-1"
        />
        <p className={styles.headlines_title_single}>
          Kolaborasi Save The Children, Dinsos P3A Lutim Gelar Kick Off Grow Her
          Kakao
        </p>
        <p className={styles.headlines_desc_single}>
          Dalam rangka meningkatkan pemenuhan hak perempuan dan anak untuk
          mempercepat akses sumberdaya dan pelatihan bagi petani dan pengusaha,
          maka Dinas Sosial Pemberdayaan
        </p>
        <div className={styles.headlines_type_container}>
          <hr className={styles.headlines_rule} />
          <p className={styles.headlines_type_text}>Pariwisata</p>
        </div>
      </div>
      </Link>
      <div className={styles.headlines_double_container}>
        <Link to={"/News2"}>
          <div className={styles.headlines_double}>
            <img
              className={styles.headlines_img_double}
              src={headlines_img_2}
              alt="headlines-img-2"
            />
            <p className={styles.headlines_title_double}>
              Bupati Budiman Launching “Lemari Berkah” Baznas Kabupaten Luwu
              Timur
            </p>
            <p className={styles.headlines_desc_double}>
              Bupati Luwu Timur, H. Budiman melaunching “Lemari Berkah” Badan
              Amil Zakat Nasional (Baznas) Kabupaten Luwu Timur yang ditandai
              dengan penyerahan secara simbolis
            </p>
            <div className={styles.headlines_type_container}>
              <hr className={styles.headlines_rule} />
              <p className={styles.headlines_type_text_double}>Pemerintahan</p>
            </div>
          </div>
        </Link>
        <Link to={"/News3"}>
        <div className={styles.headlines_double}>
          <img
            className={styles.headlines_img_double}
            src={headlines_img_3}
            alt="headlines-img-3"
          />
          <p className={styles.headlines_title_double}>
            Pengawasan di Pasar Malili dan Lakawali, Tim Terpadu Temukan
            Makanan, Kosmetik Kadaluwarsa dan Ikan Tidak Segar
          </p>
          <p className={styles.headlines_desc_double}>
            Kecamatan Malili menjadi lokus terakhir Tim terpadu pengawasan obat
            dan makanan Kabupaten Luwu Timur. Pengawasan dipimpin langsung oleh
            Plt. Kepala Dinas Kesehatan
          </p>
          <div className={styles.headlines_type_container}>
            <hr className={styles.headlines_rule} />
            <p className={styles.headlines_type_text_double}>Ekonomi</p>
          </div>
        </div>
        </Link>
      </div>
      <div className={styles.headlines_double_container}>
      <Link to={"/News4"}>
        <div className={styles.headlines_double}>
          <img
            className={styles.headlines_img_double}
            src={headlines_img_4}
            alt="headlines-img-4"
          />
          <p className={styles.headlines_title_double}>
            Budiman Serahkan Bantuan 10 Ton Pupuk NPK Kepada Lima Kelompok Tani
            di Tiga Kecamatan
          </p>
          <p className={styles.headlines_desc_double}>
            Bupati Luwu Timur, H. Budiman didampingi Kepala Dinas Pertanian,
            Amrullah Rasyid serta Camat Wotu, Iskandar Muda, menyerahkan 10 Ton
            atau senilai 139.800.000
          </p>
          <div className={styles.headlines_type_container}>
            <hr className={styles.headlines_rule} />
            <p className={styles.headlines_type_text_double}>Pendidikan</p>
          </div>
        </div>
        </Link>
        <Link to={"/News5"}>
        <div className={styles.headlines_double}>
          <img
            className={styles.headlines_img_double}
            src={headlines_img_5}
            alt="headlines-img-5"
          />
          <p className={styles.headlines_title_double}>
            Pengawasan di Pasar Wowondula, Tim Terpadu Temukan Pangan Kemasan
            Tanpa BPOM
          </p>
          <p className={styles.headlines_desc_double}>
            Menjelang Hari raya idul Fitri semakin dekat. Tim terpadu pengawasan
            obat dan makanan semakin gencar melakukan pengawasan hari ke sepuluh
            di pasar
          </p>
          <div className={styles.headlines_type_container}>
            <hr className={styles.headlines_rule} />
            <p className={styles.headlines_type_text_double}>Kesehatan</p>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}
