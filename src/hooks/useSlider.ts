// @ts-nocheck
import { useCallback } from "react";

export const useSlider = () => {
  const addAnimated = useCallback(({
    elements,
    animateStyles,
    action,
    }:{elements: Array<any>, animateStyles: Array<any>, action: 'add' | 'remove'}) => {
      elements.forEach((element: string, idx:number) => {
        if(action === 'add') {
          if(Array.isArray(element)) {
            element.forEach((child:string, jdx:number) => {
              if(document.querySelector(child)) {
                document.querySelector(child).classList.add(animateStyles[idx][jdx]);
                document.querySelector(child).classList.remove('visible');
              }
            });
          } else {
            document.querySelector(element)?.classList.add(animateStyles[idx]);
            document.querySelector(element)?.classList.remove('visible');
          }
        } else {
          if(Array.isArray(element)) {
            element.forEach((child:string, jdx:number) => {
              if(document.querySelector(child)) {
                document.querySelector(child).classList.remove(animateStyles[idx][jdx]);
                document.querySelector(child).classList.add('visible');
              }
            });
          } else {
            document.querySelector(element).classList.remove(animateStyles[idx]);
            document.querySelector(element).classList.add('visible');
          }
          
        }
      });
  },[]);
  const zoomOut = useCallback(({index, action}: {index:number, action:string})=> {
    const ction_1 = document.querySelector(`.caption_1_${index}`);
    const ction_2 = document.querySelector(`.caption_2_${index}`);
    if(action === 'add') {
      if(ction_2) {
        setTimeout(()=>{
          ction_1.classList.add('animate__zoomOut');
        }, 4000);
      }
    } else {
      ction_1.classList.remove('animate__zoomOut');
    }
  },[]);
  return {
    addAnimated,
    zoomOut,
  };
};