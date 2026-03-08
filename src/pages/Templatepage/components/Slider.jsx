import React, { useRef, useEffect, useState } from "react";

const images = [
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1019/600/400",
];

export default function AutoScrollSlider() {
  const trackRef = useRef(null);
  const position = useRef(0);
  const animationRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);

  // Auto scroll loop
  const autoScroll = () => {
    position.current -= 0.5; // speed
    if (Math.abs(position.current) >= trackRef.current.scrollWidth / 2) {
      position.current = 0;
    }

    trackRef.current.style.transform = `translateX(${position.current}px)`;
    animationRef.current = requestAnimationFrame(autoScroll);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  // Drag Start
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
    cancelAnimationFrame(animationRef.current);
  };

  // Drag Move
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - startX.current;
    position.current += delta;
    startX.current = e.clientX;

    trackRef.current.style.transform = `translateX(${position.current}px)`;
  };

  // Drag End
  const handleMouseUp = () => {
    setIsDragging(false);
    animationRef.current = requestAnimationFrame(autoScroll);
  };

  return (
    <div
      className="scroll-wrapper py-10"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div ref={trackRef} className="scroll-track">
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt="slider"
            className="scroll-item object-cover rounded-xl"
            draggable="false"
          />
        ))}
      </div>
    </div>
  );
}
