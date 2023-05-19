import './RubberText.css';
export const RubberText = ({ text }) => (
  <span className="rubber-text">
    {text
      .trim()
      .split(' ')
      .map((word, index) => (
        <span className="rubber-word" key={index}>
          {[...word].map((char, i) => (
            <span key={i} className="rubber-band">
              {char}
            </span>
          ))}
        </span>
      ))}
  </span>
);
