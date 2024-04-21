import React, { useEffect, useRef } from "react";
import anime from "animejs";
import "../styles/About_animation.css";

export default function AboutAnimation({ isDarkmodeOn }) {
  const staggerVisualizerRef = useRef(null);

  useEffect(() => {
    if (staggerVisualizerRef.current) {
      const staggerVisualizerEl = staggerVisualizerRef.current;
      const dotsWrapperEl = staggerVisualizerEl.querySelector(".dots-wrapper");
      const grid = [20, 10];
      const cell = 55;
      const numberOfElements = grid[0] * grid[1];
      let animation;

      // Adjusted fitElementToParent function for React
      function fitElementToParent(el, padding = 0) {
        let timeout = null;
        function resize() {
          if (timeout) clearTimeout(timeout);
          anime.set(el, { scale: 1 });
          const parentEl = el.parentNode;
          const elOffsetWidth = el.offsetWidth - padding;
          const parentOffsetWidth = parentEl.offsetWidth;
          const ratio = parentOffsetWidth / elOffsetWidth;
          timeout = setTimeout(() => anime.set(el, { scale: ratio }), 10);
        }
        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize); // Cleanup
      }

      fitElementToParent(staggerVisualizerEl, 0);

      // Populating dots
      const dotsFragment = document.createDocumentFragment();
      for (let i = 0; i < numberOfElements; i++) {
        const dotEl = document.createElement("div");
        dotEl.classList.add("dot");
        dotsFragment.appendChild(dotEl);
      }
      dotsWrapperEl.appendChild(dotsFragment);

      // The play function
      function play() {
        let index = anime.random(0, numberOfElements - 1);
        let nextIndex = 0;

        anime.set(".stagger-visualizer .cursor", {
          translateX: anime.stagger(-cell, {
            grid: grid,
            from: index,
            axis: "x",
          }),
          translateY: anime.stagger(-cell, {
            grid: grid,
            from: index,
            axis: "y",
          }),
          translateZ: 0,
          scale: 1.5,
        });

        const playAnimation = () => {
          nextIndex = anime.random(0, numberOfElements - 1);
          animation = anime
            .timeline({
              easing: "easeInOutQuad",
              complete: playAnimation,
            })
            .add({
              targets: ".stagger-visualizer .cursor",
              keyframes: [
                { scale: 0.75, duration: 120 },
                { scale: 2.5, duration: 220 },
                { scale: 1.5, duration: 450 },
              ],
              duration: 300,
            })
            .add(
              {
                targets: ".stagger-visualizer .dot",
                keyframes: [
                  {
                    translateX: anime.stagger("-2px", {
                      grid: grid,
                      from: index,
                      axis: "x",
                    }),
                    translateY: anime.stagger("-2px", {
                      grid: grid,
                      from: index,
                      axis: "y",
                    }),
                    duration: 100,
                  },
                  {
                    translateX: anime.stagger("4px", {
                      grid: grid,
                      from: index,
                      axis: "x",
                    }),
                    translateY: anime.stagger("4px", {
                      grid: grid,
                      from: index,
                      axis: "y",
                    }),
                    scale: anime.stagger([2.6, 1], { grid: grid, from: index }),
                    duration: 225,
                  },
                  {
                    translateX: 0,
                    translateY: 0,
                    scale: 1,
                    duration: 1200,
                  },
                ],
                delay: anime.stagger(80, { grid: grid, from: index }),
              },
              30
            )
            .add(
              {
                targets: ".stagger-visualizer .cursor",
                translateX: {
                  value: anime.stagger(-cell, {
                    grid: grid,
                    from: nextIndex,
                    axis: "x",
                  }),
                },
                translateY: {
                  value: anime.stagger(-cell, {
                    grid: grid,
                    from: nextIndex,
                    axis: "y",
                  }),
                },
                scale: 1.5,
                easing: "cubicBezier(.075, .2, .165, 1)",
              },
              "-=800"
            );

          index = nextIndex;
        };

        playAnimation();
      }

      // Start the animation
      play();

      // Cleanup on component unmount
      return () => {
        animation && animation.pause();
        window.removeEventListener("resize", fitElementToParent);
      };
    }
  }, []);

  return (
    <div className="about_animation_container">
      <div className="animation-wrapper">
        <div ref={staggerVisualizerRef} className="stagger-visualizer">
          <div className="cursor color-red" />
          <div className="dots-wrapper" />
        </div>
      </div>
    </div>
  );
}
