import React, { useEffect } from 'react';
import crown from '../../../public/images/Crown2.png'
import shine from '../../../public/images/shine.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'


function Story() {
    useEffect(() =>{
        Aos.init({duration: 2000})
            },[]);
        
    return (
        <div className='story'>
            <div data-aos='fade-right' className='crowncontainer'>
                <div className='theCrown'>
                    {/* 
                        <img className='shiner' id='shine1' src={shine} />
                        <img className='shiner' id='shine2' src={shine} />
                        <img className='shiner' id='shine3' src={shine} />
                        <img className='shiner' id='shine4' src={shine} />
                        <img className='shiner' id='shine5' src={shine} />
                        <img className='shiner' id='shine6' src={shine} />
                    */}
                    <Image className='crownImage' src={crown} />
                </div>
            </div>
            <div data-aos='fade-left' className='cardinfo'>
                <h2>Solomons Story</h2>
                <p>
                Once a righteous and wise king, Solomon encountered that which threatens us all — the temptations of a fruit forbidden. Solomon flirted with the devil. He danced along the shores whose waves perpetually threatened the washing of his vestige. A dance not taken lightly, or perhaps not taken at all… 
                </p><p>
                His eyes washed with white, burning light. His mind submerged by a cacophony of ceaseless endeavor — Solomon lost his soul to the digital ether. Every shred of his humanity, engulfed in bits & bytes as pointy and rigid as pins & needles.
                </p><p>
                Oh, Solomon… soulless. Solomon, a vessel emptied by the ceaseless beating drum of inexorable modernity. Will you ever head homeward? Will you ever return to the flesh which you have so carelessly set aflame?
                </p>
            </div>
        </div>
    )
}

export default Story
