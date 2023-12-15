import {useEffect, useState } from 'react';
import styled from 'styled-components';
import {VictoryPie, VictoryAnimation, VictoryLabel} from 'victory';

const Label = styled(VictoryLabel)`
  tspan {
    font-family: Arial,sans-serif !important;
  }
`;

export const DonutChart = ({metric = 0}:{metric:number}) => {
  const [metricAnimate, setMetricAnimate] = useState(0);
  useEffect(() => {
    if(typeof window !== undefined) {
      window.addEventListener('scroll', () => {
        const view = document.getElementById("skills");
        if(view) {
          const crolledInView = view?.getBoundingClientRect().y <= 200;
          if(crolledInView) {
            setMetricAnimate(metric);
          } else {
            setMetricAnimate(0);
          }
        }
      });
    }
    return () => {window.removeEventListener('scroll', ()=> {});};
  },[metric]);
  return (
  <svg viewBox="0 0 250 200" width={250} height={200}>
    <VictoryPie
        standalone={false}
        padAngle={0}
        animate={{ duration: 2000 }}
        width={250} height={250}
        data={[{ x: 1, y: metricAnimate }, { x: 2, y: 100 - metricAnimate }]}
        innerRadius={70}
        cornerRadius={0}
        labels={() => null}
        style={{
          data: { fill: ({ datum }) => { 
            return datum.x === 1 ? 'var(--color-white)' : "transparent";
          }
          }
        }}
      />
    <VictoryAnimation duration={1000} data={{percent:metricAnimate}}>
    {(newProps:any) => {
      return (
        <Label
          textAnchor="middle" verticalAnchor="middle"
          x={125} y={125}
          text={`${Math.round(newProps.percent)}%`}
          style={{ fontSize: 50, fill: 'var(--color-white)'}}
        />
      );
    }}
    </VictoryAnimation>
  </svg>
);};