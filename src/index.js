import { useState } from 'react';
import createEventTargetHook from 'create-event-target-hook';
const useWindow = createEventTargetHook(window);
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
