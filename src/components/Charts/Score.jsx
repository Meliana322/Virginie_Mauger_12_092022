import React from "react";
import {
    PieChart,
    Pie,
    // Sector,
    // Cell,
    ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";
import * as APIServer from "../../api";
import * as APIMock from "../../apiMock";
const API = process.env.REACT_APP_ISMOCKACTIVE === "true" ? APIMock : APIServer;

export default function Score() {
    const [score, setScore] = useState(0.4);
    const datas = [{ name: "score", value: score }];

    useEffect(() => {
        API.getUser(18)
            .then((res) => {
                setScore(res.data.data.score || res.data.data.todayScore);
                console.log(res);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={258} height={320}>
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
                    />
                </PieChart>
            </ResponsiveContainer>
        </>
    );
}
