import { useEffect } from "react";
import InputForm from "./InputForm";
import { departments, states } from "../constants";
import SubmitButton from "./SubmitButton";
import { saveEmployee } from "../../utils/saveEmployee"
import $ from "jquery";
import "jquery-datetimepicker";

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

  useEffect(() => {
    const initializeDateInputs = () => {
      $('#date_of_birth').datetimepicker({
        timepicker: false,
        format: 'm/d/Y'
      });

      $('#start_date').datetimepicker({
        timepicker: false,
        format: 'm/d/Y'
      });
    };

    initializeDateInputs();
  }, [])

  return (
    <form style={formStyles} action="#">
      <InputForm name="first_name" />
      <InputForm name="last_name" />
      <InputForm name="date_of_birth"></InputForm>
      <InputForm name="start_date"></InputForm>

      <fieldset style={addressStyles}>
        <legend>Address</legend>

        <InputForm id="street" name="street" type="text" />
        <InputForm id="city" name="city" type="text" />
        <InputForm id="state" name="state" type="text" isSelect data={states} />
        <InputForm id="zip_code" name="zip_code" type="number" />
      </fieldset>

      <InputForm id="department" name="department" type="text" isSelect data={departments} />
      <SubmitButton type="submit" onClick={saveEmployee} />
    </form>
  );
}

export default Form;