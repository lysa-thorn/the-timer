import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";

export default class Register extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row m-5 no-gutters shadow-lg">
                        <div className="col-md-6 d-none d-md-block">
                            <img src="https://www.ewatchwholesale.com/public/uploads/banners/570x255/First-Banner-20201508-New%20Project%20(3).jpg" width="100%" className="img-fluid" style={{ height:"300px" }} />
                        </div>
                        <div className="col-md-6 bg-white p-5">
                            <h3 className="pb-3">Register Form</h3>
                            <div className="form-style">
                                <form>
                                    <div className="form-group pb-3">
                                        <input type="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="form-group pb-3">
                                        <input type="password" placeholder="Password" className="form-control" />
                                    </div>
                                    <div className="form-group pb-3">
                                        <input type="password" placeholder="confirm password" className="form-control" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                        </div>
                                    </div>
                                    <div className="pb-2">
                                        <button type="submit" className="btn btn-dark w-100 font-weight-bold mt-2">Register</button>
                                    </div>
                                </form>
                                <div className="pt-4 text-center">
                                    Do you have account yet?: <Link to="/login">Sign In</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}