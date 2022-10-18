import React from "react";
import { PieChart, Pie, Legend, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";
import * as APIServer from "../../api";
import * as APIMock from "../../apiMock";
import styles from "./charts.module.css";

const API = process.env.REACT_APP_ISMOCKACTIVE === "true" ? APIMock : APIServer;

const CustomTooltip = ({ payload }) => {
    return (
        <div className={styles.score}>
            <p className={styles.results}>{payload[0].payload.value * 100}%</p>
            <p className={styles.objectifs}>de votre objectif</p>
        </div>
    );
};

export default function Score() {
    const [score, setScore] = useState("");
    const datas = [{ name: "score", value: score }];

    useEffect(() => {
        API.getUser(18)
            .then((res) => {
                setScore(res.data.data.score || res.data.data.todayScore);
            })
            .catch((err) => console.log(err));
    }, []);
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
                        data={datas}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        startAngle={90}
                        endAngle={90 + 360 * score}
                        innerRadius="65%"
                        outerRadius="72%"
                        stroke="none"
                        cornerRadius={50}
                        fill="#FF0000"
                    />
                    <Legend verticalAlign="middle" content={CustomTooltip} />
                </PieChart>
            </ResponsiveContainer>
        </>
    );
}
