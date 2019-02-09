import { useState } from 'react';
import useEventTarget from 'use-event-target';
const useWindow = useEventTarget(window);
const useResize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  useWindow('resize', () =>
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  );
  return size;
};
export default useResize;
