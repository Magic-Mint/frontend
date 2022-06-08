import { useRef, useEffect } from 'react';

const useClickOutside = (elRef, cb) => {
  const cbRef = useRef();
  cbRef.current = cb;
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!elRef?.current?.contains(event.target) && cbRef.current) {
        cbRef.current(event);
      }
    };
    document.addEventListener('click', handleClickOutside, true);

    return () => document.removeEventListener('click', handleClickOutside, true);
  }, [cbRef, elRef]);
};

export default useClickOutside;
