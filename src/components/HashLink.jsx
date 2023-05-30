import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const HashLink = props => {
  const isScrolling = useSelector(state => state.isScrolling);
  const handleNavigate = e => {
    if (isScrolling) {
      e.preventDefault();
      return;
    }

    if (window.innerWidth < 992)
      document.querySelector(props.to)?.scrollIntoView({
        block: 'nearest',
        inline: 'start'
      });
  };

  return <Link {...props} onClick={handleNavigate} />;
};
