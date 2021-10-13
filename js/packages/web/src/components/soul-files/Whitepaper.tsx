import React, { useEffect } from 'react';
import whitepaper from '../../../public/images/WhitepaperThumbnail.jpg'
import whitepaperPDF from '../../files/Soulless-Solomon-Whitepaper.pdf'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'


function Whitepaper() {

    useEffect(() =>{
        Aos.init({duration: 2000})
            },[]);

    return (
        <div className='whitepaperSection'>
             <div data-aos='fade-right' className='whitepaperContainer'>
                <div className='whitepaper'>
                    <a href={whitepaperPDF} target='_blank' rel="noreferrer"><Image src={whitepaper}/></a>
                </div>
            </div>
            <div data-aos='fade-left' className='whitepaperInfo'>
                <h2>The Soulless <a className='glitch'>Whitepaper</a></h2>
                <p>The team behind the project has weaved an eerie, biblical prose into each work of art, instilling the project’s story with sardonic commentary on internet culture and technology, reminiscent of modern artists like street-art sensation Banksy..
                    </p><p>
                    We intend to market the project to a vast community of NFT traders, and carry through on a project roadmap which will see the creation of unique merchandise, and custom assets for owners and traders to outfit their digital profiles..</p><p>
                <a href={whitepaperPDF} target='_blank' rel="noreferrer">Read more in the Soulless Whitepaper</a>
                </p>
            </div>
        </div>
    )
}

export default Whitepaper
