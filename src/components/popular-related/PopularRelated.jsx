import React from "react";
import styles from "./PopularRelated.module.css";

export default function PopularRelated() {
  return (
    <div className={styles.popular_related_container}>
      <div className={styles.popular_news_container}>
        <h3 className={styles.popular_news_text}>Berita Terpopular</h3>
        <div className={styles.popular_news_link_container}>
          <div className={styles.popular_news}>
            <div className={styles.popular_news_title_container}>
              <h4 className={styles.popular_news_number}>#1</h4>
              <h4 className={styles.popular_news_title}>
                Program Beasiswa Kabupaten Luwu Timur Tahun 2022
              </h4>
            </div>
            <div className={styles.popular_news_readed}>
              <h5 className={styles.readed_times}>Dibaca 18.899 kali</h5>
            </div>
          </div>
          <div className={styles.popular_news}>
            <div className={styles.popular_news_title_container}>
              <h4 className={styles.popular_news_number}>#2</h4>
              <h4 className={styles.popular_news_title}>
              Pengumuman Penerima Beasiswa Pendataan 2021 Kabupaten Luwu Timur
              </h4>
            </div>
            <div className={styles.popular_news_readed}>
              <h5 className={styles.readed_times}>Dibaca 18.800 kali</h5>
            </div>
          </div>
          <div className={styles.popular_news}>
            <div className={styles.popular_news_title_container}>
              <h4 className={styles.popular_news_number}>#3</h4>
              <h4 className={styles.popular_news_title}>
              Pengumuman Daftar Penerima Beasiswa Berprestasi dan Kurang Mampu Pemerintah Kabupaten Luwu Timur Lanjutan Tahun 2020
              </h4>
            </div>
            <div className={styles.popular_news_readed}>
              <h5 className={styles.readed_times}>Dibaca 18.500 kali</h5>
            </div>
          </div>
          <div className={styles.popular_news}>
            <div className={styles.popular_news_title_container}>
              <h4 className={styles.popular_news_number}>#4</h4>
              <h4 className={styles.popular_news_title}>
              Pengumuman Bantuan Pendidikan Kabupaten Luwu Timur Tahun 2020
              </h4>
            </div>
            <div className={styles.popular_news_readed}>
              <h5 className={styles.readed_times}>Dibaca 18.400 kali</h5>
            </div>
          </div>
          <div className={styles.popular_news}>
            <div className={styles.popular_news_title_container}>
              <h4 className={styles.popular_news_number}>#5</h4>
              <h4 className={styles.popular_news_title}>
              Tingkatkan Minat Baca Masyarakat, Dinas Perpustakaan Lutim Gelar Perpuskel
              </h4>
            </div>
            <div className={styles.popular_news_readed}>
              <h5 className={styles.readed_times}>Dibaca 18.000 kali</h5>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.popular_related_line} />
      <div className={styles.related_link_container}>
        <h3 className={styles.related_link_text}>Link Terkait</h3>
        <div className={styles.link_container}>
          <div className={styles.link}>
            <h4 className={styles.hashtag_text}>#</h4>
            <h4 className={styles.link_text}>Sulsel</h4>
          </div>
          <div className={styles.link}>
            <h4 className={styles.hashtag_text}>#</h4>
            <h4 className={styles.link_text}>Luwu Timur</h4>
          </div>
          <div className={styles.link}>
            <h4 className={styles.hashtag_text}>#</h4>
            <h4 className={styles.link_text}>Wartalutim</h4>
          </div>
          <div className={styles.link}>
            <h4 className={styles.hashtag_text}>#</h4>
            <h4 className={styles.link_text}>Website PPID</h4>
          </div>
          <div className={styles.link}>
            <h4 className={styles.hashtag_text}>#</h4>
            <h4 className={styles.link_text}>Baruga</h4>
          </div>
          <div className={styles.link}>
            <h4 className={styles.hashtag_text}>#</h4>
            <h4 className={styles.link_text}>Lapor</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
