import React, { useEffect, useRef } from 'react';
import "../../styles/BrendingAnimation.css"
import natura1 from "../../../animated_photos/4.png";


import { gsap } from 'gsap';


export default function BrandingAnimation_4() {
  // const options = {
  //   imgSrc: natura, 
  //   containerName: "placeholder",
  //   rows: 5,
  //   columns: 5,
  //   margin: 2.5,
  //   animTime: 0.3,
  // };

  const options = {
    imgSrc: natura1,
    containerName: "placeholder",
    rows: 5, // Consider adjusting if necessary
    columns: 5, // Consider adjusting if necessary
    margin: 1.25, // Half of the original margin to maintain proportion
    animTime: 0.3,
  };
  
  useEffect(() => {
    // Define fixTilePosition function before it's used
    const fixTilePosition = (tile, ind, w, h, c, r, time = 0) => {
      const centr = Math.floor((c * r) / 2);
      const centrCol = Math.ceil(centr / c);
      const centrRow = Math.ceil(centr / r);

      const offsetW = w / centrCol;
      const offsetH = h / centrRow;

      const left = Math.round(((ind % c) - centrCol + 1) * offsetW);
      const top = Math.round((Math.floor(ind / c) - centrRow + 1) * offsetH);

      gsap.to(tile, time, {
        css: { backgroundPosition: `${left}px ${top}px` },
        ease: "power1.out",
      });
    };

    const ImageGrid = (defaults) => {
      const { rows: r, columns: c, margin } = defaults;
      const placeholder = document.getElementsByClassName(defaults.containerName)[0];
      const container = document.createElement("div");
      container.className = "gridContainer";
      placeholder.appendChild(container);

      let gridTile;
      const w = container.offsetWidth / c - margin;
      const h = container.offsetHeight / r - margin;

      for (let i = 0, l = r * c; i < l; i++) {
        gridTile = document.createElement("div");
        gridTile.className = "gridTile";
        gridTile.style.backgroundImage = `url(${defaults.imgSrc})`;

        const arr = [
          (w + margin) * (i % c),
          (h + margin) * Math.floor(i / c),
          (w + margin) * (i % c) + w - margin,
          (h + margin) * Math.floor(i / c),
          (w + margin) * (i % c) + w - margin,
          (h + margin) * Math.floor(i / c) + h - margin,
          (w + margin) * (i % c),
          (h + margin) * Math.floor(i / c) + h - margin,
        ];

        gsap.set(gridTile, {
          webkitClipPath: `polygon(${arr[0]}px ${arr[1]}px, ${arr[2]}px ${arr[3]}px, ${arr[4]}px ${arr[5]}px, ${arr[6]}px ${arr[7]}px)`,
          clipPath: `polygon(${arr[0]}px ${arr[1]}px, ${arr[2]}px ${arr[3]}px, ${arr[4]}px ${arr[5]}px, ${arr[6]}px ${arr[7]}px)`,
        });

        container.appendChild(gridTile);

        // Call fixTilePosition with necessary parameters
        fixTilePosition(gridTile, i, w, h, c, r);
      }

      placeholder.addEventListener("mouseover", function (e) {
        const allTiles = e.currentTarget.querySelectorAll(".gridTile");
        allTiles.forEach(tile => {
          gsap.to(tile, defaults.animTime, {
            css: { backgroundPosition: "0px 0px" },
            ease: "power1.out",
          });
        });
      });

      placeholder.addEventListener("mouseleave", function (e) {
        const allTiles = e.currentTarget.querySelectorAll(".gridTile");
        allTiles.forEach((tile, index) => {
          // Call fixTilePosition with necessary parameters
          fixTilePosition(tile, index, w, h, c, r, defaults.animTime);
        });
      });
    };

    ImageGrid(options);
  }, []); // Empty dependency array ensures this runs once on component mount

  return <div className="placeholder"></div>;
}
