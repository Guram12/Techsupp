// import React, { useRef, useEffect } from 'react';
// import * as PIXI from 'pixi.js';

// const PixiComponent = () => {
//   const pixiContainer = useRef(null);

//   useEffect(() => {
//     let app = new PIXI.Application.init({
//       width: window.innerWidth,
//       height: window.innerHeight,
//       backgroundColor: 0x1099bb,
//       resolution: window.devicePixelRatio || 1,
//       autoResize: true,
//     });

//     pixiContainer.current.appendChild(app.view);

//     // The rest of your PIXI.js setup code goes here
//     let graphics = new PIXI.Graphics();
//     app.stage.addChild(graphics);
    
//     // Your animation function
//     function animate() {
//       graphics.clear();
//       // ... Your drawing code using PIXI.Graphics
//     }
    
//     app.ticker.add(animate);

//     // Handle window resizing
//     window.addEventListener('resize', () => {
//       app.renderer.resize(window.innerWidth, window.innerHeight);
//       // Any other resize adjustments you need to make
//     });

//     // Clean up on component unmount
//     return () => {
//       app.destroy(true, true);
//       window.removeEventListener('resize', () => {
//         app.renderer.resize(window.innerWidth, window.innerHeight);
//       });
//     };
//   }, []);

//   return <div ref={pixiContainer}></div>; // PIXI canvas will be injected here
// };

// export default PixiComponent;
