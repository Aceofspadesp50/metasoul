import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper';
import largeLogo from '../../../public/images/LargeLogo.png';
import Image from 'next/image'


function HeroSection() {

    return (
        <div className='hero-container section'>
            <RellaxWrapper className='parallax-container zindex0' speed={ 0 }><div className='parallax-light'></div><div className='parallax-back'></div></RellaxWrapper>
            <RellaxWrapper className='parallax-container zindex logoParallax' speed={ 5 }>
                <div className='hero-info'>
                    <Image className='floating-logo' objectFit="contain" src={largeLogo} alt='Souless Solomon'></Image>
                    <h1>Sell your soul. One NFT at a time.</h1>
                    {/*<button className='btn--summon btn--medium'>Join our Discord</button>*/}

      <button className='btn--summon btn--medium'>Summon a Soul</button>
                </div>
            </RellaxWrapper>
            <RellaxWrapper  className='parallax-container zindex' speed={ 3 }><div className='rellax parallax-front'></div><div className="parallax-fader"></div></RellaxWrapper>
        </div>
    )
}

export default HeroSection
