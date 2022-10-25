import styles from "./App.module.css";
import Navbar from "../src/components/Navbar/Navbar";
import NavbarVertical from "../src/components/NavbarVertical/NavbarVertical";
import caloriesIcon from "../src/assets/caloriesIcon.png";
import carbs from "../src/assets/carbs.png";
import fat from "../src/assets/fat.png";
import protein from "../src/assets/protein.png";
import Activity from "./components/Charts/Activity";
import TimingSessions from "./components/Charts/TimingSessions";
import Performances from "./components/Charts/Performances";
import Score from "./components/Charts/Score";
import Button from "./components/Button/Button";
import { useState, useEffect } from "react";
import * as APIServer from "./api";
import * as APIMock from "./apiMock";
import Home from "./Pages/Home/Home";
// import PropTypes from "prop-types";

// const API = process.env.REACT_APP_ISMOCKACTIVE === "true" ? APIMock : APIServer;

// const Days = {
//     1: "L",
//     2: "M",
//     3: "M",
//     4: "J",
//     5: "V",
//     6: "S",
//     7: "D",
// };
// const categoryFR = {
//     1: "Intensité",
//     2: "Vitesse",
//     3: "Force",
//     4: "Endurance",
//     5: "Energie",
//     6: "Cardio",
// };

// function App(userId) {
//     const [firstName, setFirstName] = useState("");
//     const [calorieCount, setCalorieCount] = useState("");
//     const [proteinCount, setProteinCount] = useState("");
//     const [carbohydrateCount, setCarbohydrateCount] = useState("");
//     const [lipidCount, setLipidCount] = useState("");

//     //getUser//

//     const [calories, setCalories] = useState([]);
//     const caloriesFormated = calories.map((session, index) => {
//         return { ...session, count: index + 1 };
//     });

//     //getUserActivity//

//     const [time, setTime] = useState([]);

//     //getUserAverageSessions//

//     const [perf, setPerf] = useState([]);

//     //getUserPerformance//

//     const [score, setScore] = useState("");
//     const datas = [{ name: "score", value: score }];

//     useEffect(() => {
//         API.getUser(18)
//             .then((res) => {
//                 setFirstName(res.data.data.userInfos.firstName);
//                 setCalorieCount(res.data.data.keyData.calorieCount);
//                 setProteinCount(res.data.data.keyData.proteinCount);
//                 setCarbohydrateCount(res.data.data.keyData.carbohydrateCount);
//                 setLipidCount(res.data.data.keyData.lipidCount);
//                 setScore(res.data.data.score || res.data.data.todayScore);
//             })
//             .catch((err) => console.log(err));

//         API.getUserActivity(18)
//             .then((res) => {
//                 setCalories(res.data.data.sessions);
//                 // console.log(res.data.data.sessions);
//             })
//             .catch((err) => console.log(err));

//         API.getUserAverageSessions(18)
//             .then((res) => {
//                 const allData = res.data.data;
//                 const tempTime = allData.sessions.map((obj) => {
//                     return {
//                         session: obj.sessionLength,
//                         day: Days[obj.day],
//                     };
//                 });

//                 setTime(tempTime);
//             })
//             .catch((err) => console.log(err));

//         API.getUserPerformance(18)
//             .then((res) => {
//                 const allData = res.data.data;
//                 const tempPerf = allData.data.map((obj) => {
//                     return {
//                         value: obj.value,
//                         subject: categoryFR[obj.kind],
//                     };
//                 });

//                 setPerf(tempPerf);
//             })
//             .catch((err) => console.log(err));

//         // API.getUser(18)
//         //     .then((res) => {
//         //         setScore(res.data.data.score || res.data.data.todayScore);
//         //     })
//         //     .catch((err) => console.log(err));
//     }, []);

//     return (
//         <div className={styles.App}>
//             <header className={styles.header}>
//                 <Navbar />
//             </header>
//             <main>
//                 <NavbarVertical />

//                 <section className={styles.resultsId}>
//                     <div className={styles.container}>
//                         <Button />
//                         <div className={styles.identity}>
//                             <p className={styles.identityName}>
//                                 Bonjour <span>{firstName}</span>
//                             </p>
//                             <p className={styles.message}>
//                                 Félicitation ! Vous avez explosé vos objectifs
//                                 hier 👏
//                             </p>
//                         </div>
//                         <div className={styles.results}>
//                             <div className={styles.resultsGraphics}>
//                                 <div className={styles.dailyActivity}>
//                                     <Activity
//                                         caloriesFormated={caloriesFormated}
//                                     />
//                                 </div>
//                                 <div className={styles.division}>
//                                     <div className={styles.session}>
//                                         <TimingSessions time={time} />
//                                     </div>
//                                     <div className={styles.speciality}>
//                                         <Performances perf={perf} />
//                                     </div>
//                                     <div className={styles.score}>
//                                         <Score datas={datas} score={score} />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className={styles.resultsNumbers}>
//                                 <div className={styles.resultsTypes}>
//                                     <img
//                                         src={caloriesIcon}
//                                         className={styles.calories}
//                                         alt=""
//                                     />
//                                     <div className={styles.containerResult}>
//                                         <p className={styles.result}>
//                                             {calorieCount}
//                                         </p>
//                                         <p className={styles.category}>
//                                             Calories
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className={styles.resultsTypes}>
//                                     <img
//                                         src={protein}
//                                         className={styles.protein}
//                                         alt=""
//                                     />
//                                     <div>
//                                         <p className={styles.result}>
//                                             {proteinCount}
//                                         </p>
//                                         <p className={styles.category}>
//                                             protéines
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className={styles.resultsTypes}>
//                                     <img
//                                         src={carbs}
//                                         className={styles.carbs}
//                                         alt=""
//                                     />
//                                     <div>
//                                         <p className={styles.result}>
//                                             {carbohydrateCount}
//                                         </p>
//                                         <p className={styles.category}>
//                                             Glucides
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className={styles.resultsTypes}>
//                                     <img
//                                         src={fat}
//                                         className={styles.fat}
//                                         alt=""
//                                     />
//                                     <div>
//                                         <p className={styles.result}>
//                                             {lipidCount}
//                                         </p>
//                                         <p className={styles.category}>
//                                             Lipides
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//         </div>
//     );
// }

function App() {
    return (
        <div>
            <Home />
        </div>
    );
}
export default App;
