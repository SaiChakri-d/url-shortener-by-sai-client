import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Navbar } from "./Navbar";
import { Paper } from "@material-ui/core";
import { API } from "../global.js";

export function Application() {
  const [dayCount, setDayCount] = useState([]);

  let dt = new Date();

  let date = dt.getDate();
  let month = dt.getMonth() + 1;
  let CountOnDate = [];
  for (let i = 0; i < date; i++) {
    CountOnDate[i] = { count: 0, day: i + 1 };
  }

  const getdata = () => {
    fetch(`${API}/geturl`, { method: "GET" })
      .then((data) => data.json())
      .then((url) => {
        for (let i = 0; i < url.length; i++) {
          console.log(url[i].createdAt[0].month);
          if (url[i].createdAt[0].month === month) {
            CountOnDate[url[i].createdAt[0].date - 1].count++;
          }
        }
        setDayCount(CountOnDate);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      <Paper elevation={4} style={{ minHeight: "100vh", borderRadius: "0px" }}>
        <div>
          <Navbar />
        </div>
        <div className="dashboard-chart" style={{ marginTop: "70px" }}>
          <h3 style={{ textAlign: "center" }}>Monthly Report</h3>

          <Monthlydata dayCount={dayCount} />
        </div>

        <div>{/* <Footer/> */}</div>
      </Paper>
    </div>
  );
}

export function Monthlydata({ dayCount }) {
  console.log(dayCount);

  return (
    <div>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={400}
          height={200}
          data={dayCount}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
