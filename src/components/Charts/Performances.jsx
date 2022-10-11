import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    // PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";
import * as APIServer from "../../api";
import * as APIMock from "../../apiMock";
const API = process.env.REACT_APP_ISMOCKACTIVE === "true" ? APIMock : APIServer;

// const data = [
//     {
//         subject: "Cardio",
//         value: 80,
//         // kind: 1,
//     },
//     {
//         subject: "Energie",
//         value: 120,
//         // kind: 2,
//     },
//     {
//         subject: "Endurance",
//         value: 140,
//         // kind: 3,
//     },
//     {
//         subject: "Force",
//         value: 50,
//         // kind: 4,
//     },
//     {
//         subject: "Vitesse",
//         value: 200,
//         // kind: 5,
//     },
//     {
//         subject: "Intensité",
//         value: 90,
//         // kind: 6,
//     },
// ];

const categoryFR = {
    1: "cardio",
    2: "énergie",
    3: "endurance",
    4: "force",
    5: "vitesse",
    6: "intensité",
};

export default function Performances() {
    const [kind, setKind] = useState("");
    const [perf, setPerf] = useState([]);

    useEffect(() => {
        API.getUserPerformance(12)
            .then((res) => {
                setKind(res.data.data.kind);
                const allData = res.data.data;
                const tempPerf = allData.data.map((obj) => {
                    return {
                        value: obj.value,
                        subject: categoryFR[obj.kind],
                    };
                });

                setPerf(tempPerf);
                console.log(res.data.data.kind);
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
                    width={258}
                    height={263}
                    data={perf}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" stroke="#FFF" />
                    <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </>
    );
}
