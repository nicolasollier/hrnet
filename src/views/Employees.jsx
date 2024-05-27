import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTable } from 'react-table';
import { Link } from "react-router-dom";
import Header from "../components/MainHeader";
import styles from "../styles/Employees.module.css";
import { employeesSlice } from '../reducers/employeesReducer';
import { formatDate } from '../../utils/dateFormatter';

const Employees = () => {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees.employees);

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      JSON.parse(storedEmployees).forEach(employee => {
        dispatch(employeesSlice.actions.addEmployee(employee));
      });
    }
  }, [dispatch]);

  const data = useMemo(() => employees.map(employee => ({
    ...employee,
    dateOfBirth: formatDate(employee.dateOfBirth),
    startDate: formatDate(employee.startDate)
  })), [employees]);

  const columns = useMemo(() => [
    { Header: 'First Name', accessor: 'firstName' },
    { Header: 'Last Name', accessor: 'lastName' },
    { Header: 'Date Of Birth', accessor: 'dateOfBirth' },
    { Header: 'Start Date', accessor: 'startDate' },
    { Header: 'Department', accessor: 'department' },
    { Header: 'Street', accessor: 'street' },
    { Header: 'City', accessor: 'city' },
    { Header: 'State', accessor: 'state' },
    { Header: 'Zip Code', accessor: 'zipCode' }
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <>
      <Header>
        <h1>Current Employees</h1>
      </Header>

      <div className={styles.container}>
        <table {...getTableProps()} className={styles.tableDisplay}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr
                key={'tr_' + headerGroup.id}
                {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    key={'th_' + column.id}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  key={'tr_' + row.id}
                >
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()} key={'td_' + cell.column.id}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}

export default Employees;
