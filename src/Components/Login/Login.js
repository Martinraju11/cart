import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { Context } from "../../Context";
export const Login = (props) => {
  const { state, dispatch } = useContext(Context);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [log, setLog] = useState(false);
  const [err, setErr] = useState(false);

  const input1 = (e) => {
    if (e.target.name === "un") {
      setUser(e.target.value);
    } else if (e.target.name === "pass") {
      setPass(e.target.value);
    }
  };

  let navi = useNavigate();
  const gotoHome = (e) => {
    e.preventDefault();
    setErr(false);
    setLog(false);
    if (user === "" || pass === "") {
      setErr(true);
    } else {
      let d = props.data.users.filter((v, i) => {
        return v.username === user && v.password === Number(pass);
      });

      if (d.length === 1) {
        dispatch({ type: "Login", payload: true });
        navi("/home");
      } else {
        setLog(true);
      }
    }
  };

  return (
    <div id="login">
      <div className="log-row">
        <h2>Login</h2>
        <div className="inputs">
          <label>UserName:</label>
          <input type="text" onChange={input1} name="un" value={user} />
        </div>
        {err && !user ? (
          <p className="log-para">Empty field not allowed</p>
        ) : (
          ""
        )}

        <div className="inputs">
          <label>Password:</label>
          <input type="text" onChange={input1} name="pass" value={pass} />
        </div>
        {err && !pass ? (
          <p className="log-para">Empty field not allowed</p>
        ) : (
          ""
        )}

        <div className="log-btn">
          <button onClick={gotoHome}>Login</button>
          {log ? (
            <p className="log-para">UserName,Password does not match</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
