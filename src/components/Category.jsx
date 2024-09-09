import React ,{useEffect, useState} from 'react'
import {Modal, FloatingLabel , Form  ,Button} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryAPI, getCategoryAPI, getSingleVideosAPI, removeCategoryAPI, removeVideoAPI, updateCategoryAPI } from '../services/allAPI';

const Category = ({setRemoveVideoResponseFromCategory}) => {
  const [allCategory,setAllCategory] = useState([])
  const [categoryName , setCategoryName] = useState("")  // store category in to json server 

  useEffect(()=>{
    getAllCategory()
  },[])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async ()=>{
    if(categoryName){
     //api call
     await addCategoryAPI({categoryName,allVideos:[]})
      setCategoryName("")
      handleClose()
      getAllCategory()
    }else{
      toast.warning("Please fill the form completely")
    }
  }
  const getAllCategory = async()=>{
    const response = await getCategoryAPI()
    if(response.status>=200 && response.status<300){
      setAllCategory(response.data)
    }
  }
  console.log(allCategory);
  
  const removeCategory = async (categoryId)=>{
    await removeCategoryAPI(categoryId)
    getAllCategory()
  }
  const dragOverCategory = e=>{
    e.preventDefault()
  }
  const videoDropped = async (e,categoryId)=>{
    const videoId = e.dataTransfer.getData("vId")
    console.log(`video id :${videoId} dropped inside category id : ${categoryId}`);
    // add video to category
    //get details of video added in the category
    const {data} = await getSingleVideosAPI(videoId)
    console.log(data);
    let selectedCategory = allCategory?.find(item=>item.id==categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    //save updated category to json server using api call
    await updateCategoryAPI(categoryId,selectedCategory)
    const result = await removeVideoAPI(videoId)
    setRemoveVideoResponseFromCategory(result)
    getAllCategory()

    
  }
  return (
    <>
    <div className="d-flex justify-content-around">
      <h5>All Categories</h5>
      <button onClick={handleShow} style={{width:'50px', height:'50px'}}
            className='btn btn-info rounded-circle fw-bolder fs-5'> + </button>
    </div>
           
        <div className="container-fluid mt-3">
        {
           allCategory.length>0?
             allCategory?.map(categoryDetails=>(

              <div droppable={true} onDragOver={e=>dragOverCategory(e)} onDrop={e=>videoDropped(e,categoryDetails?.id)} key={categoryDetails?.id} className="border rounded p-3 mb-2">
              <div className="d-flex justify-content-between">
                 <h5>{categoryDetails?.categoryName}</h5>
                 <button onClick={()=>removeCategory(categoryDetails?.id)} className='btn'> <i className='fa-solid fa-trash text-danger'></i> </button>
                 </div>
                 <div className="row mt-2">
                   <div className="col-lg-6">
                     {/* Video of Particular category */}
                     
                   </div>
                 </div>
                    </div>

             ))      
         :
           <div className="fw-bolder text-center text-danger">No Categories are added yet!!</div>
         }
          </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInputName" label="Category Name" className="  mb-3"  >
        <Form.Control onChange={e=>setCategoryName(e.target.value )} type="text" placeholder="Category Name" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}

export default Category