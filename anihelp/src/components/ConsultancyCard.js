import React from 'react'

function ConsultancyCard(props) {
  return (
    <>
            <div className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-blue-400">
              <figure><img src={props.photo} className='rounded-lg h-1/3' alt={props.title} /></figure>
              <div className="card-body mx-2">
              <h2 className="card-title text-2xl text-center font-bold py-2">{props.title}</h2>
                {/* <h2 className="card-title">{props.title}</h2> */}
                <p className='text-center'>{props.info}</p>
                <div className="inline-flex items-center px-3 my-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <button className="btn btn-primary">Consult Now</button>
                </div>
              </div>
            </div>
    </>
  )
}

export default ConsultancyCard