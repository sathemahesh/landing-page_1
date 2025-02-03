import React from 'react';
import img_4 from '../assets/img_4.jpg';
import Cards from './Cards'
import Footer from './Footer'
function Middle() {
    return (
        <>

            <div className="container text-center mt-5">
                <div className="row align-items-center g-2"> {/* Vertically center content on small screens */}

                    {/* Image Column */}
                    <div className="col-md-5 border border-primary p-0 me-0 me-5">
                        <img src={img_4} alt="" className="w-100" style={{ maxHeight: '450px', objectFit: 'cover' }} />
                    </div>

                    {/* Content Column */}
                    <div className="col-md-6 border border-warning d-flex flex-column justify-content-center align-items-center ">
                        <h1 className="text-warning-emphasis">Modern Furnitures</h1>
                        <p className="text-warning-emphasis text-center">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Tempore temporibus officiis dicta suscipit repellendus velit maiores eius beatae magni.
                            Quidem, natus at illum quas blanditiis eligendi amet iure aperiam. Eaque.
                        </p>
                        <button className="btn btn-primary mb-2">See More</button>
                    </div>

                </div>
            </div>        

            < Cards />

            <Footer />
        </>
       
    );
}

export default Middle;
