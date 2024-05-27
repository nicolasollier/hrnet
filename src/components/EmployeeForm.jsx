import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputForm from "./InputForm";
import { departments, states } from "../constants";
import SubmitButton from "./SubmitButton";
import { useDispatch } from 'react-redux';
import { addEmployee } from "../reducers/employeesReducer";
import { validateEmployeeForm } from '../../utils/formValidationRules';

const EmployeeForm = ({ openModal }) => {
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
    dateOfBirth: dateOfBirth,
    startDate: startDate,
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleInputChange = (field, value) => {
    setEmployeeData(prev => ({ ...prev, [field]: value }));
    setIsTouched(true);
  };

  useEffect(() => {
    setIsFormValid(validateEmployeeForm(employeeData));
  }, [employeeData]);

  const cleanFormData = () => {
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
    setIsTouched(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const serializableEmployeeData = {
      ...employeeData,
      dateOfBirth: new Date(employeeData.dateOfBirth).toISOString(),
      startDate: new Date(employeeData.startDate).toISOString(),
    };
    dispatch(addEmployee(serializableEmployeeData));
    cleanFormData();
    openModal();
  };

  return (
    <form
      style={formStyles}
      onSubmit={handleSubmit}
      noValidate
    >
      <InputForm
        name="first_name"
        type="text"
        value={employeeData.firstName}
        onChange={(e) => handleInputChange('firstName', e.target.value)}
        required
      />
      <InputForm
        name="last_name"
        type="text"
        value={employeeData.lastName}
        onChange={(e) => handleInputChange('lastName', e.target.value)}
        required
      />
      <InputForm
        name="date_of_birth"
        isDatePicker
        value={employeeData.dateOfBirth}
        onChange={(date) => handleInputChange('dateOfBirth', date)}
        required
      />
      <InputForm
        name="start_date"
        isDatePicker
        value={employeeData.startDate}
        onChange={(date) => handleInputChange('startDate', date)}
        required
      />
      <fieldset style={addressStyles}>
        <legend>Address</legend>
        <InputForm
          id="street"
          name="street"
          type="text"
          value={employeeData.street}
          onChange={(e) => handleInputChange('street', e.target.value)}
          required
        />
        <InputForm
          id="city"
          name="city"
          type="text"
          value={employeeData.city}
          onChange={(e) => handleInputChange('city', e.target.value)}
          required
        />
        <InputForm
          id="state"
          name="state"
          data={states}
          isSelect
          value={employeeData.state}
          onChange={(e) => handleInputChange('state', e.target.value)}
          required
        />
        <InputForm
          id="zip_code"
          name="zip_code"
          type="number"
          value={employeeData.zipCode}
          onChange={(e) => handleInputChange('zipCode', e.target.value)}
          required
        />
      </fieldset>

      <InputForm
        id="department"
        name="department"
        data={departments}
        isSelect
        value={employeeData.department}
        onChange={(e) => handleInputChange('department', e.target.value)}
        required
      />
      {!isFormValid && isTouched && (
        <div style={{ color: 'red', marginTop: '1rem' }}>
          Please fill out all required fields correctly.
        </div>
      )}
      <SubmitButton type="submit" disabled={!isFormValid} />
    </form>
  );
};

EmployeeForm.propTypes = {
  openModal: PropTypes.func,
};

export default EmployeeForm;
