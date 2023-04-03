import React from 'react'
import styles from "./WelcomeDate.module.css"

export default function WelcomeDate() {
  return (
	<div className={styles.welcome_date_container}>
		<div className={styles.welcome_text}>
			<h2>Selamat Datang di Wartalutim</h2>
		</div>
		<div className={styles.date_text}>
			<h2>Jumat, 31 Maret 2023</h2>
		</div>
	</div>
  )
}
