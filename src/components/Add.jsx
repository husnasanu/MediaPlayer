import React ,{useState} from 'react'
import { Modal ,Button , FloatingLabel , Form  } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadVideoAPI } from '../services/allAPI';

const Add = ({setUploadVideoResponse}) => {

  // for invalid utube link alert
  const [invalidLink,setInvalidLink] = useState(false)

  //store values in json server
  const [videoDetails,setVideoDetails] = useState({
    caption:"",url:"",link:""
  })
  
  const [show, setShow] = useState(false);
console.log(videoDetails);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//for utube video address to embed link
  const getEmbedURL = (link)=>{
    if(link.includes("v=")){
      let videoId = link.split("v=")[1].slice(0,11)
      console.log(videoId);
      setVideoDetails({...videoDetails,link:`https://www.youtube.com/embed/${videoId}`})
       setInvalidLink(false)
    }else{
      //invalid url
      console.log("Invalid URL");
      setInvalidLink(true)
      setVideoDetails({...videoDetails,link:""})
      
    }
  }

  const handleUpload = async ()=>{
    console.log("inside handle upload");
    const {caption,url,link} = videoDetails
    if(caption && url && link){
      //  toast.success("proceed to api")
      const result = await uploadVideoAPI(videoDetails)
      console.log(result);
      if(result.status>=200 && result.status<=300){
        handleClose()
        setVideoDetails({caption:"",url:"",link:""})
        // toast.success(`${result?.data?.caption}  added to your collection!!! `)  
          
        setUploadVideoResponse(result)
      }
    }else{
      toast.warning("Please fill the form completely")
    }
    
  }
  return (
   <>
   <div className='d-flex align-items-center'>
    <h5>Upload New Video</h5>
    <Button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>
       +
      </Button>
   </div>

   <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border rounded p-3'>
          <FloatingLabel
        controlId="floatingInputCaption" label="Video Caption" className="  mb-3"  >
    
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInputImage" label="Image URL" className="  mb-3"  >
    
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,url:e.target.value})}  type="text" placeholder="Image URL" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInputLink" label=" Youtube Video Link" className="  mb-3"  >
    
        <Form.Control onChange={e=>getEmbedURL(e.target.value)}  type="text" placeholder="Youtube Video Link" />
      </FloatingLabel>
      {
                invalidLink &&
                <div className='text-danger fw-bolder mt-3'>
                    Invalid Youtube Link
                </div>
              }
          </div>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
   </>
  )
}

export default Add