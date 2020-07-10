import React from "react"
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import EmployeeTabHeader from './EmployeeTabHeader.js'

class EmployeeTab extends React.Component {

    render() {
        const employeePanelHeader = <EmployeeTabHeader employee={this.props.employee}/>
        const {contact} = this.props.employee

        return (
            <Card bsClass="employee-card" header={employeePanelHeader}>
                <ListGroup>
                    <ListGroupItem>{contact.office}</ListGroupItem>
                    <ListGroupItem>{contact.mobile}</ListGroupItem>
                    <ListGroupItem>{contact.sms}</ListGroupItem>
                    <ListGroupItem>{contact.email}</ListGroupItem>
                </ListGroup>
            </Card>
        );
    }
}

export default EmployeeTab
