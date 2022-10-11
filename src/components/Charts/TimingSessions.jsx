import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import styles from "./charts.module.css";
import { useState, useEffect } from "react";
import * as APIServer from "../../api";
import * as APIMock from "../../apiMock";
const API = process.env.REACT_APP_ISMOCKACTIVE === "true" ? APIMock : APIServer;

function CustomTooltip({ payload, active }) {
    if (active) {
        return (
            <div className={styles.CustomTooltip}>
                <p className="day">{`${payload[0].value}`}</p>
                <p className="desc">min</p>
            </div>
        );
    }

    return null;
}
export default function TimingSessions() {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        API.getUserAverageSessions(12)
            .then((res) => {
                setSessions(res.data.data.sessions);
                // console.log(res.data.data.sessions);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <header className={styles.header}>
                <p>Durée moyenne des sessions</p>
            </header>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={258} height={320} data={sessions}>
                    <XAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="#FFF"
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
