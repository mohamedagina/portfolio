import { useRef } from 'react';
import { useInView } from '../hooks';

export const Section = ({ children, id, ...attr }) => {
  const sectionEl = useRef();
  useInView(sectionEl);

  return (
    <section {...attr} id={id} ref={sectionEl}>
      {children}
    </section>
  );
};
