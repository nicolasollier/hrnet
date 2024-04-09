import PropTypes from 'prop-types';

const SubmitButton = ({ type, onClick }) => {
  return (
    <button type={type} onClick={onClick}>Save</button>
  );
}

SubmitButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
}

export default SubmitButton;