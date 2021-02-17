import s from './FeedbackOptions.module.css';
import shortid from 'shortid';
import PropTypes from 'prop-types';

function FeedbackOptions({ options = {}, onLeaveFeedback }) {
  const buttonsType = Object.keys(options);
  return (
    <ul className={s.listOptions}>
      {buttonsType.map(buttonType => (
        <li key={shortid.generate()}>
          <button
            className={s.itemOptions}
            name={buttonType}
            type="button"
            onClick={onLeaveFeedback}
          >
            {buttonType}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object,
};

export default FeedbackOptions;
