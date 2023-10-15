import React from 'react';

function ExpertCard(props) {
    let specialization;
    if (props.expert == 0) {
      specialization = "General";
    } else if (props.expert == 1) {
      specialization = "Poultry & Bird";
    } else if (props.expert == 2) {
      specialization = "Cattle & Horse";
    } else if (props.expert == 3) {
        specialization = "Fishes";
    } else if (props.expert == 4) {
        specialization = "Others";
      }
  
    return (
      <div
        className="flex justify-center m-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={props.imgurl}
          alt={props.name}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Degree: {props.degree}
          </p>
          <p>
            Specialize: {specialization}
          </p>
        </div>
        <div className=''>
          <h4 className='flex items-center mb-2 text-4xl font-bold tracking-tight text-gray-900 hover:text-red-600'>{props.fee}/=</h4>
        <button className='flex justify-center bg-red-600 text-white px-4 py-2 rounded'>Contact</button>
        </div>
        <div>
        </div>
      </div>
    );
  }
  

export default ExpertCard;
