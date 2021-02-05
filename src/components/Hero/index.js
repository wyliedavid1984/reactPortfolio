import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <section className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </section>
  );
}

export default Hero;
