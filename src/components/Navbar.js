import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Navbar extends Component {
    render(){
        return(
            <nav className="navBar">
                <div className="site-wrap">
                        <div className="site-mobile-menu site-navbar-target">
                            <div className="site-mobile-menu-header">
					            <div className="site-mobile-menu-close ">
						            <span className="icon-close2 h1 js-menu-toggle"></span>
				                </div>
                        
                                <div className="menu-nav">
                                    <ul>
                                        <li><NavLink exact to="/">Homepage</NavLink></li>
                                        <li><NavLink to="/about/">About Us</NavLink></li>
                                        <li><NavLink to="/tutorial/">Tutorials Solutions</NavLink></li>
                                        <li><NavLink to="/portfolio/">Our Portfolio</NavLink></li>
                                        <li><a className="profile-link" href="https://www.eolatunde.com/blog" target="blank" referrer="">Our Blog</a></li>
                                       
                                        <li><NavLink to="/contact/">Contact Us</NavLink></li>
                                       
                                        
                                    </ul>
                                </div>
				            </div>
			            </div>
               
                        <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
                            <div className="container-fluid">
                                <div className="d-flex align-items-center">
                                    <div className="site-logo mr-auto w-25">
                                        <a href="/" className="nav-logo">
                                            <img src="/assets/images/logo192.png" alt="logo" />
                                        </a>
                                    </div>

                                        <div className="mx-auto text-center">
                                            <nav className="site-navigation position-relative text-right" role="navigation">
                                                <ul className="site-menu main-menu js-clone-nav mx-auto d-none d-lg-block  m-0 p-0">
                                                    <li><NavLink exact to="/">Homepage</NavLink></li>
                                                    <li><NavLink to="/about/">About Us</NavLink></li>
                                                    <li><NavLink to="/tutorial/">Tutorials</NavLink></li>
                                                    <li><NavLink to="/portfolio/">Portfolio</NavLink></li>
                                                </ul>
                                            </nav>
                                        </div>

                                        <div className="ml-auto w-25">
                                            <nav className="site-navigation position-relative text-right" role="navigation">
                                                <ul className="site-menu main-menu  js-clone-nav mr-auto d-none d-lg-block m-0 p-0">
                                                <li><a className="profile-link" href="https://skillstechnologies.com/blog" target="blank" referrer="">Our Blog</a></li>
                                                    <li><NavLink to="/contact/">Contact Us</NavLink></li>
                                                </ul>
                                            </nav>
                                            <a href="/" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle float-right"><span className="icon-menu h1"></span></a>
                                        </div>
                                </div>
                            </div>
                        </header>
                </div>
            </nav>
        );
    }
}
export default Navbar;