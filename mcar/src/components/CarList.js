import React, { Component } from 'react';
import { SERVER_URL } from '../constants';

class CarList extends Component {
  constructor(props) {
    super(props);
    this.state = { cars: [] };
  }

  componentDidMount() {
    fetch(SERVER_URL + 'api/cars')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          cars: responseData._embedded.cars,
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { cars } = this.state;
    const tableRows = cars.map((car, index) => (
      <tr key={index}>
        <td>{car.brand}</td>
        <td>{car.model}</td>
        <td>{car.color}</td>
        <td>{car.year}</td>
        <td>{car.price}</td>
      </tr>
    ));
    return (
      <div className='car-list'>
        <table>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    );
  }
}

export default CarList;
