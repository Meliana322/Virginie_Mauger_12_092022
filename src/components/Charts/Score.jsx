import React from "react";
import { PieChart, Pie, Legend, ResponsiveContainer } from "recharts";
// import { useState, useEffect } from "react";
// import * as APIServer from "../../api";
// import * as APIMock from "../../apiMock";
import styles from "./charts.module.css";

// const API = process.env.REACT_APP_ISMOCKACTIVE === "true" ? APIMock : APIServer;
const renderMiddleShape = [{ name: "middle", value: 100, fill: "#FFFFFF" }];
const CustomTooltip = ({ payload }) => {
    return (
        <div className={styles.score}>
            <p className={styles.results}>{payload[0].payload.value * 100}%</p>
            <p className={styles.objectifs}>de votre objectif</p>
        </div>
    );
};

export default function Score(props) {
    // const [score, setScore] = useState("");
    // const datas = [{ name: "score", value: score }];

    // useEffect(() => {
    //     API.getUser(18)
    //         .then((res) => {
    //             setScore(res.data.data.score || res.data.data.todayScore);
    //         })
    //         .catch((err) => console.log(err));
    // }, []);
    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={258} height={320}>
                    <text
                        x={45}
                        y={35}
                        fill="#20253A"
                        textAnchor="middle"
                        dominantBaseline="central"
                    >
                        <tspan fontSize="15px" fontWeight="500">
                            Score
                        </tspan>
                    </text>
                    <Pie
                        data={props.datas}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        startAngle={90}
                        endAngle={90 + 360 * props.score}
                        innerRadius="65%"
                        outerRadius="72%"
                        stroke="#FFFFFF"
                        cornerRadius={50}
                        fill="#FF0000"
                    />
                    <Pie
                        data={renderMiddleShape}
                        nameKey="name"
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        outerRadius="65%"
                        stroke="none"
                    />

                    <Legend verticalAlign="middle" content={CustomTooltip} />
                </PieChart>
            </ResponsiveContainer>
        </>
    );
}
