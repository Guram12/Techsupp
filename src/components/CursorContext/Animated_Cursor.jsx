import React, { useRef, useEffect } from 'react';
import "../styles/Animated_Cursor.css";
import { gsap } from 'gsap';

function Animated_Cursor({ children, canvasRef, tweenRef }) {
  useEffect(() => {
    // Check if the device width is greater than 500 pixels
    if (window.innerWidth <= 500) {
      return;  // Do nothing if width is less than or equal to 500px
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let mouseX = width / 2;
    let mouseY = height / 2;

    const circle = {
      radius: 10,
      lastX: mouseX,
      lastY: mouseY
    };

    const onResize = () => {
      if (window.innerWidth <= 500) {
        // Optionally clear the canvas if the window is resized to a small size
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const lerp = (a, b, n) => {
      return (1 - n) * a + n * b;
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const render = () => {
      circle.lastX = lerp(circle.lastX, mouseX, 0.25);
      circle.lastY = lerp(circle.lastY, mouseY, 0.25);

      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.arc(circle.lastX, circle.lastY, circle.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.closePath();

      requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', onResize);

    tweenRef.current = gsap.to(circle, { duration: 0.25, radius: circle.radius * 3, ease: "power1.inOut", paused: true });

    requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <div className='cursor_conttt' >
        <li onMouseEnter={() => tweenRef.current.play()} onMouseLeave={() => tweenRef.current.reverse()}>link</li>
        <li onMouseEnter={() => tweenRef.current.play()} onMouseLeave={() => tweenRef.current.reverse()}>link</li>
        <li onMouseEnter={() => tweenRef.current.play()} onMouseLeave={() => tweenRef.current.reverse()}>link</li>
      </div>
      <div className="white" />
      <div className="black" />
      {children}
      <canvas ref={canvasRef} className="js-canvas" style={{ zIndex: "9999999999999999999999999" }} />
    </>
  );
}

export default Animated_Cursor;
