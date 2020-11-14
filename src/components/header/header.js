import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

import myProfilePic from './images/my_profile_pic.png';

import './css/header.css';

const Header = () => {
    const location = useLocation();

    return (
        <div id="header">
            <Link to="/"><img id="my-pic" src={myProfilePic} alt="Mike Gullo profile pic" /></Link>
            <h3 className="m-0 p-2 bg-header text-white"><span className="small"><sup><u>Mike</u></sup></span> Gullo</h3>
            <div id="lower-div">
                <div id="my-role">
                    Developer / Programmer
                </div>
                <div id="btn-div">
                    {location.pathname === '/'
                        ? <div className="nav-btn btn-inactive">About</div>
                        : <div className="nav-btn btn-active"><Link to="/"><div>About</div></Link></div>
                    }
                    {location.pathname === '/portfolio'
                        ? <div className="nav-btn btn-inactive">Portfolio</div>
                        : <div className="nav-btn btn-active"><Link to="/portfolio"><div>Portfolio</div></Link></div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
