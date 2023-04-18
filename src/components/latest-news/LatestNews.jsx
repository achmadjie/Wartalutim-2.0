import React from 'react'
import latestnewsimg1 from "../../assets/images/latestnews1.jpg";
import latestnewsimg2 from "../../assets/images/latestnews2.jpg";
import latestnewsimg3 from "../../assets/images/latestnews3.jpg";
import latestnewsimg4 from "../../assets/images/latestnews4.jpg";
import latestnewsimg5 from "../../assets/images/latestnews5.jpg";
import latestnewsimg6 from "../../assets/images/latestnews6.jpg";
import { BsPersonCircle } from "react-icons/bs";
import styles from "./LatestNews.module.css"

export default function LatestNews() {
  return (
	<div className={styles.latest_news_container}>
		<div className={styles.latest_news_title_date}>
			<img className={styles.latest_news_img} src={latestnewsimg1} alt="latest-news-img-1" />
			<div className={styles.latest_news_desc}>
				<h4 className={styles.latest_news_title}>Momentum Ramadhan, UPTD Puskesmas Bantilang Bagikan Ta'jil Kepada Warga</h4>
				<div className={styles.latest_news_date}>
					<div className={styles.latest_news_word_date}>
						<h5 className={styles.news_word}>news</h5>
						<p className={styles.news_date}>19/04/2023, 11:30 wita</p>
					</div>
					<hr className={styles.latest_news_line}/>
					<div className={styles.author_container}>
						<BsPersonCircle className={styles.author_logo}/>
						<p className={styles.author_name}>Admin Wartalutim</p>
					</div>
				</div>
			</div>
		</div>
		<div className={styles.latest_news_title_date}>
			<img className={styles.latest_news_img} src={latestnewsimg2} alt="latest-news-img-2" />
			<div className={styles.latest_news_desc}>
				<h4 className={styles.latest_news_title}>Tim Sedekah Jumat Bagikan Beras dan Paket Buka Puasa Kepada 129 Petugas Kebersihan DLH</h4>
				<div className={styles.latest_news_date}>
					<div className={styles.latest_news_word_date}>
						<h5 className={styles.news_word}>news</h5>
						<p className={styles.news_date}>19/04/2023, 11:00 wita</p>
					</div>
					<hr className={styles.latest_news_line}/>
					<div className={styles.author_container}>
						<BsPersonCircle className={styles.author_logo}/>
						<p className={styles.author_name}>Admin Wartalutim</p>
					</div>
				</div>
			</div>
		</div>
		<div className={styles.latest_news_title_date}>
			<img className={styles.latest_news_img} src={latestnewsimg3} alt="latest-news-img-3" />
			<div className={styles.latest_news_desc}>
				<h4 className={styles.latest_news_title}>Tiga Nakes Lutim Lolos Seleksi Tahap I Penilaian NakesDan Tk. Provinsi Sulsel Tahun 2023</h4>
				<div className={styles.latest_news_date}>
					<div className={styles.latest_news_word_date}>
						<h5 className={styles.news_word}>news</h5>
						<p className={styles.news_date}>19/04/2023, 10:50 wita</p>
					</div>
					<hr className={styles.latest_news_line}/>
					<div className={styles.author_container}>
						<BsPersonCircle className={styles.author_logo}/>
						<p className={styles.author_name}>Admin Wartalutim</p>
					</div>
				</div>
			</div>
		</div>
		<div className={styles.latest_news_title_date}>
			<img className={styles.latest_news_img} src={latestnewsimg4} alt="latest-news-img-4" />
			<div className={styles.latest_news_desc}>
				<h4 className={styles.latest_news_title}>UPTD Puskesmas Kalaena Lakukan Pemeriksaan USG Bagi Ibu Hamil</h4>
				<div className={styles.latest_news_date}>
					<div className={styles.latest_news_word_date}>
						<h5 className={styles.news_word}>news</h5>
						<p className={styles.news_date}>19/04/2023, 10:45 wita</p>
					</div>
					<hr className={styles.latest_news_line}/>
					<div className={styles.author_container}>
						<BsPersonCircle className={styles.author_logo}/>
						<p className={styles.author_name}>Admin Wartalutim</p>
					</div>
				</div>
			</div>
		</div>
		<div className={styles.latest_news_title_date}>
			<img className={styles.latest_news_img} src={latestnewsimg5} alt="latest-news-img-5" />
			<div className={styles.latest_news_desc}>
				<h4 className={styles.latest_news_title}>Pastikan Ketersediaan LPG, Disdagkoprinum Sidak Pangkalan di Wasuponda</h4>
				<div className={styles.latest_news_date}>
					<div className={styles.latest_news_word_date}>
						<h5 className={styles.news_word}>news</h5>
						<p className={styles.news_date}>19/04/2023, 10:30 wita</p>
					</div>
					<hr className={styles.latest_news_line}/>
					<div className={styles.author_container}>
						<BsPersonCircle className={styles.author_logo}/>
						<p className={styles.author_name}>Admin Wartalutim</p>
					</div>
				</div>
			</div>
		</div>
		<div className={styles.latest_news_title_date}>
			<img className={styles.latest_news_img} src={latestnewsimg6} alt="latest-news-img-6" />
			<div className={styles.latest_news_desc}>
				<h4 className={styles.latest_news_title}>Semarakkan Bulan Ramadhan, BKPSDM Lutim Gelar Lomba Adzan dan Tadarrus Al-Qur'an</h4>
				<div className={styles.latest_news_date}>
					<div className={styles.latest_news_word_date}>
						<h5 className={styles.news_word}>news</h5>
						<p className={styles.news_date}>19/04/2023, 10:14 wita</p>
					</div>
					<hr className={styles.latest_news_line}/>
					<div className={styles.author_container}>
						<BsPersonCircle className={styles.author_logo}/>
						<p className={styles.author_name}>Admin Wartalutim</p>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}
