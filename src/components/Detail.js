import React, { Component } from 'react';
import '../sass/detail.scss';

export default class Detail extends Component {
    render() {
        return (
            <>
                <section className='detail-product'>
                    <div className="container">
                        <div className="row dd-flex justify-content-center">
                            <div className="col-md-8">
                                <div className="card px-3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="d-flex flex-row align-items-center"> 
                                                <i className='fa fa-apple fs-1'></i> 
                                                <span className="fw-bold ms-1 fs-5">Watch</span> 
                                            </div>
                                            <h1 className="fs-1 ms-1 mt-3">Watch Series 4</h1>

                                            <div className="ms-1"> 
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> 
                                            </div>
                                            <div className="mt-5 radio-buttons"> 
                                                <label className="radio"> 
                                                    <input type="radio" name="code" value="grey" checked /> 
                                                    <span></span> 
                                                </label> 
                                                <label className="radio"> 
                                                    <input type="radio" name="code" value="pink"/> 
                                                    <span></span> 
                                                </label> 
                                                <label className="radio"> 
                                                    <input type="radio" name="code" value="black"/> 
                                                    <span></span> 
                                                </label> 
                                            </div>
                                            <div className='action mt-5'>
                                                <button className="btn btn-info"> 
                                                    <span>Add to Cart</span> 
                                                    <i className="ms-2 fa fa-long-arrow-right"></i> 
                                                </button> 
                                                <button className="btn btn-primary mx-3"> 
                                                    <span>Order Now</span> 
                                                    <i className="ms-2 fa fa-long-arrow-right"></i> 
                                                </button> 
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="product-image"> 
                                                <img src="https://m.media-amazon.com/images/I/51+Xme5bz5L._AC_UY218_.jpg" width="200" height="400" /> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}