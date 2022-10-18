import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";
import * as APIServer from "../../api";
import * as APIMock from "../../apiMock";
const API = process.env.REACT_APP_ISMOCKACTIVE === "true" ? APIMock : APIServer;

const categoryFR = {
    1: "cardio",
    2: "énergie",
    3: "endurance",
    4: "force",
    5: "vitesse",
    6: "intensité",
};

export default function Performances() {
    const [perf, setPerf] = useState([]);

    useEffect(() => {
        API.getUserPerformance(18)
            .then((res) => {
                const allData = res.data.data;
                const tempPerf = allData.data.map((obj) => {
                    return {
                        value: obj.value,
                        subject: categoryFR[obj.kind],
                    };
                });

                setPerf(tempPerf);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    data={perf}
                    // margin="auto"
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        dataKey="subject"
                        stroke="#FFF"
                        axisLine={false}
                        fontSize="12px"
                    />
                    <PolarRadiusAxis
                        tick={false}
                        axisLine={false}
                        tickCount={6}
                        angle={360}
                    />
                    <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </>
    );
}
