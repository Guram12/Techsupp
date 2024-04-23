import React, { useRef, useEffect } from 'react';
import "../styles/Animated_Cursor.css";
import { gsap } from 'gsap'; // Make sure GSAP is installed and imported

function Animated_Cursor({children , canvasRef , tweenRef}) {
  // const canvasRef = useRef(null);
  // const tweenRef = useRef(null);

  useEffect(() => {
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
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const lerp = (a, b, n) => {
      return (1 - n) * a + n * b;
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

    window.addEventListener('mousemove', (e) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });

    window.addEventListener('resize', onResize);

    tweenRef.current = gsap.to(circle, { duration: 0.25, radius: circle.radius * 3, ease: "power1.inOut", paused: true });

    requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
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
      <canvas ref={canvasRef} className="js-canvas"  style={{zIndex: "9999999999999999999999999"}} />
    </>
  );
}

export default Animated_Cursor;
