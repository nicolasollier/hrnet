import PropTypes from 'prop-types';

const SubmitButton = ({ type, onClick }) => {
  const buttonStyles = {
    backgroundColor: '#E9E9EC',
    padding: '1rem 1.5rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    marginTop: '1rem',
  }

  return (
    <button
      onMouseEnter={(e) => e.target.style.backgroundColor = '#D0D0D5'}
      onMouseLeave={(e) => e.target.style.backgroundColor = '#E9E9EC'}
      style={buttonStyles}
      type={type}
      onClick={onClick}
    >
      Save
    </button>
  );
}

SubmitButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
}

export default SubmitButton;