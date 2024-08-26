import React from 'react';
import './App.css'
import {Link, Outlet ,BrowserRouter as Router} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light ">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand fw-bolder fs-5 text-primary-emphasis" >
                        Lo_Consulting
                    </Link>
                    <Link to="/" className="offset-4 navbar-brand" >Accueil</Link>
                    <Link to="/creerBlog" className=" offset-1 navbar-brand" >Creer un blog</Link>
                    <Link to="/a-propos" className="offset-1 navbar-brand" >A Propos</Link>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <Outlet/>
        </>
    );
};

export default Navbar;

// rsf