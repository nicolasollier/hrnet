import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";
import $ from "jquery";
import "datatables.net";

const Employees = () => {
  useEffect(() => {
    $('#employee-table').DataTable();

    return () => {
      $('#employee-table').DataTable().destroy();
    };
  }, []);

  const containerStyles = {
    marginTop: '2rem'
  }

  return (
    <>
      <Header>
        <h1>Current employees</h1>
      </Header>

      <div id="employee-div" style={containerStyles}>
        <table id="employee-table" className="display" style={{ width: "100%" }}></table>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}

export default Employees;