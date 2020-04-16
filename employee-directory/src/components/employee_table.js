import React from "react";

const EmployeeTable = (props) => {
    return (
        <div className="Employeetable">
            
            <tr>
                <th className="Tableheader">Employee List</th>
            </tr>
            {props.employees.map(e => (

                <tr className="Tabledata" >
                    <td>
                        {e.name}
                    </td>
                    <td>
                        {e.email}
                    </td>
                   
                </tr>

            ))}

        </div>
    )
}

export default EmployeeTable;