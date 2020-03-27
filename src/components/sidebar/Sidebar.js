import React, { Component } from 'react'
import { Link } from  'react-router-dom'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                    <nav className="navbar-default navbar-static-side" role="navigation">
                        <div className="sidebar-collapse">
                            <ul className="nav metismenu" id="side-menu">
                            <li className="nav-header">
                                <div className="dropdown profile-element">
                                <img alt="image" className="rounded-circle" src="img/profile_small.jpg" />
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                    <span className="block m-t-xs font-bold">Amudia Kalpa Taruna</span>
                                    <span className="text-muted text-xs block">Admin<b className="caret" /></span>
                                </a>
                                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                    <li><Link className="dropdown-item" to="/contact">Contacts</Link></li>
                                    <li><Link className="dropdown-item" to="/mailbox">Mailbox</Link></li>
                                    <li className="dropdown-divider" />
                                    <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                                </ul>
                                </div>
                                <div className="logo-element">
                                BS
                                </div>
                            </li>
                            <li className="active">
                                <Link to="/dashboard"><i className="fa fa-th-large" /> <span className="nav-label">Dashboard</span></Link>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-bar-chart-o" /> <span className="nav-label">Tables</span><span className="fa arrow" /></a>
                                <ul className="nav nav-second-level collapse">
                                <li><Link to="/users">Users</Link></li>
                                <li><Link to="/books">Books</Link></li>
                                <li><Link to="/categories">Categories</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="mailbox.html"><i className="fa fa-envelope" /> <span className="nav-label">Mailbox </span><span className="label label-warning float-right">16/24</span></a>
                                <ul className="nav nav-second-level collapse">
                                <li><a href="mailbox.html">Inbox</a></li>
                                <li><a href="mail_detail.html">Email view</a></li>
                                <li><a href="mail_compose.html">Compose email</a></li>
                                <li><a href="email_template.html">Email templates</a></li>
                                </ul>
                            </li>


                            <li>
                                <a href="#"><i className="fa fa-files-o" /> <span className="nav-label">Other Pages</span><span className="fa arrow" /></a>
                                <ul className="nav nav-second-level collapse">
                                <li><a href="search_results.html">Search results</a></li>
                                <li><a href="lockscreen.html">Lockscreen</a></li>
                                <li><a href="invoice.html">Invoice</a></li>
                                <li><a href="login.html">Login</a></li>
                                <li><a href="login_two_columns.html">Login v.2</a></li>
                                <li><a href="forgot_password.html">Forget password</a></li>
                                <li><a href="register.html">Register</a></li>
                                <li><a href="404.html">404 Page</a></li>
                                <li><a href="500.html">500 Page</a></li>
                                <li><a href="empty_page.html">Empty page</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-sitemap" /> <span className="nav-label">Menu Levels </span><span className="fa arrow" /></a>
                                <ul className="nav nav-second-level collapse">
                                <li>
                                    <a href="#" id="damian">Third Level <span className="fa arrow" /></a>
                                    <ul className="nav nav-third-level">
                                    <li>
                                        <a href="#">Third Level Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Third Level Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Third Level Item</a>
                                    </li>
                                    </ul>
                                </li>
                                <li><a href="#">Second Level Item</a></li>
                                <li>
                                    <a href="#">Second Level Item</a></li>
                                <li>
                                    <a href="#">Second Level Item</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="css_animation.html"><i className="fa fa-magic" /> <span className="nav-label">CSS Animations </span><span className="label label-info float-right">62</span></a>
                            </li>
                            </ul>
                        </div>
                        </nav>
            </div>

        )
    }
}
