import s from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = 0,
}) {
  return (
    <>
      <ul>
        <li className={s.statItem}>Good: {good}</li>
        <li className={s.statItem}>Neutral: {neutral}</li>
        <li className={s.statItem}>Bad: {bad}</li>
        <li className={s.statItem}>Total: {total}</li>
        <li className={s.statItem}>PositiveFeedback: {positivePercentage}%</li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

export default Statistics;
