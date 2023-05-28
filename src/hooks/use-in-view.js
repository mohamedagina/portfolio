import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useInView = elementRef => {
  const [inView, setInView] = useState(false);
  const navigate = useNavigate();

  const isInView = element => {
    const bounding = element.getBoundingClientRect();
    return (
      bounding.bottom >= bounding.height / 2 &&
      bounding.bottom <= window.innerHeight + bounding.height / 2
    );
  };

  useEffect(() => {
    if (!elementRef.current) return;

    const myElement = elementRef.current;
    const inViewOnMount = isInView(myElement);
    setTimeout(() => {
      if (isInView(myElement) === inViewOnMount) setInView(inViewOnMount);
    }, 700);

    const handleScroll = () => {
      if (myElement) {
        const currentIsInView = isInView(myElement);
        setTimeout(() => {
          if (isInView(myElement) === currentIsInView)
            setInView(currentIsInView);
        }, 700);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementRef]);

  useEffect(() => {
    if (!inView) return;

    if (elementRef.current.id) navigate(`/#${elementRef.current.id}`);
  }, [inView, elementRef, navigate]);

  return inView;
};
