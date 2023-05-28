import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setInView } from '../store';

export const HashLink = props => {
  const dispatch = useDispatch();

  const scrollIntoView = () => {
    const target = document.querySelector(props.to);
    if (!target) return;

    if (window.innerWidth < 992) {
      target.scrollIntoView({
        block: 'nearest',
        inline: 'start'
      });
    } else {
      document
        .querySelector('main')
        .setAttribute('style', `transform: translateY(-${target.offsetTop}px)`);
      dispatch(setInView(props.to.substring(1)));
    }
  };
  return <Link {...props} onClick={scrollIntoView} />;
};
