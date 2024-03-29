import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from './'
import { useStateContext } from '../context/StateContext';
import { FaSearch } from 'react-icons/fa'
import { CgProfile } from "react-icons/cg"

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();

    return (
        <div className='navbar-container'>
            <p className='logo'>
                <Link href="/">ASIA Electronics</Link >
            </p>
            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="What are you looking for?" />
                    <button type="submit" className="searchButton">
                        <i className="fa fa-search"> < FaSearch /> </i>
                    </button>
                </div>
            </div>
            <button type="submit" className="searchButton cart-icon hider">
                <i className="fa fa-search"> < FaSearch /> </i>
            </button>
            <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
                {/* <CgProfile /> */}
            </button>
            <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
                <AiOutlineShopping />
                <span className='cart-item-qty'>{totalQuantities}</span>
            </button>


            {showCart && <Cart />}
        </div >
    )
}

export default Navbar