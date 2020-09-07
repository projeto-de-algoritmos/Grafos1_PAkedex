import React, { useRef, useEffect } from 'react';

import { drop } from 'lodash';
import { Container, CicleGraph, Cicle } from './styles';

interface GraphCycleProp {
  cycle: any;
}
const GraphCycle: React.FC<GraphCycleProp> = ({ cycle }) => {
  const graph = useRef<any>(null);

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
    <Container>
      <CicleGraph ref={graph}>
        {cycle && drop(cycle).map((item) => <Cicle />)}
      </CicleGraph>
    </Container>
  );
};

export default GraphCycle;
