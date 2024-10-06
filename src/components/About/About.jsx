import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About me</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl('about/aboutImage2.png')} alt="Me sitting with laptop"></img>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    {/* <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" /> */}
                    <div className={styles.aboutItemText}>
                        <h3>coder-explorer-sportsman</h3>
                        {/* <h3>コーダー - エクスプローラ - スポーツマン</h3> */}
                        <p>やあ！私はチンメイ・ダワルバジェ、インドール工科大学の学生です。私はナンデッド・マハラシュトラ州出身です。私はクリケット、バトミントン、卓球をするのが好きです。そして私はコーディングに情熱を持っています。私は映画やウェブ シリーズ、新しい場所を探索するのが大好きです。私は常に新しいテクノロジー、言語、フレームワークを学ぶことに熱心です。できる限りスキルアップしていきたいと思っています。
                        ありがとう!
                        </p>
                    </div>
                </li>

                {/* <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="cpu icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend developer</h3>
                        <p>I am Backend developer. I am Backend developer.I am Backend developer.</p>
                    </div>
                </li> */}

                {/* <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="Ui icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I have designed multiple landing pages and have </p>
                    </div>
                </li> */}

            </ul>
        </div>
    </section>
  )
}

export default About
