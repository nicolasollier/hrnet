export function saveEmployee() {
  const firstName = document.getElementById('first_name');
  const lastName = document.getElementById('last_name');
  const dateOfBirth = document.getElementById('date_of_birth');
  const startDate = document.getElementById('start_date');
  const department = document.getElementById('department');
  const street = document.getElementById('street');
  const city = document.getElementById('city');
  const state = document.getElementById('state');
  const zipCode = document.getElementById('zip_code');

  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const employee = {
    firstName: firstName.value,
    lastName: lastName.value,
    dateOfBirth: dateOfBirth.value,
    startDate: startDate.value,
    department: department.value,
    street: street.value,
    city: city.value,
    state: state.value,
    zipCode: zipCode.value
  };
  employees.push(employee);
  localStorage.setItem('employees', JSON.stringify(employees));
}