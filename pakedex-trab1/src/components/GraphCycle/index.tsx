import React, { useRef, useEffect } from 'react';

import './styles.css';

const GraphCycle: React.FC = () => {
  const graph = useRef<any>(null);
  const LIST = [1, 14, 11, 10, 9, 6, 13, 1];

  useEffect(() => {
    const ciclegraph = graph.current;
    const circleElements = ciclegraph?.childNodes;

    let angle = 360 - 90;
    const dangle = 360 / circleElements.length;

    for (let i = 0; i < circleElements.length; i += 1) {
      const circle = circleElements[i];
      angle += dangle;
      circle.style.transform = `rotate(${angle}deg) translate(${
        ciclegraph?.clientWidth / 2
      }px) rotate(-${angle}deg)`;
    }
  }, []);

  return (
    <div className="App">
      <div className="ciclegraph" ref={graph}>
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" style={{ background: 'red' }} />
      </div>
    </div>
  );
};

export default GraphCycle;
