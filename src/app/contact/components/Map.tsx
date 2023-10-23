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

            const google = await loader.load();
            const position = {
                lat: 43.642693,
                lng: -79.3871189,
            };
            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 17,
                mapId: 'MY_NEXTJS_MAPID',
            };
            const map = new google.maps.Map(mapRef.current!, mapOptions);
        };
        void initMap();
    }, []);



    return (
        <div style={{ height:'600px'}} ref={mapRef}/>
    )
}

