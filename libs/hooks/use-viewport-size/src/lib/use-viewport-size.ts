import { useState, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseViewportSize {
  width: number;
  height: number;
}
 
const getSize = () => {
  return { width: window.innerWidth, height: window.innerHeight };
};

/**
 * The `useViewportSize` hook provides the current width and height of the viewport. It updates the values whenever the window is resized.
 * 
 * @returns {UseViewportSize} An object containing the current width and height of the viewport.
 */
export function useViewportSize(): UseViewportSize {
 
  const [size, setSize] = useState(getSize);
 
  useEffect(() => {
    const handleResize = () => setSize(getSize());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
  return size;
}
