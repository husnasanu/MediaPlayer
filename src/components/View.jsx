import React, { useEffect, useState } from 'react'
import { Row , Col} from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI } from '../services/allAPI'
const View = ({uploadVideoResponse,removeVideoResponseFromCategory}) => {
  const [deleteVideoResponse , setDeleteVideoResponse] = useState("")
  const[allVideos,setAllVideos] = useState([])

  useEffect(()=>{
    getAllVideos()
  },[uploadVideoResponse , deleteVideoResponse,removeVideoResponseFromCategory])

  //get all videos
  const getAllVideos = async ()=>{
    const result = await getAllVideosAPI()
    console.log(result);
    if(result.status>=200 && result.status<300){
      setAllVideos(result.data)
    }
  }
  console.log(allVideos);
  
  return (
    <>
       <Row>
        {
          allVideos.length>0?
               allVideos?.map(video=>(
                 <Col key={video?.id} className='mb-4' sm={12} md={6} lg={4} >
                 <VideoCard setDeleteVideoResponse={setDeleteVideoResponse} displayData={video}/>
                 </Col>
               ))
           :
           <div className="fw-bolder text-danger">Nothing to Display!!</div>    
        } 
        
       </Row>
    </>
  )
}

export default View