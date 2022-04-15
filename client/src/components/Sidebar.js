import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link activeLink" to="/">
                            <i className="fa fa-list"></i>
                            <span className='sideBarItemName'>Hostel List</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link activeLink" to="/addHostel">
                            <i className="fa fa-home"></i>
                            <span className='sideBarItemName'>Add Hostel</span>
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </>
    )
}
export default Sidebar;