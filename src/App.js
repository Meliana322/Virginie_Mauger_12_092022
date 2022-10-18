import styles from "./App.module.css";
import Navbar from "../src/components/Navbar/Navbar";
import NavbarVertical from "../src/components/NavbarVertical/NavbarVertical";
import calories from "../src/assets/calories.png";
import carbs from "../src/assets/carbs.png";
import fat from "../src/assets/fat.png";
import protein from "../src/assets/protein.png";
import Activity from "./components/Charts/Activity";
import TimingSessions from "./components/Charts/TimingSessions";
import Performances from "./components/Charts/Performances";
import Score from "./components/Charts/Score";
import { useState, useEffect } from "react";
import * as APIServer from "./api";
import * as APIMock from "./apiMock";

const API = process.env.REACT_APP_ISMOCKACTIVE === "true" ? APIMock : APIServer;

function App(userId) {
    const [firstName, setFirstName] = useState("");
    const [calorieCount, setCalorieCount] = useState("");
    const [proteinCount, setProteinCount] = useState("");
    const [carbohydrateCount, setCarbohydrateCount] = useState("");
    const [lipidCount, setLipidCount] = useState("");
    useEffect(() => {
        API.getUser(18)
            .then((res) => {
                setFirstName(res.data.data.userInfos.firstName);
                setCalorieCount(res.data.data.keyData.calorieCount);
                setProteinCount(res.data.data.keyData.proteinCount);
                setCarbohydrateCount(res.data.data.keyData.carbohydrateCount);
                setLipidCount(res.data.data.keyData.lipidCount);
            })
            .catch((err) => console.log(err));
    }, []);

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
                                Bonjour <span>{firstName}</span>
                            </p>
                            <p className={styles.message}>
                                Félicitation ! Vous avez explosé vos objectifs
                                hier 👏
                            </p>
                        </div>
                        <div className={styles.results}>
                            <div className={styles.resultsGraphics}>
                                <div className={styles.dailyActivity}>
                                    <Activity />
                                </div>
                                <div className={styles.division}>
                                    <div className={styles.session}>
                                        <TimingSessions />
                                    </div>
                                    <div className={styles.speciality}>
                                        <Performances />
                                    </div>
                                    <div className={styles.score}>
                                        <Score />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.resultsNumbers}>
                                <div className={styles.resultsTypes}>
                                    <img
                                        src={calories}
                                        className={styles.calories}
                                        alt=""
                                    />
                                    <div className={styles.containerResult}>
                                        <p className={styles.result}>
                                            {calorieCount}
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
                                        <p className={styles.result}>
                                            {proteinCount}
                                        </p>
                                        <p className={styles.category}>
                                            protéines
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
                                        <p className={styles.result}>
                                            {carbohydrateCount}
                                        </p>
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
                                        <p className={styles.result}>
                                            {lipidCount}
                                        </p>
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
