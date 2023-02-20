import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <div>
        {Object.keys(options).map((option, index) => (
            <button
                className={css.feedbackBtn}
                key={index}
                name={option}
                onClick={onLeaveFeedback}
            >{option} </button>))
        }
    </div >
}

FeedbackOptions.propTypes = {
    options: PropTypes.exact({
        good: PropTypes.string.isRequired,
        neutral: PropTypes.string.isRequired,
        bad: PropTypes.bull.isRequired,
    }),
    onLeaveFeedback: PropTypes.func.isRequired,
  }

