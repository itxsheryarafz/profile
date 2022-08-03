import React from "react";
import { useHistory } from "react-router-dom";
export default function SignUp() {
  const [student, setstudent] = React.useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const history = useHistory();

  const HandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setstudent({ ...student, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/login");
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "62px",
        }}
      >
        <div
          className="card"
          style={{
            width: "30%",
          }}
        >
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  id="formGroupExampleInput"
                  placeholder="Enter First Name"
                  onChange={HandleInput}
                  value={student.firstname}
                />
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Enter Last Name"
                  onChange={HandleInput}
                  value={student.lastname}
                  name="lastname"
                />
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  name="username"
                  value={student.username}
                  placeholder="Enter User Name"
                  onChange={HandleInput}
                />
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Enter Email"
                  onChange={HandleInput}
                  value={student.email}
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Enter Password"
                  onChange={HandleInput}
                  value={student.password}
                  name="password"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Tooltip on bottom"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
