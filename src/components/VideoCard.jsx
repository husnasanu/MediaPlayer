import React ,{useState} from 'react'
import { Card ,Modal} from 'react-bootstrap'
import { storeHistoryAPI , removeVideoAPI } from '../services/allAPI';

const VideoCard = ({displayData , setDeleteVideoResponse}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () =>{
    setShow(true);
    // save watched history in server
    const {caption,link} = displayData       //destructoring of object  
    //get date&time to watch video
    const sysTime = new Date()
    const timeStamp = sysTime.toLocaleString('en-US',{timeZoneName:'short'})
    console.log(timeStamp);
    const videoDetails = {caption,link,timeStamp }
    await storeHistoryAPI(videoDetails)
    
  }
  const removeVideo = async(videoId)=>{
    await removeVideoAPI(videoId)
  //pass response to view component (child to parent)
   setDeleteVideoResponse(result?.data)
  }
  const videoDragStart = (e,videoId)=>{
    console.log(`Dragging strarted with video id : ${videoId}`);
    e.dataTransfer.setData("vId",videoId)
  }

  return (
    <>

<Card draggable={true} onDragStart={e=>videoDragStart(e,displayData?.id)} style={{height:'250px'}} >
      <Card.Img onClick={handleShow} variant="top" style={{height:'150px'}} src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex align-items-center justify-content-between '>
          <p>{displayData?.caption}</p>
          <button onClick={()=>removeVideo(displayData?.id)} className='btn'> <i className=" fa-solid fa-trash text-danger"></i> </button>
        </Card.Title>
      </Card.Body>
    </Card>

    <Modal size='lg' centered  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="360" src={`${displayData?.link}?autoplay=1`} title="Caption"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
         </iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard