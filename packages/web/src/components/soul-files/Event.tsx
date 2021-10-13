import React, { useEffect } from 'react';

import grafitti1 from '../../../public/images/grafitti1.jpg'
import grafitti2 from '../../../public/images/grafitti2.jpg'
import skateboard from '../../../public/images/skate4.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'


function Event() {
    useEffect(() =>{
        Aos.init({duration: 2000})
            },[]);

    return (
        <div className='event'>
            <div data-aos='fade-right' className='eventInfo'>
                <h2>Solomon's <a className='glitch'>Soul Search</a> Event</h2>
                <p>As a collective of seasoned artists watching the NFT space burgeon from the sidelines - we knew we wanted to get involved, but we wanted to ensure we were doing something new, different, and unique. We needed to do something that would capture the attention of both traditional, and new age art markets. That's why we decided it’s time to innovate, by merging the physical and digital art worlds with "Solomon's Soul Search" event. 
                </p><p>
                Solomon's Soul won’t be found online. It will be found in your neighbourhoods - through in-person, simultaneous, street art drops in major cities around the globe. With each street art event, a unique QR code - and a chance to help Solomon find his soul in your NFT. 
                </p><p>
                Join our Discord and reach out directly for further updates. Don't miss this first-of-its-kind NFT experience.
                </p>
            </div>
            <div data-aos='fade-left' className='eventPhotos'>
                <Image objectFit="cover" layout="intrinsic" src={grafitti1} id='grafitti1'/>
                <Image objectFit="cover" layout="intrinsic" src={skateboard} id='grafitti2'/>
                <Image objectFit="cover" layout="intrinsic" src={grafitti2} id='grafitti3'/>
            </div>
        </div>
    )
}

export default Event
