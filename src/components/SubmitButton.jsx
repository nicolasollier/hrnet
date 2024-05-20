import PropTypes from 'prop-types';

const SubmitButton = ({ type, onClick, disabled }) => {
  const buttonStyles = {
    backgroundColor: disabled ? '#F0F0F3' : '#E9E9EC',
    padding: '1rem 1.5rem',
    border: 'none',
    borderRadius: '5px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    width: '100%',
    marginTop: '1rem',
    color: disabled ? '#CCC' : '#000',
    opacity: disabled ? 0.5 : 1
  }

  return (
    <button
      onMouseEnter={(e) => !disabled && (e.target.style.backgroundColor = '#D0D0D5')}
      onMouseLeave={(e) => !disabled && (e.target.style.backgroundColor = '#E9E9EC')}
      style={buttonStyles}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      Save
    </button>
  );
}

SubmitButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export default SubmitButton;
