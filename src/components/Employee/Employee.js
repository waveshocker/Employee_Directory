import React from "react";
import {TransitionMotion, spring, presets} from "react-motion";
import EmployeeItem from "../EmployeeItem/EmployeeItem.js"
import {ListGroup} from 'react-bootstrap'

class Employe extends React.Component {

    getDefaultStyles = () => {
        return this.props.employeeData.map(employee => ({...employee, style: {height:0, opacity: 1}}));
    };
  
    getStyles = () => {
        const {employeeData} = this.props;

        return employeeData.map((employee, i) => {
            return{
                ...employee,
                style: {
                    height: spring(125, presets.gentle),
                    opacity: spring(1, presets.gentle),
                }
            };
        });
    };

    render() {
        return (
            <TransitionMotion
            defaultStyles={this.getDefaultStyles()}
            styles={this.getStyles}
            >
                {styles =>
                    <ListGroup>
                        {styles.map(({key, style, data}) =>
                        <EmployeeItem key={key} style={style} employee={data} onEmployeeClick={this.props.onEmployeeClick}/>
                        )}
                    </ListGroup>
                }


            </TransitionMotion>
        );
    }
}

export default Employe