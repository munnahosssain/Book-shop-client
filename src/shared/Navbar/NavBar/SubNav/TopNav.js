import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../presets/images/LOGO.png';
import { FaShoppingCart } from 'react-icons/fa';

const TopNav = () => {
    return (
        <div className="navbar bg-base-100 px-24">
            <div className="navbar-start">
                <Link to='/' className="normal-case text-xl">
                    <img className='w-24' src={logo} alt="" />
                </Link>
            </div>
            <div style={{ color: 'white', fontSize: '16px' }} className="navbar-center">
                <input className='input input-bordered' type="text" placeholder='search' />
            </div>
            <div className='flex'>
                <p>c</p>
                <FaShoppingCart size={32} />
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost">login</button>
                <button className="btn btn-ghost">logOut</button>
            </div>
        </div>
    );
};

export default TopNav;