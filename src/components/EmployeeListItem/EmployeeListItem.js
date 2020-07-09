import React from "react"

class EmployeeListItem extends React.Component {

    onClick = () => {
        this.props.onEmployeeClick(this.props.employee)
    }

    render() {
        const {name, info} = this.props.employee        
        return (
            <div className="employee-item" sstyle = {this.props.style} onClick={this.onClick}>                
                <div className="employee-item-text">
                    <h2>{name}</h2>
                    <p>{info}</p>
                </div>
            </div>        
        )        
    }
}

export default EmployeeListItem
    
