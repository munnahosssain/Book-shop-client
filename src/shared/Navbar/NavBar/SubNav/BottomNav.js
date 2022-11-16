import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => {
    const menu = <>
        <li><Link>হোম</Link></li>
        <li><Link>বই</Link></li>
        <li><Link>লেখক</Link></li>
        <li><Link>পোশাক</Link></li>
        <li><Link>লগ</Link></li>
        <li><Link>ষ্টেশনারী</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn">Get</a> */}
            </div>
        </div>
    );
};

export default BottomNav;