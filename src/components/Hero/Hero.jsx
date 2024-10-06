import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>こんにちは、チンメイです！</h1>
            <p className={styles.description}>私はインドールのインド工科大学で学位取得を目指しています。</p>
            <div className={styles.resume}>
                <a id={styles.resumeBtn} className={styles.contactBtn} href="https://drive.google.com/file/d/19eZPghybXlNKuVERUtvenjuK1C8LjHYH/view?usp=drive_link" target='blank'>再開する(Resume)</a>
                <a id={styles.resumeBtn} className={styles.contactBtn} href=" https://drive.google.com/file/d/1M7sUwQjlNvrSkQPmui7Se-a5_JXmLDir/view?usp=sharing" target='blank'>カバーレター(Cover Letter)</a>
            </div>
           
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/heroImage2.png")}  alt="My Image"></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
