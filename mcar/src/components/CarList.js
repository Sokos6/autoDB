import React, { Component } from 'react';
import { SERVER_URL } from '../constants';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

class CarList extends Component {
  constructor(props) {
    super(props);
    this.state = { cars: [] };
  }

  componentDidMount() {
    this.fetchCars();
  }

  fetchCars = () => {
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
    // const { cars } = this.state;
    const columns = [
      {
        Header: 'Brand',
        accessor: 'brand',
      },
      {
        Header: 'Model',
        accessor: 'model',
      },
      {
        Header: 'Color',
        accessor: 'color',
      },
      {
        Header: 'Year',
        accessor: 'year',
      },
      {
        Header: 'Price $',
        accessor: 'price',
      },
      {
        id: 'deletebutton',
        sortable: false,
        filterable: false,
        width: 100,
        accessor: '_links.self.href',
        Cell: ({ value }) => (
          <button
            onClick={() => {
              this.onDelClick(value);
            }}
          >
            Delete
          </button>
        ),
      },
    ];

    return (
      <div className='car-list'>
        <ReactTable
          data={this.state.cars}
          columns={columns}
          filterable={true}
        />
      </div>
    );
  }
}

export default CarList;
