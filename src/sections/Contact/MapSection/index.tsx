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
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d185.1022395317401!2d19.515583977463297!3d42.07242457167203!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1708273578948!5m2!1sen!2suk"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MapSection;
