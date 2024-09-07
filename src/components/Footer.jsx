import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer className="bg-dark text-light py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h5 className="fw-bold">
                        <span className="me-2">&#127925;</span>Media Player
                    </h5>
                    <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
                    <p>Code licensed Luminar, docs CC BY 3.0.</p>
                    <p>Currently v5.3.2.</p>
                </div>
                <div className="col-md-2">
                    <h5 className="fw-bold">Links</h5>
                    <ul className="list-unstyled">
                        <li><a className="text-light">Landing Page</a></li>
                        <li><a className="text-light">Home Page</a></li>
                        <li><a className="text-light">Watch History Page</a></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h5 className="fw-bold">Guides</h5>
                    <ul className="list-unstyled">
                        <li><a className="text-light">React</a></li>
                        <li><a className="text-light">React Bootstrap</a></li>
                        <li><a className="text-light">React Router</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h5 className="fw-bold">Contact Us</h5>
                    <form className="d-flex">
                        <input type="email" className="form-control" placeholder="Enter your email here" aria-label="Email"/>
                        <button className="btn btn-primary ms-2" type="submit">
                            <span>&#9654;</span>
                        </button>
                    </form>
                    <div className="mt-3">
                        <a className="text-light me-3"><i className="bi bi-twitter"></i></a>
                        <a className="text-light me-3"><i className="bi bi-instagram"></i></a>
                        <a className="text-light me-3"><i className="bi bi-facebook"></i></a>
                        <a className="text-light me-3"><i className="bi bi-linkedin"></i></a>
                        <a className="text-light me-3"><i className="bi bi-telephone"></i></a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <p>&copy; Jan 2024 Batch, Media Player. Built with React.</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer