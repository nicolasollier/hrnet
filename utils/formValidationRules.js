export const isValidDate = (date) => date instanceof Date && !isNaN(date);

export const is18OrOlder = (dateOfBirth) => {
  const today = new Date();
  const minAge = 18;
  const birthDate = new Date(dateOfBirth);
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  return (age > minAge) || (age === minAge && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)));
};

export const isValidZipCode = (zipCode) => /^\d{5}(-\d{4})?$/.test(zipCode);
export const isNonEmptyString = (str) => str.trim().length > 0;

export const validateEmployeeForm = (employeeData) => {
  const { firstName, lastName, dateOfBirth, startDate, street, city, state, zipCode, department } = employeeData;
  const today = new Date();

  const rules = [
    isNonEmptyString(firstName),
    isNonEmptyString(lastName),
    isValidDate(new Date(dateOfBirth)),
    is18OrOlder(dateOfBirth),
    isValidDate(new Date(startDate)),
    new Date(startDate) <= today,
    isNonEmptyString(street),
    isNonEmptyString(city),
    state,
    isValidZipCode(zipCode),
    department
  ];

  return rules.every(Boolean);
};
