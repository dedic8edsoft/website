import { useState, useEffect } from 'react';
import { RESOLUTION } from '@constants';

export interface IWindowSize {
  width?: number;
  height?: number;
  isMobile?: boolean;
  resolution?: RESOLUTION;
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<IWindowSize>({});

  useEffect(() => {
    function handleResize() {
      const resolutions = Object.values(RESOLUTION) as RESOLUTION[];
      let id = resolutions.findIndex((item) => item > window.innerWidth) - 1;
      if (id === -2) id = resolutions.length - 1;

      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < RESOLUTION.LG,
        resolution: resolutions[id],
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
