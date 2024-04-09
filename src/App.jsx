import Header from './components/Header'
import Form from './components/Form'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Header>
        <h1>HRnet</h1>
        <Link to='/employees'>View current employees</Link>
      </Header>
      <Form />
    </>
  )
}

export default App
