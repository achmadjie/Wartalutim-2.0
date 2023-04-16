import React from "react";
import news_image from "../../assets/images/news_image_1.jpg";
import styles from "./News.module.css";

export default function News() {
  return (
    <div className={styles.news_container}>
      <div className={styles.news_title_author_container}>
        <h1 className={styles.news_title}>
          Bupati Budiman Minta Jangan Ada Masalah Dalam Penyaluran Bantuan
          Sosial
        </h1>
        <div className={styles.author_container}>
          <p className={styles.author_dash_name}>Admin Wartalutim</p>
          <p className={styles.author_dash_name}>-</p>
          <p className={styles.web_name}>Wartalutim</p>
        </div>
        <p className={styles.date_time_text}>13/03/2023, 18:51 WITA</p>
      </div>
      <img
        className={styles.news_images}
        src={news_image}
        alt="news-images-1"
      />
      <p className={styles.news_desc}>
        <span className={styles.regency_name}>Luwu Timur -</span>{" "}
        <span className={styles.first_word}>Bupati Luwu Timur, H. Budiman</span>{" "}
        meminta jangan ada masalah dalam menyalurkan bantuan sosial ke
        masyarakat. Permintaan tersebut ia sampaikan saat melaunching sekaligus
        menyerahkan bantuan pangan tahun 2023, di Gudang Bulog Mangkutana, Sabtu
        (15/04/2023).<br /><br /> Turut hadir pada kesempatan ini, Perwakilan DPRD Lutim,
        Perwira Penghubung, Mayor CBA. Bachtiar, Kepala Dinas Pertanian dan
        Ketahanan Pangan, Amrullah Rasyid, Kepala Dinas Sosial P3A, Sukarti,
        Camat Tomoni dan Mangkutana, Kepala Desa, Asisten Manajer Bulog Palopo,
        Acul Permadi, Koordinator Pendamping Keluarga Lutim dan masyarakat.<br /><br />
        Budiman menyampaikan bahwa, hari ini merupakan wujud transparansi kepada
        masyarakat bahwa ada program yang besar tentang katahanan pangan yang
        dilakukan oleh negara.<br /><br /> “Kita sampaikan disini karena banyak kegiatan
        yang seharusnya bisa di lihat oleh masyarakat bahwa ada manfaatnya akan
        tetapi kebanyakan hoax yang seolah-olah pemerintah Bulog tidak melakukan
        apa-apa,” jelas Budiman.<br /><br /> Lebih lanjut Bupati Lutim menyampaikan, Luwu
        Timur memiliki sumber daya alam yang baik, sehingga bantuan ini bisa
        menjadi suatu hal yang bermanfaat untuk masyarakat.<br /><br /> “Mari kita saling
        jaga karena Luwu Timur ini beragam agama, suku dan kita bersyukur bahwa
        itu menjadi kekuatan besar dalam rangka membangun Kabupaten Luwu Timur
        yang lebih maju dan berkelanjutan,” ucap Budiman.<br /><br /> Oleh karena itu,
        Bupati Lutim mengucapkan terima kasih kepada Bulog Palopo dan semua yang
        telah terlibat didalam menjaga stok pangan di Luwu Timur.<br /><br /> “Sekali lagi
        saya ucapkan terima kasih, semoga bantuan ini bisa bermanfaat dan
        mudah-mudahan penyaluran bantuan pangan bisa selesai sebelum masuk waktu
        lebaran,” harap Budiman.<br /><br /> Sementara Asisten Manajer Bulog Palopo, Acul
        Permadi menyampaikan, penyaluran pangan tahun 2023 khusus Kabupaten Luwu
        Timur berjumlah 20.612 Penerima Bantuan Pangan (PBP) dan untuk alokasi
        penerimaan di Lutim selama 3 bulan diantaranya, bulan Maret, April dan
        Mei.<br /><br /> “Untuk penyaluran pertama, alokasi Maret kamisalurkan di April
        sebanyak 206 ton 120 kilo perbulan. Sedangkan untuk pertiga bulan
        sebanyak 618.360 kilo. Untuk penyalurannya kami menggunakan pihak ketiga
        yaitu transporter yang langsung dibagikan ke desa-desa,” jelas Acul
        Permadi.<br /><br /> “Alhamdulillah, stok di Luwu Timur cukup untuk sampai
        penyaluran 3 bulan ini, cuman tahap awal kami salurkan alokasi Maret.
        Dan Insha Allah kami akan upayakan bisa sampai sebelum lebaran,”
        pungkasnya. (dew/ikp-humas/kominfo-sp)
      </p>
    </div>
  );
}
