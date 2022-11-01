import React, { useState, useEffect } from "react";
import styles from "../../App.module.css";
import Navbar from "../../components/Navbar/Navbar";
import NavbarVertical from "../../components/NavbarVertical/NavbarVertical";
import caloriesIcon from "../../assets/caloriesIcon.png";
import carbs from "../../assets/carbs.png";
import fat from "../../assets/fat.png";
import protein from "../../assets/protein.png";
import Activity from "../../components/Charts/Activity";
import TimingSessions from "../../components/Charts/TimingSessions";
import Performances from "../../components/Charts/Performances";
import Score from "../../components/Charts/Score";
import * as APIServer from "../../api";
import * as APIMock from "../../apiMock";
import { useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_ISMOCKACTIVE === "true" ? APIMock : APIServer;

const Days = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
};
const categoryFR = {
    1: "Intensité",
    2: "Vitesse",
    3: "Force",
    4: "Endurance",
    5: "Energie",
    6: "Cardio",
};

/**
 * Graphik chart component of user
 *
 */

export default function User() {
    let navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [calorieCount, setCalorieCount] = useState("");
    const [proteinCount, setProteinCount] = useState("");
    const [carbohydrateCount, setCarbohydrateCount] = useState("");
    const [lipidCount, setLipidCount] = useState("");

    //getUser//
    let { id } = useParams();
    const [calories, setCalories] = useState([]);
    const caloriesFormated = calories.map((session, index) => {
        return { ...session, count: index + 1 };
    });

    //getUserActivity//
    const [time, setTime] = useState([]);

    //getUserAverageSessions//
    const [perf, setPerf] = useState([]);

    //getUserPerformance//
    const [score, setScore] = useState("");
    const datas = [{ name: "score", value: score }];

    useEffect(() => {
        const promiseUser = API.getUser(id).then((res) => {
            setFirstName(res.data.data.userInfos.firstName);
            setCalorieCount(res.data.data.keyData.calorieCount);
            setProteinCount(res.data.data.keyData.proteinCount);
            setCarbohydrateCount(res.data.data.keyData.carbohydrateCount);
            setLipidCount(res.data.data.keyData.lipidCount);
            setScore(res.data.data.score || res.data.data.todayScore);
        });

        const promiseActivity = API.getUserActivity(id).then((res) => {
            setCalories(res.data.data.sessions);
        });

        const promiseSession = API.getUserAverageSessions(id).then((res) => {
            const allData = res.data.data;

            const tempTime = allData.sessions.map((obj) => {
                return {
                    session: obj.sessionLength,
                    day: Days[obj.day],
                };
            });
            setTime(tempTime);
        });

        const promisePerf = API.getUserPerformance(id).then((res) => {
            const allData = res.data.data;
            const tempPerf = allData.data.map((obj) => {
                return {
                    value: obj.value,
                    subject: categoryFR[obj.kind],
                };
            });
            console.log(tempPerf);

            setPerf(tempPerf);
        });

        const allPromise = Promise.all([
            promiseUser,
            promiseActivity,
            promiseSession,
            promisePerf,
        ]);
        allPromise
            .then(() => {
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                navigate("/404");
                setIsLoading(false);
            });
    }, [id, navigate]);
    if (isLoading) return <div>Loading...</div>;

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
                                    <Activity
                                        caloriesFormated={caloriesFormated}
                                        kilogramFormated={
                                            caloriesFormated.kilogram
                                        }
                                    />
                                </div>
                                <div className={styles.division}>
                                    <div className={styles.session}>
                                        <TimingSessions time={time} />
                                    </div>
                                    <div className={styles.speciality}>
                                        <Performances perf={perf} />
                                    </div>
                                    <div className={styles.score}>
                                        <Score datas={datas} score={score} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.resultsNumbers}>
                                <div className={styles.resultsTypes}>
                                    <img
                                        src={caloriesIcon}
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
