import PropTypes from 'prop-types';

export default function AdviceSlip ({
  adviceItem: { id, advice },
}) {
  AdviceSlip.propTypes = {
    adviceItem: PropTypes.shape({
      id: PropTypes.number.isRequired,
      advice: PropTypes.string.isRequired,
    }).isRequired,
  }

  return (
    <div>
      <h3>Some Advice</h3>
      <p>{advice || 'Loading advice...'}</p>
    </div>
  );
}