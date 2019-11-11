import React, {Component} from 'react';
import axios from 'axios';


class Reports extends Component {
  state = {
    reports: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:3000/api/report/reports')
      .then(response => {
        this.setState({reports: response.data.reports});
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <h1>Test API</h1>
        <ul>
          {this.state.reports.map(report => (
            <li key={report._id}>{report._id}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default Reports;