import React from "react";
import "../../../styles/landing.css";
import Particles from "react-tsparticles";

export default function LandingBackground() {

    return (
      <div className="particle-container" >
        <Particles id="tsparticles"
        options={{
          particles: {
            number: {
              value: 400,
              limit: 500,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: {
                r: 255,
                g: 214,
                b: 10
              } 
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              }
            },
            opacity: {
              value: 0.5
            },
            // size: {
            //   value: 30,
            //   random: true,
            //   anim: {
            //     enable: true,
            //     speed: 10,
            //     size_min: 10,
            //     sync: false
            //   }
            // },
            line_linked: {
              enable: true,
              distance: 100,
              color: {
                r: 255,
                g: 214,
                b: 10 
              },
              opacity: 100,
              width: 1
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false
            }
          },
          fullScreen: false,
          retina_detect: true,
          fps_limit: 30,
        }}
        />
      </div>
    )
}
