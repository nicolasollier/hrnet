import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net";

const Employees = () => {
  const containerStyles = {
    marginTop: '2rem'
  }

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees')
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  useEffect(() => {
    const table = $('#employee-table').DataTable({
      data: employees,
      columns: [
        { data: 'firstName', title: 'First Name' },
        { data: 'lastName', title: 'Last Name' },
        { data: 'dateOfBirth', title: 'Date Of Birth' },
        { data: 'startDate', title: 'Start Date' },
        { data: 'department', title: 'Department' },
        { data: 'street', title: 'Street' },
        { data: 'city', title: 'City' },
        { data: 'state', title: 'State' },
        { data: 'zipCode', title: 'Zip Code' }
      ]
    });

    return () => {
      table.destroy();
    };
  }, [employees]);

  return (
    <>
      <Header>
        <h1>Current employees</h1>
      </Header>

      <div id="employee-div" style={containerStyles}>
        <table id="employee-table" className="display"></table>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}

export default Employees;
