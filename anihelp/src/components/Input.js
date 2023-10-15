import axios from 'axios';
import React,{useRef, useState} from 'react';

function Input() {
    let nameRef = useRef();
    let mailRef = useRef();
    let degreeRef = useRef();
    let instRef = useRef();
    let exRef = useRef();
    let imgRef = useRef();
    let feeRef = useRef();
    let passRef = useRef();
    function onCreateUser(event){
        event.preventDefault();
        let user = {
            name:nameRef.current.value,
            mail:mailRef.current.value,
            degree:degreeRef.current.value,
            inst:instRef.current.value,
            expert:exRef.current.value,
            imgurl:imgRef.current.value,
            fee:feeRef.current.value,
            pass:passRef.current.value
        }
        axios.post('https://fir-anihelp-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',user);
    }
  return (
    <div>
      <form onSubmit={onCreateUser}>
      <h4 class="flex justify-center items-center mb-2 text-4xl font-bold tracking-tight text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">Enter Your Info</h4>
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

                <div class="flex items-center mb-4">
                <input ref={exRef} id="country-option-1" type="radio" name="countries" value="0" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
                <label for="country-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    General
                </label>
                <input ref={exRef} id="country-option-2" type="radio" name="countries" value="1" class="w-4 h-4 ml-3 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
                <label for="country-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Paultry & Bird
                </label>
                <input ref={exRef} id="country-option-2" type="radio" name="countries" value="2" class="w-4 h-4 ml-3 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
                <label for="country-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Cattle & Horse
                </label>
                <input ref={exRef} id="country-option-2" type="radio" name="countries" value="3" class="w-4 h-4 ml-3 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
                <label for="country-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Fishes
                </label>
                <input ref={exRef} id="country-option-2" type="radio" name="countries" value="4" class="w-4 h-4 ml-3 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
                <label for="country-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Others
                </label>
                </div>
            </div>
            
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input ref={passRef} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
            <button type="submit" class="text-white my-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Input
