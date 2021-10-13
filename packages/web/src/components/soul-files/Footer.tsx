import React from 'react'
import logo from '../../../public/images/LargeLogo.png'

function Footer() {
    return (
        <div className='footer'>
            <img src={logo} />
            <div className='contact'>
                <h3>Get in touch with us at <a href='mailto:support@soulless-solomon.com'>support@soulless-solomon.com</a></h3>
            </div>
            <div className='footer-socials'>
                <a href='https://www.twitter.com/solomonsnft' target='_blank' rel="noreferrer"><i className="fab fa-twitter"></i></a>
                <a href='https://soulless-solomon.com/discord' target='_blank' rel="noreferrer"><i className="fab fa-discord"></i></a>
                <a href='https://medium.com/@soullesssolomon' target='_blank' rel="noreferrer"><i className="fab fa-medium"></i></a>
            </div>
            <div className='copyright'>
                © Copyright 2021 Soulless Solomon. 
                </div>
        </div>
    )
}

export default Footer
