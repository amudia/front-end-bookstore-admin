import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Form_edit_user extends Component {
    render() {
        return (
            <div>
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="col-lg-10">
                        <h2>Edit User</h2>
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to ="/dashboard">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <span>Forms</span>
                        </li>
                        <li className="breadcrumb-item active">
                            <strong>Users</strong>
                        </li>
                        </ol>
                    </div>
                    <div className="col-lg-2">
                    </div>
                </div>
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="ibox ">
                            <div className="ibox-title">
                            <div className="ibox-tools">
                                <a href="fake_url" className="collapse-link">
                                <i className="fa fa-chevron-up" />
                                </a>
                                <a className="dropdown-toggle" data-toggle="dropdown" href="fake_url">
                                <i className="fa fa-wrench" />
                                </a>
                                <ul className="dropdown-menu dropdown-user">
                                <li><a href="fake_url" className="dropdown-item">Config option 1</a>
                                </li>
                                <li><a href="fake_url" className="dropdown-item">Config option 2</a>
                                </li>
                                </ul>
                                <a href="fa" className="close-link">
                                <i className="fa fa-times" />
                                </a>
                            </div>
                            </div>
                            <div className="ibox-content">
                            <form method="get">
                                <div className="form-group  row"><label className="col-sm-2 col-form-label">First Name</label>
                                <div className="col-sm-10"><input type="text" className="form-control" onChange="" defaultValue="Amudia"/></div>
                                </div>
                                <div className="hr-line-dashed" />
                                <div className="form-group  row"><label className="col-sm-2 col-form-label">Last Name</label>
                                <div className="col-sm-10"><input type="text" className="form-control" onChange="" defaultValue="Kalpa Taruna" /></div>
                                </div>
                                <div className="hr-line-dashed" />
                                <div className="form-group row"><label className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10"><input type="email" className="form-control" onChange="" defaultValue="amudia.ktaruna@gmail.com" /> <span className="form-text m-b-none">Email must be valid.</span>
                                </div>
                                </div>
                                <div className="hr-line-dashed" />

                                <div className="form-group row">
                                <div className="col-sm-4 col-sm-offset-2">
                                    <button className="btn btn-white btn-sm" type="submit">Cancel</button>
                                    <button className="btn btn-primary btn-sm" type="submit">Save changes</button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
