import { useState, useRef, useEffect, useCallback } from 'react';

const useNaviToggle = () => {
  const [isScrolled, setIsScrolled] = useState(true);

  const beforeScrollTop = useRef(null);

  const BUFFER_TIME = 500;

  const isCoolTime = useRef(false);
  const setCoolTime = () => {
    isCoolTime.current = true;
    setTimeout(() => {
      isCoolTime.current = false;
    }, BUFFER_TIME);
  };

  const handleScroll = () => {
    if (isCoolTime.current) return;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop < beforeScrollTop.current) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    setCoolTime();
    beforeScrollTop.current = scrollTop;
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, []);

  return isScrolled;
};

export default useNaviToggle;
