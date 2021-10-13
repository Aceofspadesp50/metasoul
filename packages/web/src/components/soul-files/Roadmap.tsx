import React, { useState, useEffect } from 'react';
import solomonSmall from '../../../public/images/SolomnSmall.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

function Roadmap() {


    useEffect(() =>{
        Aos.init({duration: 2000})
            },[]);
            const [isDisabled, setDisabled] = useState(false);

    return (
        <div className='roadmap'>
            <h2 data-aos='fade-up'><a className='glitch'>Sol</a>omons Journey</h2>


            <section id="cd-timeline" className="cd-container" data-aos='fade-up'>

		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-movie">
			</div>

			<div className="cd-timeline-content" data-aos='fade-right' >
				<div className='rm-top'>
					<div className='rm-img'>
						<Image objectFit="contain" src={solomonSmall} />
					</div>
					<div className='rm-text'>
						<h2>Chapter One</h2>
						<h3>SOULLESS SOLOMON MINTING</h3>
					</div>
				</div>
                <p>Creating and distributing 7,777 different manifestations of Solomon’s Soul to scatter through the digital space.</p>
			</div>
		</div>

		<div className="cd-timeline-block">
        <div className="cd-timeline-img cd-movie">
			</div>
			<div className="cd-timeline-content" data-aos='fade-left' >
			<div className='rm-top'>
					<div className='rm-img'>
						<Image objectFit="contain" src={solomonSmall} />
					</div>
					<div className='rm-text'>
						<h2>Chapter Two</h2>
						<h3>LISTING ON SECONDARY MARKETS</h3>
				</div>
				</div>
                <p>Establishing a presence on secondary markets in order to create aftermarket value and the ability to buy, trade, and sell Solomon’s for those who missed the minting event. </p>
			</div>
		</div>

		<div className="cd-timeline-block">
        <div className="cd-timeline-img cd-movie">
			</div>
			<div className="cd-timeline-content" data-aos='fade-right' >
			<div className='rm-top'>
					<div className='rm-img'>
						<Image objectFit="contain" src={solomonSmall} />
					</div>
					<div className='rm-text'>
				<h2>Chapter Three</h2>
				<h3>Proprietary Rarity INTERACTION Dashboard</h3>
				</div>
				</div>
                <p>Integration into the website to view your Solomon’s. Their names, items, rarity tiers, and backstory will be displayed here. As further expansion of the universe continues, this app will evolve to include more features to interact with your Solomon.</p>			</div>
		</div>
		<div className="cd-timeline-block">
        <div className="cd-timeline-img cd-movie">
			</div>
			<div className="cd-timeline-content" data-aos='fade-left' >
			<div className='rm-top'>
					<div className='rm-img'>
						<Image objectFit="contain" src={solomonSmall} />
					</div>
					<div className='rm-text'>
				<h2>Chapter Four</h2>
				<h3>EXPANDING THE SOLOMON UNIVERSE</h3>
				</div>
				</div>
                <p>Soulless Solomon will be activating our programme involving other projects, entities, and artists that will further spread Solomon’s word, establish his presence in the NFT space, and begin to expand our circle.  </p>
		</div>
</div>
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-movie">
			</div>

			<div className="cd-timeline-content" data-aos='fade-right' >
			<div className='rm-top'>
					<div className='rm-img'>
						<Image objectFit="contain" src={solomonSmall} />
					</div>
					<div className='rm-text'>
				<h2>Chapter Five</h2>
				<h3>SOULLESS Solomon “Soul Search” Event</h3>
				</div>
				</div>
				<p>Activating Solomon’s “Soul Search” Event will mean deploying our pre-selected artists across the globe to spread Solomon’s image and conduct a first of its kind event - merging our physical and digital spaces. </p>
			</div>
		</div>
        <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-movie">
			</div>

			<div className="cd-timeline-content" data-aos='fade-left' >
			<div className='rm-top'>
					<div className='rm-img'>
						<Image objectFit="contain" src={solomonSmall} />
					</div>
					<div className='rm-text'>
				<h2>Chapter Six</h2>
				<h3>NFT COMMUNITY PARTNERSHIPS & DROPS</h3>
				</div>
				</div>
                <p>After Solomon’s soul has been located during the “Soul Search” event, phase 2 of Solomon’s Journey will begin. An entirely new Whitepaper, Roadmap, and Event List will be unveiled detailing the next stage for Solomon and his journey into
                    101001001010</p>
			</div>
		</div>
        </section>
<h2 className='discordLink' data-aos='fade-up'><a href='https://soulless-solomon.com/discord' target="_blank" rel="noreferrer">Find out more on the Soulless Discord</a></h2>


        </div>
    )
}

export default Roadmap
