import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import styles from "./charts.module.css";
import { useState, useEffect } from "react";
import propTypes from "prop-types";
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
CustomTooltip.propTypes = {
    payload: propTypes.array,
    active: propTypes.bool,
};

const Days = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
};

export default function TimingSessions() {
    const [time, setTime] = useState([]);

    useEffect(() => {
        API.getUserAverageSessions(12)
            .then((res) => {
                const allData = res.data.data;
                const tempTime = allData.sessions.map((obj) => {
                    return {
                        session: obj.sessionLength,
                        day: Days[obj.day],
                    };
                });

                setTime(tempTime);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <header className={styles.header}>
                <p>Durée moyenne des sessions</p>
            </header>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={258} height={320} data={time}>
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        axisLine={false}
                        allowDecimals={false}
                        stroke="#FFF"
                        tick={{ opacity: 0.7 }}
                        fontSize={12}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                        type="monotone"
                        dataKey="session"
                        stroke="#FFF"
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
