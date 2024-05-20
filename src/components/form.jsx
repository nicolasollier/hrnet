import { useState } from 'react';
import InputForm from "./InputForm";
import { departments, states } from "../constants";
import SubmitButton from "./SubmitButton";
import { useSelector, useDispatch } from 'react-redux';
import { addEmployee } from "../reducers/employeesReducer";

const Form = () => {
  const formIsValid = useSelector(state => state.form.formIsValid);
  const dispatch = useDispatch();

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
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    startDate: new Date(),
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: ''
  });

  const cleanFormInputs = () => {
    setEmployeeData({
      firstName: '',
      lastName: '',
      dateOfBirth: new Date(),
      startDate: new Date(),
      street: '',
      city: '',
      state: '',
      zipCode: '',
      department: ''
    });
    setDateOfBirth(new Date());
    setStartDate(new Date());
  }

  const handleInputChange = (field, value) => {
    if (field === 'dateOfBirth' || field === 'startDate') {
      value = new Date(value);
    }
    setEmployeeData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const serializableEmployeeData = {
      ...employeeData,
      dateOfBirth: employeeData.dateOfBirth.toISOString(),
      startDate: employeeData.startDate.toISOString(),
    };

    dispatch(addEmployee(serializableEmployeeData));
    cleanFormInputs();
  };

  return (
    <form 
      style={formStyles} 
      onSubmit={handleSubmit}
    >
      <InputForm 
        name="first_name" 
        type="text"  
        value={employeeData.firstName}
        onChange={(e) => handleInputChange('firstName', e.target.value)}
      />
      <InputForm 
        name="last_name" 
        type="text" 
        value={employeeData.lastName}
        onChange={(e) => handleInputChange('lastName', e.target.value)}
      />
      <InputForm 
        name="date_of_birth" 
        type='date' 
        value={dateOfBirth} 
        onChange={setDateOfBirth} 
        isDatePicker 
      />
      <InputForm 
        name="start_date" 
        type='date' 
        value={startDate} 
        onChange={setStartDate} 
        isDatePicker 
      />

      <fieldset style={addressStyles}>
        <legend>Address</legend>
        <InputForm 
          id="street" 
          name="street" 
          type="text" 
          value={employeeData.street}
          onChange={(e) => handleInputChange('street', e.target.value)}
        />
        <InputForm 
          id="city" 
          name="city" 
          type="text" 
          value={employeeData.city}
          onChange={(e) => handleInputChange('city', e.target.value)}
        />
        <InputForm 
          id="state" 
          name="state" 
          data={states} 
          isSelect
          value={employeeData.state}
          onChange={(e) => handleInputChange('state', e.target.value)} 
        />
        <InputForm 
          id="zip_code" 
          name="zip_code" 
          type="number" 
          value={employeeData.zipCode}
          onChange={(e) => handleInputChange('zipCode', e.target.value)}
        />
      </fieldset>

      <InputForm 
        id="department" 
        name="department"  
        data={departments}
        isSelect   
      />
      <SubmitButton 
        disabled={!formIsValid} 
        type="submit" 
      />
    </form>
  );
};

export default Form;
