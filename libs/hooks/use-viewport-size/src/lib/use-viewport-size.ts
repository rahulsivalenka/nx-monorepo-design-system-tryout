import { useState, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseViewportSize {
  width: number;
  height: number;
}
 
export function useViewportSize(): UseViewportSize {
  const getSize = () => {
    return { width: window.innerWidth, height: window.innerHeight };
  };
 
  const [size, setSize] = useState(getSize);
 
  useEffect(() => {
    const handleResize = () => setSize(getSize());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getSize]);
 
  return size;
}
