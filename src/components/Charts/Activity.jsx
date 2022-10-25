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
// import { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import * as APIServer from "../../api";
// import * as APIMock from "../../apiMock";
// const API = process.env.REACT_APP_ISMOCKACTIVE === "true" ? APIMock : APIServer;

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

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
};

export default function Activity(props) {
    // const [calories, setCalories] = useState([]);

    // useEffect(() => {
    //     API.getUserActivity(18)
    //         .then((res) => {
    //             setCalories(res.data.data.sessions);
    //             console.log(res.data.data.sessions);
    //         })
    //         .catch((err) => console.log(err));

    // }, []);

    // const caloriesFormated = calories.map((session, index) => {
    //     return { ...session, count: index + 1 };
    // });

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={258}
                    height={420}
                    data={props.caloriesFormated}
                    barGap="8"
                    margin={{ top: 0, right: 30, left: 20, bottom: 5 }}
                >
                    <text
                        x={100}
                        y={14}
                        fill="black"
                        textAnchor="middle"
                        dominantBaseline="central"
                    >
                        <tspan fontSize="18px" fontWeight="500">
                            Activité quotidienne
                        </tspan>
                    </text>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="count"
                        fontSize={14}
                        tickMargin={15}
                        tickLine={false}
                        padding={{ right: -37, left: -42 }}
                    />

                    <YAxis orientation={"right"} />
                    <Tooltip
                        content={<CustomTooltip />}
                        wrapperStyle={{ outline: "none" }}
                    />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        iconSize={9}
                        height={80}
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

Activity.propTypes = {
    caloriesFormated: PropTypes.arrayOf(
        PropTypes.shape({
            count: PropTypes.number,
            calories: PropTypes.number,
            kilogram: PropTypes.number,
            day: PropTypes.string,
        })
    ),
};
// Activity.propTypes = {
// 	count: propTypes.
//  kilogram: propTypes.
//  calories: propTypes.

// };
