"use client";
import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { Zoom } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Image from 'next/image'



const Slideshow = () => {

    const images = [
        "/images/image1.jpg",
        "/images/image2.jpg",
        "/images/image3.jpg",
        "/images/image4.jpg",
        "/images/image5.jpg",

    ]
    const zoomInProperties = {
        scale:1,
        duration:5000,
        transitionDuration:300,
        infinity:true,

        prevArrow:(
            <div className='ml-10 top-40 md:top-72'>
                <ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer"/>
            </div>
        ),
        nextArrow:(
            <div className='mr-10 top-40 md:top-72'>
                <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer"/>
            </div>
        ),
    }
  return (
    <div className='w-full h-screen'>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
            <div key={index} className='flex justify-center md:items-center items-start w-screen h-screen relative'>
                <Image
                    src={each}
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority={true}
                    className='w-screen'
                />

            </div>

        ))}
      </Zoom>
    </div>
  )
}

export default Slideshow