import { Link } from 'react-router-dom';

export const HashLink = props => {
  const scrollIntoView = () => {
    const target = document.querySelector(props.to);
    if (!target) return;

    if (window.innerWidth < 992) {
      target.scrollIntoView({
        block: 'nearest',
        inline: 'start'
      });
    } else
      document
        .querySelector('main')
        .setAttribute('style', `transform: translateY(-${target.offsetTop}px)`);
  };
  return <Link {...props} onClick={scrollIntoView} />;
};
