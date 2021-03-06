import React  from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";


const Navbar = () => {


    return (
        <motion.nav className="navbar navbar-expand-lg navbar-mainbg" 
          initial={{opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 }}}
        >

            <NavLink className="navbar-brand navbar-logo" to="/" exact >
                Big.maps
            </NavLink>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i className="fas fa-bars text-white"></i>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav ml-auto">

                    <div className="hori-selector">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>

                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/" exact>
                            <i className="fas fa-home"></i>ANASAYFA
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" exact>
                            <i className="fas fa-hamburger"></i>MENÜ
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/service" exact>
                            <i className="far fa-clone"></i>İLETIŞIM
                        </NavLink>
                    </li>





                </ul>

            </div>

        </motion.nav>
    )
}

export default Navbar;