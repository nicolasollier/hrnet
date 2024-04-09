const Header = () => {
  const headerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return ( 
    <header style={headerStyles}>
      <h1>HRnet</h1>  
      <a>View current employees</a>
    </header>
   );
}
 
export default Header;