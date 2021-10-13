import React, {useEffect} from 'react'

import sol1 from '../../cards/Sol1.jpg'
import sol2 from '../../cards/Sol2.jpg'
import sol3 from '../../cards/Sol3.jpg'
import sol4 from '../../cards/Sol4.jpg'
import sol5 from '../../cards/Sol5.jpg'
import sol6 from '../../cards/Sol6.jpg'
import sol7 from '../../cards/Sol7.jpg'
import sol8 from '../../cards/Sol8.jpg'
import sol9 from '../../cards/Sol9.jpg'
import sol10 from '../../cards/Sol10.jpg'
import sol11 from '../../cards/Sol11.jpg'
import sol12 from '../../cards/Sol12.jpg'
import sol13 from '../../cards/Sol13.jpg'
import sol14 from '../../cards/Sol14.jpg'
import sol15 from '../../cards/Sol15.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Image from 'next/image'


function CardGrid() {
    useEffect(() =>{
Aos.init({duration: 2000})
    },[]);

    return(
        <div className='cardgrid' id="collection">
            <div data-aos='fade-right' className='cardExplaination'>
                <h2>An <a className='glitch-color'>NFT</a> Collection on the <a className='glitch-color'>Solana</a> Blockchain</h2>
                <p>Welcome to Soulless Solomon. A unique NFT experience from a collective of writers, game designers, filmmakers, and illustrators from a variety of disciplines who share a passion for unique, meaningful art and blockchain technology.
</p><p>
Soulless Solomon is our foray into self-reflexive storytelling through digital art. A project that reflects our collective relationship with technology and the digital world through the character of Solomon - a once wise king, who lost his identity to the digital ether.
</p><p>
7,777 unique collectible characters, one mission. To help Solomon find his soul. Hopefully you can avoid losing yours in the process…</p>
            </div>
            <div data-aos='fade-left' className='gallery'>
                <figure className='gallery__item gallery__item--1'>
                    <Image src={sol1} className="gallery__img" alt="Image 1"/>
                </figure>
                <figure className="gallery__item gallery__item--2">
                    <Image src={sol2} className="gallery__img" alt="Image 2"/>
                </figure>
                <figure className="gallery__item gallery__item--3">
                    <Image src={sol3} className="gallery__img" alt="Image 3"/>
                </figure>
                <figure className="gallery__item gallery__item--4">
                    <Image src={sol4} className="gallery__img" alt="Image 4"/>
                </figure>
                <figure className="gallery__item gallery__item--5">
                    <Image src={sol5} className="gallery__img" alt="Image 5"/>
                </figure>
                <figure className="gallery__item gallery__item--6">
                    <Image src={sol6} className="gallery__img" alt="Image 6"/>
                </figure>
                <figure className='gallery__item gallery__item--7'>
                    <Image src={sol7} className="gallery__img" alt="Image 1"/>
                </figure>
                <figure className="gallery__item gallery__item--8">
                    <Image src={sol8} className="gallery__img" alt="Image 2"/>
                </figure>
                <figure className="gallery__item gallery__item--9">
                    <Image src={sol9} className="gallery__img" alt="Image 3"/>
                </figure>
                <figure className="gallery__item gallery__item--10">
                    <Image src={sol10} className="gallery__img" alt="Image 4"/>
                </figure>
                <figure className="gallery__item gallery__item--11">
                    <Image src={sol11} className="gallery__img" alt="Image 5"/>
                </figure>
                <figure className="gallery__item gallery__item--12">
                    <Image src={sol14} className="gallery__img" alt="Image 6"/>
                </figure>
                <figure className="gallery__item gallery__item--13">
                    <Image src={sol13} className="gallery__img" alt="Image 3"/>
                </figure>
                <figure className="gallery__item gallery__item--14">
                    <Image src={sol10} className="gallery__img" alt="Image 4"/>
                </figure>
                <figure className="gallery__item gallery__item--15">
                    <Image src={sol15} className="gallery__img" alt="Image 5"/>
                </figure>
                <figure className="gallery__item gallery__item--16">
                    <Image src={sol12} className="gallery__img" alt="Image 6"/>
                </figure>


                <figure className='gallery__item gallery__item--17'>
                    <Image src={sol1} className="gallery__img" alt="Image 1"/>
                </figure>
                <figure className="gallery__item gallery__item--18">
                    <Image src={sol2} className="gallery__img" alt="Image 2"/>
                </figure>
                <figure className="gallery__item gallery__item--19">
                    <Image src={sol3} className="gallery__img" alt="Image 3"/>
                </figure>
                <figure className="gallery__item gallery__item--20">
                    <Image src={sol4} className="gallery__img" alt="Image 4"/>
                </figure>
                <figure className="gallery__item gallery__item--21">
                    <Image src={sol5} className="gallery__img" alt="Image 5"/>
                </figure>
                <figure className="gallery__item gallery__item--22">
                    <Image src={sol6} className="gallery__img" alt="Image 6"/>
                </figure>
                <figure className='gallery__item gallery__item--23'>
                    <Image src={sol7} className="gallery__img" alt="Image 1"/>
                </figure>
                <figure className="gallery__item gallery__item--24">
                    <Image src={sol8} className="gallery__img" alt="Image 2"/>
                </figure>
                <figure className="gallery__item gallery__item--25">
                    <Image src={sol9} className="gallery__img" alt="Image 3"/>
                </figure>
                <figure className="gallery__item gallery__item--26">
                    <Image src={sol10} className="gallery__img" alt="Image 4"/>
                </figure>
                <figure className="gallery__item gallery__item--27">
                    <Image src={sol11} className="gallery__img" alt="Image 5"/>
                </figure>
                <figure className="gallery__item gallery__item--28">
                    <Image src={sol14} className="gallery__img" alt="Image 6"/>
                </figure>
                <figure className="gallery__item gallery__item--29">
                    <Image src={sol13} className="gallery__img" alt="Image 3"/>
                </figure>
                <figure className="gallery__item gallery__item--30">
                    <Image src={sol10} className="gallery__img" alt="Image 4"/>
                </figure>
                <figure className="gallery__item gallery__item--31">
                    <Image src={sol15} className="gallery__img" alt="Image 5"/>
                </figure>
                <figure className="gallery__item gallery__item--32">
                    <Image src={sol12} className="gallery__img" alt="Image 6"/>
                </figure>
            </div>
        </div>
    )
}

export default CardGrid
