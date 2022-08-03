import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
export default function SignIn() {
  const [login, setlogin] = React.useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("String is ", login.email.length);
    if (!(login.email.length === 0 || login.password.length === 0)) {
      toast.success("Login Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        history.push("/dashboard");
      }, 5000);
      //
    } else {
      toast.warn("Login Not Sucessfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const HandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setlogin({ ...login, [name]: value });
  };
  return (
    <>
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
                  <label for="formGroupExampleInput2" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Enter Email"
                    onChange={HandleInput}
                    value={login.email}
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
                    value={login.password}
                    name="password"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
