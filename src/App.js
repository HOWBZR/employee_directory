import React from 'react';
// import logo from './logo.svg';
import './App.css';
import api from "./utils/api"
import EmployeeTable from './components/Employee_Table';


class App extends React.Component {

  state = {
    employees: [
      { name: '' },
      { email: '' },
    ],
    filteredEmployees: [],
    sortedEmployees: []
  }


  listEmployees = () => {
    api.getEmployeeInfo().then(res => {
      const employeeList = res.data.results

      const arr = []
      employeeList.forEach(e => {
        const firstName = e.name.first
        const lastName = e.name.last
        const fullName = firstName + ' ' + lastName
        const emails = e.email
        arr.push({
          name: fullName,
          email: emails
        })
      })
      // console.log(arr)
      this.setState({
        employees: arr,
        filteredEmployees: arr
      })
    })
  }

  handleChange = (e) => {
    const filtered = e.target.value
    const filteredEmployees = this.state.employees.filter(f => {
      if (f.name.includes(filtered)) {
        return f
      }
    })
    this.setState({ filteredEmployees })
  }

  // sorted = (s) => {
  //   const { sort } = 
  // }


  componentDidMount() {
    this.listEmployees()
  }

  render() {


    return (
      <div className="App">
        <form>
          <label for="name">Search by name</label>
          <input type="text" id="name" onChange={(e) => this.handleChange(e)}></input>
        </form>
          <p>Click the button to sort the table alphabetically, by name:</p>
          <button>Sort</button>

        <EmployeeTable
          employees={this.state.filteredEmployees}
        />
      </div>
    );
  }
}
export default App;
