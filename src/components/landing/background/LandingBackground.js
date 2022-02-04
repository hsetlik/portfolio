import React from "react";
import "../../../styles/landing.css";
import Particles from "react-tsparticles";

export default function LandingBackground() {


    return (
      <div className="particle-container background-image-div" >
        <Particles id="tsparticles"
        options={{
          background: {
            enable: true,
            color: "green"
          },
          particles: {
            number: {
              value: 120,
              limit: 200,
            },
            color: {
              value: {
                r: 255,
                g: 214,
                b: 10 
              }
            },
            size: {
               random: true,
               anim: {
                 enable: true,
                 speed: 0.5,
                 size_min: 30,
              }
             },
            lineLinked: {
              enable: true,
              distance: 150,
              color: {
                r: 255,
                g: 214,
                b: 10 
              },
              opacity: 100,
              width: 1.5,
              frequency: 0.2,
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false
            },
            zIndex: 0
          },
          fullScreen: false,
          retina_detect: true,
          fps_limit: 30,
        }}
        />
      </div>
    )
}
