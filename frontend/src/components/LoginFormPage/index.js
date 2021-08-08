import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  let [credential, setCredential] = useState("");
  let [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);



  if (sessionUser) return <Redirect to="/kitchen" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };


  const handleDemo = async (e) => {
    e.preventDefault();
    credential = "demo@user.io";
    password = "password";
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <div id='loginDiv'>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit} id='loginForm'>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label className='loginLabels'>
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label className='loginLabels'>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" className='logBtns'>Log In</button>
      </form>
      <Link to='/signup' className='logLinks'>Need an account?</Link>
      <form onSubmit={handleDemo}>
        <button type="submit" id='demoBtn'>Login with Demo</button>
      </form>
    </div>
  );
}

export default LoginFormPage;
