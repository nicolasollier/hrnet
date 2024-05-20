import Header from './components/Header';
import Form from './components/Form';
import { Link } from 'react-router-dom';
import Modal from 'simplest-react-modalbox'

function App() {
  const modalStyles = {
    modal: {
      zIndex: '1000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      position: 'relative',
      top: '25%',
      width: '60%',
      margin: '0 auto',
      maxWidth: '500px',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#fff',
      color: '#fff',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
    },
    close: {
      position: 'absolute',
      top: '3px',
      right: '12px',
      fontSize: '1.5rem',
      color: '#000',
      cursor: 'pointer',
    },
  };

  return (
    <>
      <Modal
        title={"Hello"}
        text={"world!"}
        isOpen={true}
        customStyles={modalStyles}
      />
      <Header>
        <h1>HRnet</h1>
        <Link to='/employees'>View current employees</Link>
      </Header>
      <Form />
    </>
  );
}

export default App;
