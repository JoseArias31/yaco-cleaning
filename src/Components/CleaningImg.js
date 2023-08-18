import React from 'react';
import '../Styles/CleaningImg.css'

const Promo = ({ text, cta, color, src }) => {
  const promoStyle = {
    '--overlay-color': color,
  };

  return (
    <div className="promo" style={promoStyle}>
      <div className="image-wrapper">
        <img src={src} alt={text} />
      </div>
      <h2 className="title2" data-cta={text}>
       
        <span className="cta-text">{cta}</span>
      </h2>
    </div>
  );
};

const ImgHover = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Promo
        text="Anytime!"
        cta="Get Our Services →"
        color="dodgerblue"
        src={require('../Images/CanadianHouseNoBackground.png')}
      />
      <Promo
        text="Quiet Time"
        cta="Find yours →"
        color="yellow"
        src="https://images.unsplash.com/photo-1523806762236-1d3a6b7eb3fd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy"
      />
      <Promo
        text="Surf's Up!"
        cta="Grab a board →"
        color="dodgerblue"
        src="https://images.unsplash.com/photo-1548008116-bcfec1f4c812?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy"
      />
  
    </div>
  );
};

export default ImgHover;

