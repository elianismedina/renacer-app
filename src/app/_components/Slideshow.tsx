"use client";
import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { Zoom } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Image from 'next/image';
import Fabicon from './Fabicon';







const Slideshow = () => {
	//Array of Images
	const images = [
		"https://res.cloudinary.com/dxa54qfxx/image/upload/v1697928841/image5_jpjk9h_swey1r.jpg",
		"https://res.cloudinary.com/dxa54qfxx/image/upload/v1697928841/image4_onioiy_cxvb4j.jpg",
		"https://res.cloudinary.com/dxa54qfxx/image/upload/v1697928841/image3_njfs7m_jwy0pj.jpg",
		"https://res.cloudinary.com/dxa54qfxx/image/upload/v1697928841/image2_qnl7n9_eswei3.jpg",
		"https://res.cloudinary.com/dxa54qfxx/image/upload/v1697928841/image1_ttvfne_azhsll.jpg",
	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		scale: 1,
		duration: 5000,
		transitionDuration: 300,
		infinite: true,
		prevArrow: (
			<div className="ml-5 top-40 md:top-72 bg-lime-950 rounded-full p-2">
				<ArrowLeftIcon  className="h-5 w-5 text-white cursor-pointer" />
			</div>
		),
		nextArrow: (
				<div className="mr-5 top-40 md:top-72  bg-lime-950 rounded-full p-2">
				   <ArrowRightIcon className="h-5 w-5 text-white cursor-pointer" />
			    </div>
		),
	};
	return (
    <div className="h-full w-full">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div
            key={index}
            className="relative flex h-screen w-full items-start justify-center top-24 md:items-center"
          >
            <Image
			  className="w-screen"
              src={each}
              alt="slider-image"
              width={1280}
              height={720}
			  
            />
          </div>
        ))}
      </Zoom>
	  <div className='absolute top-48'>
		<Fabicon/>
	  </div>
    </div>
  );
};



export default Slideshow