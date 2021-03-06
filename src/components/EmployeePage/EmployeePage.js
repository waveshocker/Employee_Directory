import React from "react";
import EmployeePanel from "../EmployeeTab/EmployeeTab.js";

class EmployeePage extends React.Component {

    render() {
        let {selectedEmployee} = this.props;

        return (
            <div className="employee-container">
                <h1 style={{marginleft: '20px'}}>Employee</h1>
                <EmployeePanel employee={selectedEmployee}/>
            </div>
        );
    };
};

export default EmployeePage;