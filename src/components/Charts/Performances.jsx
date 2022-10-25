import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts";
// import { useState, useEffect } from "react";
// import * as APIServer from "../../api";
// import * as APIMock from "../../apiMock";
// const API = process.env.REACT_APP_ISMOCKACTIVE === "true" ? APIMock : APIServer;

// const categoryFR = {
//     1: "Intensité",
//     2: "Vitesse",
//     3: "Force",
//     4: "Endurance",
//     5: "Energie",
//     6: "Cardio",
// };

export default function Performances(props) {
    // const [perf, setPerf] = useState([]);

    // useEffect(() => {
    //     API.getUserPerformance(18)
    //         .then((res) => {
    //             const allData = res.data.data;
    //             const tempPerf = allData.data.map((obj) => {
    //                 return {
    //                     value: obj.value,
    //                     subject: categoryFR[obj.kind],
    //                 };
    //             });

    //             setPerf(tempPerf);
    //         })
    //         .catch((err) => console.log(err));
    // }, []);
    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="70%"
                    data={props.perf}
                    width={258}
                    height={263}
                    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                >
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        dataKey="subject"
                        stroke="#FFF"
                        axisLine={false}
                        fontSize="12px"
                        dy={5}
                        tickSize="13"
                        tickLine={false}
                    />
                    {/* <PolarRadiusAxis
                        tick={false}
                        axisLine={false}
                        tickCount={6}
                        angle={360}
                    /> */}
                    <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </>
    );
}
