import { useState, useEffect } from "react";
import "./styles/LineAnimation.css";

export default function LineAnimationComponent({ showSplashScreen }) {
  useEffect(() => {
    // Declare WIDTH and HEIGHT with let so they can be reassigned.
    let WIDTH = window.innerWidth;
    let HEIGHT = window.innerHeight;
    const WAVEHEIGHT = 25;
    const FREQUENCY = 100;
    const SPEED = 3;
    let xs = [];
    let tick = 0;

    function createWave() {
      xs = []; // Reset the xs array to handle resize properly
      for (let i = 0; i <= WIDTH; i++) {
        xs.push(i);
      }
    }

    function animate() {
      let points = xs.map((x) => {
        let y = HEIGHT / 2 + WAVEHEIGHT * Math.sin((x + tick) / FREQUENCY);
        return [x, y];
      });

      let path =
        "M" +
        points.map((p) => `${p[0]},${p[1]}`).join(" L") +
        ` L ${WIDTH},${HEIGHT} L 0,${HEIGHT} Z`;

      const pathElement = document.querySelector("#wavePath");
      if (pathElement) {
        pathElement.setAttribute("d", path);
        tick += SPEED;
        requestAnimationFrame(animate);
      }
    }

    createWave();
    animate();

    function handleResize() {
      WIDTH = window.innerWidth; // Now it's allowed since WIDTH is declared with let
      HEIGHT = window.innerHeight;
      createWave(); // Recreate the wave with new dimensions
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showSplashScreen]);

  return (
    <div className="svg-container">
      {!showSplashScreen && (
        <svg className="line_animation" viewBox="0 0 WIDTH HEIGHT" preserveAspectRatio="xMidYMid meet" >
          <defs>
            <pattern
              id="img1"
              patternUnits="userSpaceOnUse"
              width="100"
              height="200"
            >
              <image
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAADIC
        AIAAACRXtOWAAADQUlEQVR4nO3Uy3HrMBQEUb1cHADzX9EROKR5C7v8kWlpRiKJC6A7gltTB7is6
        3qp18vLi+p1WZal9TIbrevaepmN/rWeZaNlWd7e3lpfcd3r62vrE7aqyariE1yWpfUsG9X82WFlB6s
        gWLnBKghWbrAKgpUbrIJg5QarIFi5wSoIVm6wCoKVG6yCYOUGqyBYucEqCFZusAqClRusgmDlBqsgW
        LnBKghWbrAKgpUbrIJg5QarIFi5wSoIVm6wCoKVG6yCYOUGqyBYucEqCFZusAqClRusgmDlBqsgWLn
        BKghWbrAKgpUbrIJg5QarIFi5wSoIVm6wCoKVG6yCYOUGqyBYucEqCFZusAqClRusgmDlBqsgWLnBKg
        hWbrAKgpUbrIJg5QarIFi5wSoIVm6wCoKVG6yCYOUGqyBYucEqCFZusAqClRusgmAV1HqWjWqyWpal4l
        g1Wa3rWm6ssqwklRurLCtVG6syK1UbqzIrlRqrOCuVGqs4K9UZqz4r1RmrPisVGasLVioyVhesVGGsXli
        pwli9sFLzsTpipeZjdcRKbcfqi5XajtUXKzUcqztWajhWd6zUaqweWanVWD2yUpOxOmWlJmN1ykrnj9Uv
        K50/Vr+sdPJYXbPSyWN1zUpnjtU7K505Vu+sdNpYA7DSaWMNwErnjDUGK50z1hisdMJYw7DSCWMNw0pHjz
        USKx091kisdOhYg7HSoWMNxkrHjTUeKx031nisdNBYQ7LSQWMNyUpHjDUqKx0x1qistPtYA7PS7mMNzEr7
        jjU2K+071tistONYw7PSjmMNz0p7jTUDK+011gystMtYk7DSLmNNwkrPjzUPKz0/1jys9ORYU7HSk2NNxUr
        PjDUbKz0z1mys9PBYE7LSw2NNyEqPjTUnKz021pys9MBY07LSA2NNy0rpWDOzUjrWzKwUjTU5K0VjTc5K/
        liwkj8WrGSOBav3rLFg9d79sWD12f2xYPXZnbFg9b07Y8Hqe7fGgtVVt8aC1VV/jgWr3/05Fqx+tz0WrDbb
        HgtWm22MBau/2hgLVn91PRasbnQ9Fqxu9GMsWN3ux1iwut3XWLC629dYsLrbx1iwcvoYC1ZOF8HK7iJY2f0H
        mTYOVR+4YhkAAAAASUVORK5CYII="
                x="0"
                y="0"
                width="100"
                height="200"
              />
            </pattern>
          </defs>
          <path id="wavePath" fill="url(#img1)"></path>
        </svg>
      )}
    </div>
  );
}
