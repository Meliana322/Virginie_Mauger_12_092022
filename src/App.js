import styles from "./App.module.css";
import Navbar from "../src/components/Navbar/Navbar";
import NavbarVertical from "../src/components/NavbarVertical/NavbarVertical";
import calories from "../src/assets/calories.png";
import carbs from "../src/assets/carbs.png";
import fat from "../src/assets/fat.png";
import protein from "../src/assets/protein.png";

function App() {
    return (
        <div className={styles.App}>
            <header className={styles.header}>
                <Navbar />
            </header>
            <main>
                <NavbarVertical />
                <section className={styles.resultsId}>
                    <div className={styles.container}>
                        <div className={styles.identity}>
                            <p className={styles.identityName}>
                                Bonjour <span>Thomas</span>
                            </p>
                            <p className={styles.message}>
                                Félicitation ! Vous avez explosé vos objectifs
                                hier 👏
                            </p>
                        </div>
                        <div className={styles.results}>
                            <div className={styles.resultsGraphics}></div>
                            <div className={styles.resultsNumbers}>
                                <div className={styles.resultsTypes}>
                                    <img
                                        src={calories}
                                        className={styles.calories}
                                        alt=""
                                    />
                                    <div className={styles.containerResult}>
                                        <p className={styles.result}>
                                            1,930kCal
                                        </p>
                                        <p className={styles.category}>
                                            Calories
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.resultsTypes}>
                                    <img
                                        src={protein}
                                        className={styles.protein}
                                        alt=""
                                    />
                                    <div>
                                        <p className={styles.result}>155g</p>
                                        <p className={styles.category}>
                                            Protéines
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.resultsTypes}>
                                    <img
                                        src={carbs}
                                        className={styles.carbs}
                                        alt=""
                                    />
                                    <div>
                                        <p className={styles.result}>290g</p>
                                        <p className={styles.category}>
                                            Glucides
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.resultsTypes}>
                                    <img
                                        src={fat}
                                        className={styles.fat}
                                        alt=""
                                    />
                                    <div>
                                        <p className={styles.result}>50g</p>
                                        <p className={styles.category}>
                                            Lipides
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
