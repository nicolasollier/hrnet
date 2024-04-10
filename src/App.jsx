import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import { Link } from 'react-router-dom';
import Modal from 'simplest-react-modalbox'

function App() {
  const customStyles = {
    modal: {
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      position: 'relative',
      width: '60%',
      maxWidth: '500px',
      padding: '20px',
      borderRadius: '10px',
      border: '2px dashed #00f',
      backgroundColor: '#000',
      color: '#fff',
      boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.3)',
    },
    close: {
      position: 'absolute',
      top: '8px',
      right: '8px',
      fontSize: '1.5rem',
      color: '#ff0',
      cursor: 'pointer',
    },
  };

  return (
    <>
      <Modal
        styles={customStyles}
        title={"Hello"}
        text={"world!"}
        onClick={() => console.log('clicked')}
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
