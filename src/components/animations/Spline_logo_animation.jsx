import { useEffect } from 'react';

export default function spline_logo() {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@splinetool/viewer@1.0.87/build/spline-viewer.js";
    script.type = "module";
    script.async = true;

    // Append script to the body
    document.body.appendChild(script);

    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <spline-viewer url="https://prod.spline.design/OYcVC2npW77zO7Ke/scene.splinecode"></spline-viewer>
    </div>
  );
}

