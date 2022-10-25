import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

export default function Performances(props) {
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

Performances.propTypes = {
    perf: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number,
            subject: PropTypes.string,
        })
    ),
};
