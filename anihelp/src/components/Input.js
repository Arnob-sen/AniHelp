import axios from 'axios';
import React, { useRef, useState } from 'react';

function Input() {
  let nameRef = useRef();
  let mailRef = useRef();
  let degreeRef = useRef();
  let instRef = useRef();
  let exRef = useRef();
  let imgRef = useRef();
  let feeRef = useRef();
  let passRef = useRef();

  // Add a state variable for displaying an alert
  const [showAlert, setShowAlert] = useState(false);

  function onCreateUser(event) {
    event.preventDefault();
    let user = {
      name: nameRef.current.value,
      mail: mailRef.current.value,
      degree: degreeRef.current.value,
      inst: instRef.current.value,
      expert: exRef.current.value,
      imgurl: imgRef.current.value,
      fee: feeRef.current.value,
      pass: passRef.current.value
    };
    
    axios.post('https://fir-anihelp-default-rtdb.asia-southeast1.firebasedatabase.app/users.json', user)
      .then((response) => {
        if (response.status === 200) {
          // Show the alert when the request is successful
          setShowAlert(true);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  // Function to hide the alert
  function hideAlert() {
    setShowAlert(false);
  }

  return (
    <div>
      <form onSubmit={onCreateUser}>
        <h4 className="flex justify-center items-center mb-2 text-4xl font-bold tracking-tight text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">Enter Your Info</h4>
        <hr></hr>
        <div class="m-12">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input ref={nameRef} type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required/>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input ref={mailRef} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required/>
            <label for="degree" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Degree</label>
            <input ref={degreeRef} type="degree" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="DVM" required/>
            <label for="inst" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Institute</label>
            <input ref={instRef} type="inst" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="BAU" required/>
            <label for="fee" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fee</label>
            <input ref={feeRef} type="fee" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="500" required/>
            <label for="img" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Url</label>
            <input ref={imgRef} type="img" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="URL.com" required/>
            <div>
            <label for="ex" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expert in:</label>

            <div class="flex">
            <div class="flex items-center mr-4">
                <input ref={exRef} id="inline-radio" type="radio" value="0" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="inline-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">General</label>
            </div>
            <div class="flex items-center mr-4">
                <input ref={exRef} id="inline-2-radio" type="radio" value="1" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="inline-2-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Paultry & Bird</label>
            </div>
            <div class="flex items-center mr-4">
                <input ref={exRef} id="inline-2-radio" type="radio" value="2" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="inline-2-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cattle & Horse</label>
            </div>
            <div class="flex items-center mr-4">
                <input ref={exRef} id="inline-2-radio" type="radio" value="3" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="inline-2-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fishes</label>
            </div>
            <div class="flex items-center mr-4">
                <input ref={exRef} checked id="inline-checked-radio" type="radio" value="4" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="inline-checked-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Others</label>
            </div>
            </div>
            </div>     
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input ref={passRef} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
            <button type="submit" className="text-white my-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus-ring-blue-800">Submit</button>
            <a href='/' className="text-white flex-wrap m-6 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover-bg-red-700 dark:focus-ring-red-800">Home</a>
        </div>
      </form>

      {showAlert && (
        <div id="alert-3" className="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
          <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <span className="sr-only">Info</span>
          <div className="ml-3 text-sm font-medium">
            Your Form Has Been Submitted Successfully!!
          </div>
          <button type="button" onClick={hideAlert} className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover-bg-gray-700" data-dismiss-target="#alert-3" aria-label="Close">
            <span className="sr-only">Close</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default Input;