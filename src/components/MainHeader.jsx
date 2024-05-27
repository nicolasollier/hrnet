import PropTypes from 'prop-types';

const MainHeader = ({ children }) => {
  const headerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem',
  }

  return (
    <header style={headerStyles}>
      {children}
    </header>
  );
}

MainHeader.propTypes = {
  children: PropTypes.any,
}

export default MainHeader;