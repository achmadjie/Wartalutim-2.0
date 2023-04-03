import React from 'react'
import posters1 from "../../assets/images/posters1.png"
import posters2 from "../../assets/images/posters2.png"
import posters3 from "../../assets/images/posters3.png"
import posters4 from "../../assets/images/posters4.png"
import styles from "./Posters.module.css"

export default function Posters() {
  return (
	<div className={styles.posters_container}>
		<div className={styles.posters_img_container}>
			<img  className={styles.posters_img} src={posters1} alt="poster-1" />
		</div>
		<div className={styles.posters_img_container}>
			<img className={styles.posters_img} src={posters2} alt="poster-2" />
		</div>
		<div className={styles.posters_img_container}>
			<img className={styles.posters_img} src={posters4} alt="poster-3" />
		</div>
		<div className={styles.posters_img_container}>
			<img className={styles.posters_img} src={posters3} alt="poster-4" />
		</div>
	</div>
  )
}
