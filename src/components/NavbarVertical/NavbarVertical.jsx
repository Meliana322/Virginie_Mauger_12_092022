import React from "react";
import styles from "./navbarVertical.module.css";
import icone1 from "../../assets/icon1.png";
import icone2 from "../../assets/icon2.png";
import icone3 from "../../assets/icon3.png";
import icone4 from "../../assets/icon4.png";

export default function navbarVertical() {
    return (
        <nav className={styles.navbarVertical}>
            <div className={styles.nav}>
                {/* <div className={styles.icone}> */}
                <img src={icone1} className={styles.logo} alt="logo détente" />
                {/* </div> */}
                {/* <div className={styles.icone}> */}
                <img src={icone2} className={styles.logo} alt="logo natation" />
                {/* </div> */}
                {/* <div className={styles.icone}> */}
                <img src={icone3} className={styles.logo} alt="logo vélo" />
                {/* </div> */}
                {/* <div className={styles.icone}> */}
                <img
                    src={icone4}
                    className={styles.logo}
                    alt="logo musculation"
                />
                {/* </div> */}
            </div>
            <div className={styles.copyright}>
                <p>Copyright, SportSee 2020</p>
            </div>
        </nav>
    );
}
