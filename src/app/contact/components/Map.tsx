'use client'
import React, { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

export function Map(){

    const mapRef = React.useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const initMap = async () => {

            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
                version: "weekly",
            });

            const { Map } = await loader.importLibrary('maps');

            const position = {
                lat: 2.77228,
                lng: -77.6655,
            };

            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 17,
                mapId: 'MY_NEXTJS_MAPID',
            };
            const map = new Map(mapRef.current!, mapOptions);
            
        };
        void initMap();
    }, []);



    return (
        <div
        className='mt-10 mb-0'
        style={{ height:'500px'}} ref={mapRef}
        />
    )
}

