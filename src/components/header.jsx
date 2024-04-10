import PropTypes from 'prop-types';

const Header = ({ children }) => {
  const headerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <header style={headerStyles}>
      {children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.any,
}

export default Header;