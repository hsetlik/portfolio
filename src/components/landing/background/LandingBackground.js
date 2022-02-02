import React from "react";
import "../../../styles/landing.css";
import Particles from "react-tsparticles";

export default function LandingBackground() {
    return (
      <div className="container" id='tsparticles'>
        <Particles className="particles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1
          },
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
              value: "#ffffff"
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
            zIndex: 1,
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
              color: "#ffffff",
              opacity: 1,
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
          retina_detect: true,
          fps_limit: 30,
          background: {color: "black"}
        }}
        />
      </div>
    )
}
