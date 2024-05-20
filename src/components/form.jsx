import { useState } from 'react';
import InputForm from "./InputForm";
import { departments, states } from "../constants";
import SubmitButton from "./SubmitButton";
import { saveEmployee } from "../../utils/saveEmployee";

const Form = () => {
  const formStyles = {
    maxWidth: '920px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#213547',
    margin: '2.5rem auto'
  };

  const addressStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '2rem 0',
    borderRadius: '4px',
    border: '1px solid #213547',
    paddingBottom: '2rem'
  };

  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  return (
    <form style={formStyles} onSubmit={e => { e.preventDefault(); saveEmployee(); }}>
      <InputForm name="first_name" type="text" />
      <InputForm name="last_name" type="text" />
      <InputForm name="date_of_birth" type='date' value={dateOfBirth} onChange={setDateOfBirth} isDatePicker />
      <InputForm name="start_date" type='date' value={startDate} onChange={setStartDate} isDatePicker />

      <fieldset style={addressStyles}>
        <legend>Address</legend>
        <InputForm id="street" name="street" type="text" />
        <InputForm id="city" name="city" type="text" />
        <InputForm id="state" name="state" isSelect data={states} />
        <InputForm id="zip_code" name="zip_code" type="number" />
      </fieldset>

      <InputForm id="department" name="department" isSelect data={departments} />
      <SubmitButton type="submit" />
    </form>
  );
};

export default Form;
