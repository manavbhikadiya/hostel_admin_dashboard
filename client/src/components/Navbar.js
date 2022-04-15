import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import Sidebar from './Sidebar';
const Navbar = () => {

    const history = useHistory()
    // const adminData = useSelector(state=> state.adminDataReducer);
    // const userName = adminData.username.toUpperCase();
    // const full_name = adminData.name;
    // const userEmail = adminData.email;

    const logout = async () =>{
        const res = await fetch('admin/logout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-type":"application/json"
            },
            credentials:"include"
        })
        if(res){
            localStorage.removeItem('college_id');
            localStorage.removeItem('loginToken');
            history.push('/login')
        }else{
            history.push('/');
        }
    }
    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <NavLink to="/" className="logo d-flex align-items-center">
                        <img src={require('../assets/avtar.png')} alt="" />
                        <span className="d-none d-lg-block">Hostel x</span>
                    </NavLink>
                    <i className="bi bi-list toggle-sidebar-btn"></i>
                </div>
                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">

                        <li className="nav-item dropdown pe-3">
                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                <img src={require('../assets/profile-img.jpg')} alt="Profile" className="rounded-circle" />
                                {/* <span className="d-none d-md-block dropdown-toggle ps-2">{userName}</span> */}
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    {/* <h6>{full_name}</h6> */}
                                    {/* <span>{userEmail}</span> */}
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <div className="dropdown-item d-flex align-items-center" href="#" onClick={logout}>
                                        <i className="bi bi-box-arrow-right"></i>
                                        <span>Sign Out</span>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
            <Sidebar />
        </>
    );
}
export default Navbar;