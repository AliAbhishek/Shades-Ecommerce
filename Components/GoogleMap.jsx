import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useSelector } from 'react-redux';

const MapComponent = ({ google }) => {
  // const { shopDetails } = useSelector((state) => state.login);
  const { ProductDetails } = useSelector((state) => state.products);
  const [coordinates, setCoordinates] = useState([0.0,0.0]);



  useEffect(() => {
    // Convert city and country to coordinates when shopDetails changes
    if (ProductDetails?.userId?.city && ProductDetails?.userId?.country && google?.maps?.Geocoder) {
      const geocoder = new google.maps.Geocoder();
      const address = `${ProductDetails?.userId?.city}, ${ProductDetails?.userId?.country}`;

      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const location = results[0].geometry.location;
          setCoordinates({
            lat: location.lat(),
            lng: location.lng()
          });
        }
      });
    }
  }, [ProductDetails, google]);

  console.log(coordinates,"coordinates")

  const mapStyles = {
    width: '100%',
    height: '100%',
    position: 'relative',
    borderRadius: '10px'
  };

  // Show loading state until coordinates are available
  if (!coordinates) {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f5f5f5',
        borderRadius: '10px'
      }}>
        Loading Map...
      </div>
    );
  }

  return (
    <Map
      google={google}
      zoom={14}
      style={mapStyles}
      initialCenter={coordinates}
      center={coordinates}
    >
      <Marker
        position={coordinates}
        title={`${ProductDetails?.userId?.city}, ${ProductDetails?.userId?.country}`}
      />
    </Map>
  );
};


export const MapContainer =  GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapComponent);
