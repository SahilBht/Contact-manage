import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon from "../utils/marker_icon.png";

// WorldMap component to display markers on a map for various countries
const WorldMap = ({ countriesData }) => {
  // Define a custom marker icon
  const customMarker = L.icon({
    iconUrl: markerIcon,
    iconSize: [20, 25],
    iconAnchor: [15, 30],
  });

  return (
    <div>
      {/* Map through the countriesData array and create markers for each country */}
      {countriesData?.map((country) => (
        <Marker
          icon={customMarker}
          key={country.countryInfo._id}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Popup>
            <div>
              <h2>{country.country}</h2>
              <p>
                Active Cases: {country.active} <br />
                Recovered Cases: {country.recovered} <br />
                Deaths: {country.deaths}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </div>
  );
};

export default WorldMap;
