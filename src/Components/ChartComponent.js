import React, { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  Line
} from "recharts";
const data = [
  {name: '0', uv: 0, pv: 0, amt: 0},
  {name: '0.25', uv: 230, pv: 0, amt: 0},
  {name: '0.5', uv: 400, pv: 0, amt: 0},
  {name: '0.75', uv: 550, pv: 0, amt: 0},
  {name: '1', uv: 650, pv: 0, amt: 0},
  {name: '1.25', uv: 700, pv: 0, amt: 0},
  {name: '1.5', uv: 740, pv: 0, amt: 0},
  {name: '1.75', uv: 770, pv: 0, amt: 0},
  {name: '2', uv: 790, pv: 0, amt: 0},
];

const Chart = () => {
  const onChangeDot = (e, xvalue, yvalue) => {
    console.log(e, xvalue, yvalue)
  }
  const handleClick = (e) => {
    console.log(e)
  }
  return (
    <ResponsiveContainer width={"100%"} height={400}>
    <LineChart
      width={600}
      height={400}
      data={data}
      margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
    >
      <Tooltip/>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" domain={["dataMin", "dataMax"]}>
        <Label
          value={"Fraction of actual spend"}
          position="bottom"
          style={{ textAnchor: "middle" }}
        />
      </XAxis>
      <YAxis>
        <Label
          // value={"Temperature"}
          position="left"
          axisLine={false}
          angle={-90}
          style={{ textAnchor: "middle" }}
        />
      </YAxis>
      <Line type="monotone" dataKey="uv" stroke="#3F8CB0" strokeWidth ={4} draggable={true}  activeDot={{ onDrag: (event, payload) => console.log(payload.payload) }} />
    </LineChart>
  </ResponsiveContainer>
  );
};

export default Chart;
