import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import styles from "./charts.module.css";
import { useState, useEffect } from "react";
// import propTypes from "prop-types";
import * as APIServer from "../../api";
import * as APIMock from "../../apiMock";
const API = process.env.REACT_APP_ISMOCKACTIVE === "true" ? APIMock : APIServer;

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className={styles.tooltip}>
                <p className="weight">{`${payload[0].value}`}kg</p>
                <p className="calories">{`${payload[1].value}`}kcal</p>
            </div>
        );
    }

    return null;
};

export default function Activity() {
    const [data, setData] = useState([]);
    // const [sessions, setSessions] = useState([]);
    const [calories, setCalories] = useState("");

    useEffect(() => {
        API.getUserActivity(12)
            .then((res) => {
                setData(res.data.data);
                // console.log(res.data.data);
                setCalories(res.data.data.sessions);
                // console.log(res.data.data.sessions);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <header>
                <p>Activité quotidienne</p>
            </header>
            <ResponsiveContainer width="100%" height="80%">
                <BarChart
                    width={258}
                    height={320}
                    data={calories}
                    barGap="8"
                    margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip
                        content={<CustomTooltip />}
                        wrapperStyle={{ outline: "none" }}
                    />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        iconSize={9}
                    />
                    <Bar
                        dataKey="kilogram"
                        name="Poids (kg)"
                        fill="#282D30"
                        barSize={7}
                        radius={[3, 3, 0, 0]}
                    />
                    <Bar
                        dataKey="calories"
                        name="Calories brûlées (kCal)"
                        fill="#E60000"
                        barSize={7}
                        radius={[3, 3, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}
