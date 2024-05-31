"use client"

import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Jan",
    Visitor: 400,
    Complains: 24,
    Fire: 2,
    Events: 7,
  },
  {
    name: "Feb",
    Visitor: 1000,
    Complains: 40,
    Fire: 1,
    Events: 9,
  },
  {
    name: "March",
    Visitor: 120,
    Complains: 24,
    Fire: 0,
    Events: 5,
  },
  {
    name: "April",
    Visitor: 234,
    Complains: 2,
    Fire: 0,
    Events: 2,
  },
  {
    name: "May",
    Visitor: 400,
    Complains: 240,
    Fire: 4,
    Events: 90,
  },
  {
    name: "june",
    Visitor: 400,
    Complains: 24,
    Fire: 2,
    Events: 7,
  },
  {
    name: "July",
    Visitor: 780,
    Complains: 240,
    Fire: 4,
    Events: 90,
  },
  {
    name: "August",
    Visitor: 400,
    Complains: 70,
    Fire: 8,
    Events: 1,
  },
  {
    name: "Sept",
    Visitor: 632,
    Complains: 56,
    Fire: 2,
    Events: 0,
  },
  {
    name: "Oct",
    Visitor: 400,
    Complains: 70,
    Fire: 8,
    Events: 1,
  },
  {
    name: "Nov",
    Visitor: 400,
    Complains: 24,
    Fire: 2,
    Events: 7,
  },
  {
    name: "Dec",
    Visitor: 56,
    Complains: 430,
    Fire: 8,
    Events: 23,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Yearly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
          <Legend />
          <Line type="monotone" dataKey="Visitor" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="Complains" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
          <Line type="monotone" dataKey="Fire" stroke="red" strokeDasharray="3 4 5 2" />
          <Line type="monotone" dataKey="Events" stroke="blue" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart