import React from "react";

class EmployeeTabHeader extends React.Component {

    render() {
        const {name, info} = this.props.employee
        return (
            <div>
                <h2>{name}</h2>
                <h2>{info}</h2>
            </div>
        );
    }
}

export default EmployeeTabHeader;