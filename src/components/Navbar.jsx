import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">EDGCUT</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-3">
                            <a className="nav-link active btn btn-warning" aria-current="page" href="#"><span className="text-success"> Home </span></a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link btn btn-warning" href="#"><span className="text-white"> About </span></a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link btn btn-warning" href="#"><span className="text-white"> Furnitures </span></a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link btn btn-warning" href="#"><span className="text-white"> Blog </span></a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link btn btn-warning" href="#"><span className="text-white"> Contact us </span></a>
                        </li>
                        <li className="nav-item mx-3 d-lg-none">
                            <a className="nav-link btn btn-warning" href="#"><span className="text-white"> Login Here </span></a>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav ms-auto d-none d-lg-flex">
                    <li className="nav-item">
                        <a className="nav-link btn btn-warning" href="#"><span className="text-white"> Login Here </span></a>
                    </li>
                </ul>
               
            </div>
        </nav>
    );
}

export default Navbar;
