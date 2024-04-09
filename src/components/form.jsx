import InputForm from "./InputForm";
import { departments, states } from "../constants";

const Form = () => {
  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
    color: '#213547',
  }

  const addressStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '2rem 0',
    borderRadius: '4px',
    border: '1px solid #213547',
    paddingBottom: '2rem'
  }

  return (
    <form style={formStyles} action="#">
      <InputForm name="first_name" />
      <InputForm name="last_name" />

      <fieldset style={addressStyles}>
        <legend>Address</legend>

        <InputForm id="street" name="street" type="text" />
        <InputForm id="city" name="city" type="text" />
        <InputForm id="state" name="state" type="text" isSelect data={states}/>
        <InputForm id="zip_code" name="zip_code" type="number" />
      </fieldset>
      
      <InputForm id="department" name="department" type="text" isSelect data={departments}/>
    </form>
  );
}

export default Form;