import Header from './components/Header'
import Form from './components/Form'
import { Link } from 'react-router-dom'
import Modal from 'simplest-react-modalbox'

function App() {
  return (
    <>
      <Modal title={"Hello"} text={"world!"} status={'refused'} />
      <Header>
        <h1>HRnet</h1>
        <Link to='/employees'>View current employees</Link>
      </Header>
      <Form />
    </>
  )
}

export default App
