import React from 'react'
import { Link } from 'react-router-dom'
import landingImg1 from '../assets/img1.png'
import { Card,Button } from 'react-bootstrap'
import landingImg2 from '../assets/img2.avif'

const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container'>
      {/* landing */}
      <div className='row d-flex align-items-center p-5'>
        <div className='col-lg-6 mt-5'>
          <h3>Welcome to <span className='text-warning'> Media Player</span></h3>
          <p className='pt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eos necessitatibus iusto, eveniet nobis quasi! Alias molestiae perspiciatis quisquam aliquam voluptatem beatae quidem magni, debitis vel in nam amet doloremque?</p>
        </div>
        <Link to={'/Home'} className='btn-btn-info'>Get Started</Link>
        <div className='col'></div>
        <div className='col-lg-6'>
          <img  src={landingImg1} alt="Landing image" />
        </div>
      </div>
      {/* features */}
    <div className='my-5'>
      <h3 className='text-center'>Features</h3>
      <div style={{paddingLeft:"100px"}} className='row mt-5'>
        <div className="col-lg-4">
        <Card className="p-2" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={landingImg2} />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
         Users can upload,view and remove videos
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-lg-4">
        <Card className="p-2" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={landingImg2} />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
         Users can upload,view and remove videos
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-lg-4">
        <Card className="p-2" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={landingImg2} />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
         Users can upload,view and remove videos
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
        
      </div>
    </div>
     
     <div className="row border p-5 mb-3 ">
     <div className="col-lg-5">
      <h3 className='text-warning'>Simple Fast And Powerful</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sapiente! Adipisci iure nemo maiores veritatis corporis
         dolorum, ratione quod libero sequi eligendi voluptatum officia nulla dolores culpa, ipsa mollitia corrupti.</p>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed cupiditate consequatur eos molestias natus libero id 
      ratione aliquam officiis quia inventore, quisquam, nobis sunt iste? Nobis eos deleniti maiores in!</p>
     </div>
     <div className="col-1"></div>
     <div className="col-lg-6">
     <iframe width="634" height="634" src="https://www.youtube.com/embed/Po3jStA673E" title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
         </iframe>
     </div>
     </div>
    </div>
  )
}

export default Landing