import React, { Component } from 'react';
import {Outlet,Link } from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className="bg-dark text-white text-center text-lg-start" >
                <div className="container p-4">
                    <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                            voluptatem veniam, est atque cumque eum delectus sint!
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        {/* <h5 className="text-uppercase">Links</h5> */}

                        <ul className="list-unstyled mb-0">
                        <li>
                            <Link to="/" className="nav-link text-white">Home</Link>
                        </li>
                        <li>
                            <Link to="/feedback" className="nav-link text-white">Feedback</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="nav-link text-white">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link text-white">About Us</Link>
                        </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Links</h5>

                        <ul className="list-unstyled">
                        <li>
                            <a href="#!" className="text-white">Link 1</a>
                        </li>
                        <li>
                            <a href="#!" className="text-white">Link 2</a>
                        </li>
                        <li>
                            <a href="#!" className="text-white">Link 3</a>
                        </li>
                        <li>
                            <a href="#!" className="text-white">Link 4</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="text-center p-3">
                    © 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/"> Just Shop</a>
                </div>
                </footer>
            </>
        );
    }
}