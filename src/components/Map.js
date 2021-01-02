import { useEffect,useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import style from './Map.module.css'
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

export function Map(props){
    const mapContainerRef = useRef(null);

    useEffect(() => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/light-v10',
        center: [9.5, 45.683333],
        zoom: 8,
      });
      
    new mapboxgl.Marker({color:'rgb(174,165,131)'})
    .setLngLat([9.5, 45.68])
    .addTo(map);
  
      map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
  
      return () => map.remove();
    }, []); 
  
    return (
    <div className={style.container}>
 <div className="map-container" ref={mapContainerRef} id={style.map}/> 
    </div>
    
    );
  };

