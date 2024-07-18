import React, { useEffect, useState } from 'react';

interface Point {
  x: number;
  y: number;
}

interface PTZCircularProps {
  onPanTiltChange: (pan: number, tilt: number) => void;
  cbStop: () => void;
}

const PTZCircular: React.FC<PTZCircularProps> = ({ onPanTiltChange, cbStop }) => {
  const [isLineActive, setIsLineActive] = useState<boolean>(false);
  const [points, setPoints] = useState<Point[]>([]);
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [distance, setDistance] = useState<number>(0);
  const [angle, setAngle] = useState<number>(0);
  const [pan, setPan] = useState<number>(0);
  const [tilt, setTilt] = useState<number>(0);
  const [mousePos, setMousePos] = useState<Point>({ x: 0, y: 0 });

  const handleMouseDown = (
    event: React.MouseEvent<SVGCircleElement, MouseEvent>,
  ) => {
    event.stopPropagation(); // Prevents the click event from propagating to the svgCanvas

    const svgCanvas = document.getElementById('svgCanvas') as SVGSVGElement;
    if (svgCanvas) {
      const circleCenterX = center.x;
      const circleCenterY = center.y;
      const mouseX = event.clientX - svgCanvas.getBoundingClientRect().left;
      const mouseY = event.clientY - svgCanvas.getBoundingClientRect().top;

      setPoints([
        { x: circleCenterX, y: circleCenterY },
        { x: mouseX, y: mouseY },
      ]);
      setIsLineActive(true);
      const dist = calculateDistance(circleCenterX, circleCenterY, mouseX, mouseY);
      setDistance(dist);
      setAngle(calculateAngle(circleCenterX, circleCenterY, mouseX, mouseY));
      const newPan = calculatePan(circleCenterX, mouseX);
      const newTilt = calculateTilt(circleCenterY, mouseY);
      setPan(newPan);
      setTilt(newTilt);
      setMousePos({ x: mouseX, y: mouseY });

      // Callback to parent component
      onPanTiltChange(newPan, newTilt);
    }
  };

  const handleMouseUp = () => {
    if (isLineActive) {
      setIsLineActive(false);
      cbStop();
    }
  };

  const handleMouseMove = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) => {
    if (isLineActive) {
      const svgCanvas = document.getElementById('svgCanvas') as SVGSVGElement;
      if (svgCanvas) {
        const mouseX = event.clientX - svgCanvas.getBoundingClientRect().left;
        const mouseY = event.clientY - svgCanvas.getBoundingClientRect().top;

        setPoints((prevPoints) => {
          const updatedPoints = [...prevPoints];
          updatedPoints[1] = { x: mouseX, y: mouseY };
          return updatedPoints;
        });
        const dist = calculateDistance(center.x, center.y, mouseX, mouseY);
        setDistance(dist);
        setAngle(calculateAngle(center.x, center.y, mouseX, mouseY));
        const newPan = calculatePan(center.x, mouseX);
        const newTilt = calculateTilt(center.y, mouseY);
        setPan(newPan);
        setTilt(newTilt);
        setMousePos({ x: mouseX, y: mouseY });

        // Callback to parent component
        onPanTiltChange(newPan, newTilt);
      }
    }
  };

  useEffect(() => {
    const svgCanvas = document.getElementById('svgCanvas') as SVGSVGElement;
    if (svgCanvas) {
      const circleCenterX = svgCanvas.clientWidth / 2;
      const circleCenterY = svgCanvas.clientHeight / 2;

      setCenter({
        x: circleCenterX,
        y: circleCenterY,
      });
    }
  }, []);

  const calculateDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
  ): number => {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  };

  const calculateAngle = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
  ): number => {
    return (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  };

  const calculatePan = (centerX: number, mouseX: number): number => {
    // Calculate horizontal angle or pan
    const deltaX = mouseX - centerX;
    const panAngle = (deltaX / centerX) * 90; // Assuming 90 degrees max pan angle
    return panAngle;
  };

  const calculateTilt = (centerY: number, mouseY: number): number => {
    // Calculate vertical angle or tilt
    const deltaY = mouseY - centerY;
    const tiltAngle = (deltaY / centerY) * 90; // Assuming 90 degrees max tilt angle
    return tiltAngle;
  };

  const pointsString = points.map((point) => `${point.x},${point.y}`).join(' ');

  return (
    <svg
      id="svgCanvas"
      width="100%"
      height="100%"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Circle */}
      <circle
        id="circle"
        cx="50%"
        cy="50%"
        r={50}
        fill="grey"
        stroke="blue"
        strokeWidth={2}
        onMouseDown={handleMouseDown}
      />
      {/* Plus symbol in the center of the circle, visible only when isLineActive is false */}
      {!isLineActive && (
        <>
          <line
            x1={center.x - 2}
            y1={center.y}
            x2={center.x + 2}
            y2={center.y}
            stroke="black"
            strokeWidth={2}
          />
          <line
            x1={center.x}
            y1={center.y - 2}
            x2={center.x}
            y2={center.y + 2}
            stroke="black"
            strokeWidth={2}
          />
        </>
      )}
      {/* Polyline */}
      <polyline
        id="polyline"
        points={pointsString}
        stroke="red"
        strokeWidth={2}
        fill="none"
        style={{
          display: isLineActive ? 'block' : 'none',
        }}
      />
      {/* Distance and Angle Text */}
      <text x={mousePos.x + 10} y={mousePos.y - 10} fill="black">
        {isLineActive ? `Distance: ${distance.toFixed(2)}px, Angle: ${angle.toFixed(2)}°, Pan: ${pan.toFixed(2)}°, Tilt: ${tilt.toFixed(2)}°` : ''}
      </text>
    </svg>
  );
};

export default PTZCircular;
