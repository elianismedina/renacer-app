"use client";
import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { Zoom } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Image from 'next/image';






const Slideshow = () => {
	//Array of Images
	const images = [
		"/images/image1.jpg",
		"/images/image2.jpg",
		"/images/image3.jpg",
		"/images/image4.jpg",
		"/images/image5.jpg",
	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		scale: 1,
		duration: 5000,
		transitionDuration: 300,
		infinite: true,
		prevArrow: (
			<div className="ml-10 top-40 md:top-72">
				<ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
			</div>
		),
		nextArrow: (
				<div className="mr-10 top-40 md:top-72">
				   <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />
			    </div>
		),
	};
	return (
		
		 	<div className="w-full h-screen">
			<Zoom {...zoomInProperties}>
				{images.map((each, index) => (
					<div key={index} className="flex justify-center md:items-center items-start w-screen h-screen relative">
						<Image
							className="w-screen"
							src={each}
							alt=""
							width={1920}
							height={1080}
						/>
                        
					</div>
				))}
			</Zoom>
		</div>
	);
};



export default Slideshow