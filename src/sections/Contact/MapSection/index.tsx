import React from 'react';

const MapSection = () => {
  return (
    <div className="w-full h-100">
      <div
        id="map_canvas"
        className="map_canvas"
        data-latitude="40.712776"
        data-longitude="-74.005974"
        data-marker="images/marker.png"
        data-marker-name="Dedic8edSoft"
      ></div>
      <iframe
        className="w-full h-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1sPere+Segedinca+17,+Kikinda,+Serbia!5e0!6i10,6z"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MapSection;
