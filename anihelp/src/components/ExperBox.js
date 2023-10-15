import React from 'react'
import ExpertCard from './ExpertCard';
function ExperBox(props) {
  return (
    <div className='flex justify-center'>
      {props.users.map((users)=>{
        if(users.expert == props.tar || users.expert == 0){
            return(
                <ExpertCard name={users.name} imgurl={users.imgurl} degree={users.degree} expert={users.expert} fee={users.fee} tar={props.tar}/>
            )
        }
    
      })}
    </div>
  )
}

export default ExperBox;
