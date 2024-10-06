import React, {useState} from 'react';
import styles from "./Navbar.module.css";

import { getImageUrl } from '../../utils';

const Navbar = () => {
  const [menuOpen,setMenuopen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <img className={styles.menuBtn} src={menuOpen? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}   alt="menu-button" 
        onClick={()=>setMenuopen(!menuOpen)}
      />
      <div className={styles.menu}>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}` }>
            <li><a  href="#about">私について</a></li>
            <li><a  href="#experience">スキルと経験</a></li>
            <li><a  href="#projects">プロジェクト</a></li>
            <li><a  href="#contact">連絡し</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

