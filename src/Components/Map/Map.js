import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

export default function Map({ showMarker }) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(83.9907);
    const [lat] = useState(28.2292);
    const [zoom] = useState(12);
    const [API_KEY] = useState('FcacSVJPhqJOGBUEj6Qr');
    const markerRef = useRef(null);

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
            center: [lng, lat],
            zoom: zoom
        });
        map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
        markerRef.current = new maplibregl.Marker({ color: "#FF0000" })
            .setLngLat([83.9907, 28.2292])
            .addTo(map.current);
    }, [API_KEY, lng, lat, zoom]);

    useEffect(() => {
        if (markerRef.current) {
            if (showMarker) {
                markerRef.current.addTo(map.current);
            } else {
                markerRef.current.remove();
            }
        }
    }, [showMarker]);

    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
}