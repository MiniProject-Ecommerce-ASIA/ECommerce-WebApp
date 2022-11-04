import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='footer-container'>
            <p>2022 ASIA Electronics All Rights Reserved</p>
            <p className='icons'>
                <AiFillInstagram />
                <AiOutlineTwitter />
            </p>
            {/* <button type="button" className="" onClick{() =>
            

            }>

            </button> */}
        </div>
    )
}

export default Footer