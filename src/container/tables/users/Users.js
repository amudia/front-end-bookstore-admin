import React, { Component } from 'react'
import { Link } from  'react-router-dom'

export default class Users extends Component {
    render() {
        return (
            <div>
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="col-lg-10">
                        <h2>Data Tables</h2>
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/dashboard">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <span>Tables</span>
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
                            <h5>Users Table</h5>
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
                                <a href="fake_url" className="close-link">
                                <i className="fa fa-times" />
                                </a>
                            </div>
                            </div>
                            <div className="ibox-content">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-hover dataTables-example">
                                <thead>
                                    <tr>
                                    <th>ID User</th>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Created On</th>
                                    <th>Updated On</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="gradeX">
                                    <td>ID0000001</td>
                                    <td>Amudia Kalpa Taruna</td>
                                    <td>amudia.ktaruna@gmail.com</td>
                                    <td>Admin</td>
                                    <td>3/27/2020</td>
                                    <td>3/27/2020</td>
                                    <td className="center">
                                        <Link to="/edit_user" class="btn btn-success " type="button"><i class="fa fa-edit"></i>&nbsp;Edit</Link>
                                        <span> &nbsp;&nbsp;&nbsp;&nbsp; </span>
                                        <button class="btn btn-danger " type="button"><i class="fa fa-trash"></i>&nbsp;Delete</button>
                                    </td>
                                    </tr>
                                </tbody>

                                </table>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

            </div>
        )
    }
}
