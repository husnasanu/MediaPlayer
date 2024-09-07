import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'


const History = () => {
  // Get all history details from json server (db.json)
  const [historyDetails , setHistoryDetails] = useState([])

  useEffect(()=>{
    getHistory()
  },[])

  const getHistory = async ()=>{
    const response = await getHistoryAPI()
    console.log(response);
    if(response.status>=200 && response.status<300){
      setHistoryDetails(response.data)
    }
    
  }
  console.log(historyDetails);

  //delete history 
  const removeHistory = async (historyId)=>{
    await removeHistoryAPI(historyId)
    getHistory()
  }
  
  return (
    <div className='container' style={{paddingTop:'100px'}}>
       <div className="container d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/history'}>Back to Home</Link>
      </div>
      <table className='table my-5 shadow'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Time Spamp</th>
            <th><i className='fa-solid fa-ellipsis-vertical'></i> </th>
          </tr>
        </thead>
        <tbody>
         {
           historyDetails.length>0?
              historyDetails?.map((details,index)=>(
                <tr key={details?.id}> 
                <td>{index+1}</td>
                <td>{details?.caption}</td>
                <td> <a href={details?.link} target='_blank'>{details?.link}</a> </td>
                <td>{details?.timeStamp}</td>
                <td> <button onClick={()=>removeHistory(details?.id)} className='btn'> <i class="fa-solid fa-trash text-danger"></i></button></td>
              </tr>
              ))
              :
              <div className="text-danger text-center fw-bolder">Your Watch History is Empty!!!</div>
         }
        </tbody>
      </table>
    </div>
  )
}

export default History