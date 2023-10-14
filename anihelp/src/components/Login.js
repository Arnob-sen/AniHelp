import React from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.config';
import { Navigate } from 'react-router-dom';
// import { useState } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputControl from './InputControl';
import { Link } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
      email: "",
      pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const handleSubmission = () => {
        if (!values.email || !values.pass) {
          setErrorMsg("Fill all fields");
          return;
        }
        setErrorMsg("");
    
        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.pass)
          .then(async (res) => {
            setSubmitButtonDisabled(false);
            
            navigate("/");
          })
          .catch((err) => {
            setSubmitButtonDisabled(false);
            setErrorMsg("invalid email or password");
          });
      };
  return (
    
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-white">
  <div className="p-12 bg-gray-200 rounded shadow-md w-96">
    <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
    <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />
        <b>{errorMsg}</b>
        <br />
        <Link to="/">
        <button className="my-2 mx-2 bg-red-600 text-white p-2 rounded-md ring-1">
            Back
          </button>
          </Link>
           <button className="my-2 bg-blue-600 text-white p-2 rounded-md ring-1" disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <p>
            Already have an account?{" "}
            <span className="text-sky-400">
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
    </div>
    </div>
    </div>
  )
}

export default Login
