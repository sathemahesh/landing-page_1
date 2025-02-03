import React from 'react'
import img_1 from '../assets/img_1.jpg'
import img_2 from '../assets/img_2.jpg'
import img_3 from '../assets/img_3.jpg'
function Carousel() {
  return (
      
       <div className="container mt-2">
        <div className="row">

              <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                      <div className="carousel-item active">
                          <img
                              src={img_1}
                              className="d-block w-100"
                              alt="..."
                              style={{ width: '696px', height: '300px' }}
                          />

                      </div>
                      <div className="carousel-item">
                          <img
                              src={img_2}
                              className="d-block w-100"
                              alt="..."
                              style={{ width: '696px', height: '300px' }}
                          />

                      </div>
                      <div className="carousel-item">
                          <img
                              src={img_3}
                              className="d-block w-100"
                              alt="..."
                              style={{ width: '696px', height: '300px' }}
                          />

                      </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                  </button>
              </div>

        </div>
       </div>
      

  )
}

export default Carousel