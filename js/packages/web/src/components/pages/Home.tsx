import React from 'react'
import HeroSection from '../soul-files/HeroSection';
import CardGrid from '../soul-files/CardGrid';
import Roadmap from '../soul-files/Roadmap';
import Story from '../soul-files/Story'
import Event from '../soul-files/Event'
import Whitepaper from '../soul-files/Whitepaper'
import { Element } from 'react-scroll'
import Footer from '../soul-files/Footer';
import { AppBar } from '../AppBar';

function Home () {
    return(
        <>
        <title>Soulless Solomon - Sell your soul. One NFT at a time.</title>
        <div className="main-container">
        <AppBar />
        <Element name='home' id='home' ><HeroSection /></Element>
        <Element name='collection' id='collection' ><CardGrid /></Element>
        <Element name='story' id='story' ><Story /></Element>
        <Element name='event' id='event' ><Event /></Element>
        <Whitepaper />
        <Element name='roadmap' id='roadmap' ><Roadmap /></Element>
        <Footer />
        </div>
        </>
    )
}

export default Home;