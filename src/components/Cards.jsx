import React from 'react';

import img_6 from '../assets/img_6.jpg';
import img_7 from '../assets/img_7.jpg';
import  card from '../style/Card.css'

function Cards() {
    return (
        <div className="container text-center mt-5 mb-5">
            <div className="row g-4"> {/* Add gap between cards */}
                {[img_7, img_6, img_7].map((img, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card">
                            <img src={img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card Title {index + 1}</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <a href="#" className="btn btn-primary">Go Somewhere</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
