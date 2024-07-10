import React, { forwardRef, useEffect, useRef, useState } from 'react';

const PTZCircular: React.FC = forwardRef((props, imageRef) => {
  const [lineStyle, setLineStyle] = useState<React.CSSProperties>({
    display: 'none',
  });
  const [holderDivStyle, setHolderDivStyle] = useState<React.CSSProperties>({});
  const circleRef = useRef<HTMLDivElement>(null);
  const center = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  useEffect(() => {
    const mainhead = imageRef?.current as HTMLDivElement;
    const divStyle = {
      height: mainhead?.offsetHeight,
      width: mainhead?.offsetWidth,
    };
    setHolderDivStyle(divStyle);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (circleRef.current && imageRef?.current) {
      const imageRect = imageRef?.current?.getBoundingClientRect();
      const x = e.clientX;
      const y = e.clientY;

      if (
        x >= imageRect.left &&
        x <= imageRect.right &&
        y >= imageRect.top &&
        y <= imageRect.bottom
      ) {
        const rect = circleRef.current.getBoundingClientRect();
        center.current.x = rect.left + rect.width / 2;
        center.current.y = rect.top + rect.height / 2;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    const dx = e.clientX - center.current.x;
    const dy = e.clientY - center.current.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    setLineStyle({
      display: 'block',
      width: `${length}px`,
      transform: `rotate(${angle}deg)`,
      top: `${center.current.y}px`,
      left: `${center.current.x}px`,
    });
  };

  const handleMouseUp = () => {
    setLineStyle({ display: 'none' });
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <>
      <div
        id="circle"
        ref={circleRef}
        onMouseDown={handleMouseDown}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: 'lightblue',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      />
      <div
        id="line"
        style={{
          ...lineStyle,
          top: '50%',
          left: '50%',
          position: 'absolute',
          height: '2px',
          backgroundColor: 'black',
          transformOrigin: '0 0',
          zIndex: 2,
        }}
      />
    </>
  );
});

export default PTZCircular;
