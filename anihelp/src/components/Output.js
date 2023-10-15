import React, { useState } from 'react'

function Output() {
    let [see,setSet] = useState([]);
    function fetchInfo(){
        fetch('https://fir-anihelp-default-rtdb.asia-southeast1.firebasedatabase.app/users.json')
    }
  return (
    <div>
      
    </div>
  )
}

export default Output;