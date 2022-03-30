import React, { Component } from 'react';
import '../sass/product.scss';
import products from '../data/product.json';
import {Outlet,Link } from "react-router-dom";



export default class List extends Component {
    render() {
        return (
            <>
                <section className='list-product'>
                    <div className="container my-5">
                        <div className='row'>
                            <div className="col-md-3">
                                <section className="panel">
                                    <header className="panel-heading">
                                        Category
                                    </header>
                                    <div className="panel-body">
                                        <ul className="nav prod-cat">
                                            <li className='nav-item'>
                                                <a className='nav-link' href="#"><i className="fa fa-angle-right"></i> Jeans</a>
                                            </li>
                                            <li className='nav-item'>
                                                <a className='nav-link' href="#"><i className="fa fa-angle-right"></i> Jewellery</a>
                                            </li>
                                            <li className='nav-item'> 
                                                <a className='nav-link' href="#"><i className="fa fa-angle-right"></i> Electronics</a>
                                            </li>
                                            <li className='nav-item'>
                                                <a className='nav-link' href="#"><i className="fa fa-angle-right"></i> Sports</a>
                                            </li>
                                            <li className='nav-item'>
                                                <a className='nav-link' href="#"><i className="fa fa-angle-right"></i> Technology</a>
                                            </li>
                                            <li className='nav-item'>
                                                <a className='nav-link' href="#"><i className="fa fa-angle-right"></i> Watches</a>
                                            </li>
                                            <li className='nav-item'>
                                                <a className='nav-link' href="#"><i className="fa fa-angle-right"></i> Accessories</a>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                            <div className="col-md-9">
                                <div className="wrapper">
                                    <div className="container my-5">
                                        <div className="row">
                                            {
                                            products.map((product) =>
                                                <div className="col-md-4 my-3" key={product.id}>
                                                    <div className="card text-center">
                                                        <div className="image"> 
                                                            <img src={product.image} width="200" height="200"/> 
                                                        </div>
                                                        <div className="about-product text-center">
                                                            <h5>{product.name}</h5>
                                                            <h6>{product.price}</h6> 
                                                            {/* <button className="btn btn-cart">Cart</button> */}
                                                            <Link to="/detail" className="btn btn-cart">Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                            }
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