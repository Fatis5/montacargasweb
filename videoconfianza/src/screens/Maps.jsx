import React, {  useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Maps = () => {
  const [center, setcenter] = useState({
    lat: 19.7353713,
    lng: -99.1546111,
  });
  const containerStyle = {
    width: "300px",
    height: "400px",
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyA-XvCe1rQbGWvZzXetuMhEDjoWcnpkh90">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Maps);
