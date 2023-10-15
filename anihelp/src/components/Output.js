import React, { useState, useEffect } from 'react';
import ExperBox from './ExperBox';

function Output(props) {
  const [see, setSee] = useState([]);

  useEffect(() => {
    fetchInfo();
  }, []);

  function fetchInfo() {
    fetch('https://fir-anihelp-default-rtdb.asia-southeast1.firebasedatabase.app/users.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let userData = [];
        for (let key in data) {
          userData.push({ ...data[key], id: key });
        }
        setSee(userData);
      });
  }

  return (
    <div>
      <ExperBox users={see} tar={props.tar} />
    </div>
  );
}

export default Output;
