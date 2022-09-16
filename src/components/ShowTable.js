import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { API } from "../global";
import { Paper } from "@material-ui/core";
// import { Footer } from './Footer';

export function ShowTable() {
  const [url, setUrl] = useState([]);

  useEffect(() => getdata(), []);
  const getdata = () => {
    fetch(`${API}/geturl`, { method: "GET" })
      .then((data) => data.json())
      .then((mvs) => {
        setUrl(mvs);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Paper elevation={4} style={{ minHeight: "100vh", borderRadius: "0px" }}>
        <div>
          <Navbar />
        </div>

        <div className="table-content">
          <h3>URL TABLE</h3>
          <table className="table1 ">
            <thead>
              <tr>
                <th scope="col">s.no</th>
                <th scope="col">URL</th>
                <th scope="col">Shorten</th>
                <th scope="col">Visit</th>
              </tr>
            </thead>
            <tbody>
              {url.map((u, index) => (
                <Table
                  key={index}
                  long={u.long}
                  short={u.short}
                  visit={u.visit}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div></div>
      </Paper>
    </div>
  );
}

export function Table({ index, long, short, visit }) {
  return (
    <>
      <tr>
        <td> {index + 1} </td>
        <td> {long} </td>
        <td>
          {" "}
          <a href={`${API}/geturl/${short}`} target="_blank" rel="noreferrer">
            {short}
          </a>{" "}
        </td>
        <td> {visit} </td>
      </tr>
    </>
  );
}
