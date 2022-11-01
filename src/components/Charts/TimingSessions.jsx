import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import styles from "./charts.module.css";
import PropTypes from "prop-types";

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
    payload: PropTypes.array,
    active: PropTypes.bool,
};

export default function TimingSessions(props) {
    return (
        <>
            <header className={styles.header}>
                <p>Durée moyenne des sessions</p>
            </header>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={258}
                    height={320}
                    data={props.time}
                    margin={{ right: 5, left: 5 }}
                >
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        axisLine={false}
                        allowDecimals={false}
                        stroke="#FFF"
                        tick={{ opacity: 0.7 }}
                        fontSize={12}
                        padding={{ left: 10, right: 10 }}
                    />
                    <YAxis
                        type="number"
                        hide
                        domain={["dataMin - 50", "dataMax + 50"]}
                    />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={<CustomHover />}
                    />
                    <Line
                        type="natural"
                        dataKey="session"
                        stroke="#FFF"
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}

const CustomHover = ({ points }) => {
    return (
        <rect
            width="258"
            height="263"
            fill="rgba(0, 0, 0, 0.1)"
            y="5"
            x={points[0].x}
        />
    );
};

TimingSessions.propTypes = {
    time: PropTypes.arrayOf(
        PropTypes.shape({
            session: PropTypes.number,
            day: PropTypes.string,
        })
    ),
};
