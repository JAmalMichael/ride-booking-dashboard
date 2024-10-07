import React, { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet"
import 'leaflet/dist/leaflet.css'; 


const defaultPosition:[number, number] = [51.5072, 0.1276];  //default user location, using lat and long for london, United kingdom.


const ChangeView: React.FC<{ center:[number, number] }> = ({ center }) => {
  const map = useMap();
  useEffect(() => {
        map.setView(center);  //automically updates maps center;
  }, [center, map])
  return null
}

const Map = () => {

  const [position, setPosition] = useState<[number, number]>(defaultPosition);


  useEffect(() => {
    //checking availability of geolocation api
    if( navigator.geolocation ){
      try {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const {latitude , longitude} = position.coords;
            setPosition([latitude, longitude]);
          }
        )
      } catch (error) {
        console.log('Error getting user location', error);
      }
     
    } else {
      console.log('Faulty Geolocation'); //error handling geolocation api
    }
  }, [])
  

  return (
    <div className="flex">
    <MapContainer center={defaultPosition} zoom={13} className="w-[700px] h-[700px]"> 
    <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}/>
      <ChangeView center={position}/>
    </MapContainer>
    </div>
  )
}

export default Map