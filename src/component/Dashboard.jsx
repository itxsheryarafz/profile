import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { TailSpin } from "react-loader-spinner";
import Spinner from "react-bootstrap/Spinner";
import ProgressBar from "react-bootstrap/ProgressBar";

import Swal from "sweetalert2";
export default function Dashboard() {
  const [dataa, setdata] = React.useState([]);
  const [loading, setloading] = React.useState(true);
  const now = 60;
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setdata(response.data);

        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <>
        {loading || !dataa ? (
          <Spinner
            animation="border"
            role="status"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <Table bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>User ID</th>
                <th>ID</th>

                <th>Title</th>
                <th>Body</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dataa.map((data, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{data.userId}</td>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td
                    className="d-inline-block text-truncate"
                    style={{ width: "230px" }}
                  >
                    {data.body}
                  </td>
                  <td>
                    <button type="button" class="btn btn-danger">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </>
    </div>
  );
}
