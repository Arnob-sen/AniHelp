import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword,updateProfile  } from "firebase/auth";
import InputControl from './InputControl';
import { auth } from '../firebase.config';
import { useState } from 'react';

function Signup() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
      name: "",
      email: "",
      pass: "",
      degree:"",
      Institute:"",
      reg_no:"",
      session:"",
      phone:"",
      bio:"",
      
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
    const handleSubmission = () => {
      if (!values.name || !values.email || !values.pass||!values.Institute||!values.bio||!values.degree||!values.phone||!values.reg_no||!values.session) {
        setErrorMsg("Fill all fields");
        return;
      }
      setErrorMsg("");
  
      setSubmitButtonDisabled(true);
      createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res) => {
          setSubmitButtonDisabled(false);
          const user = res.user;
          await updateProfile(user, {
            displayName: values.name,
          });
          navigate("/");
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        });
    };
  return (
    <div>
        {/* <Link to="/" className="text-left text-3xl text-red-900">go Home</Link> */}
        <div className="mt-48">
                  <div className="flex flex-col items-center justify-center h-screen bg-white ">
  <div className="p-12  bg-gray-200 rounded shadow-md w-1/3">
    <h1 className="text-3xl font-bold mb-6 text-center">Signup</h1>
    <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
         <InputControl
          label="Degree"
          placeholder="Enter degree"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, degree: event.target.value }))
          }
        />
        
       
         <InputControl
          label="Institute"
          placeholder="Enter Institute"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, Institute: event.target.value }))
          }
        />
         <InputControl
          label="Reg-no"
          placeholder="Enter reg-no"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, reg_no: event.target.value }))
          }
        />
        <InputControl
          label="Session"
          placeholder="Enter session"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, session: event.target.value }))
          }
        />
        <InputControl
          label="Phone-no"
          placeholder="Enter Phone-no"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
        <InputControl
          label="Bio"
          placeholder="say about yourself"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, bio: event.target.value }))
          }
        />
        <b className="text-red-600">{errorMsg}</b>
        <br />
        {/* <Link to="/" className="mx-2 bg-red-600 text-white p-2 rounded-md">Back</Link> */}
        <Link to="/">
        <button className="my-2 mx-2 bg-red-600 text-white p-2 rounded-md ring-1">
            Back
          </button>
          </Link>
           <button className="my-2 bg-blue-600 text-white p-2 rounded-md ring-1" disabled={submitButtonDisabled} onClick={handleSubmission}>
            Signup
          </button>
          
          <p>
            Already have an account?{" "}
            <span className="text-sky-400">
              <Link to="/login">Log in</Link>
            </span>
          </p>
    </div>
    </div>
    </div>
    </div>

  )
}

export default Signup
