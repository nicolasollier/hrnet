import MainHeader from './components/MainHeader';
import EmployeeForm from './components/EmployeeForm';
import { Link } from 'react-router-dom';
import Modal from 'simplest-react-modalbox'
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        title={"Employee Created"}
        text={"The new employee has been successfully added."}
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false) }}
        customStyles={modalStyles}
      />
      <MainHeader>
        <h1>HRnet</h1>
        <Link to='/employees'>View current employees</Link>
      </MainHeader>
      <EmployeeForm openModal={() => { setIsModalOpen(true) }} />
    </>
  );
}

export default App;
