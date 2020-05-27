import React, { Component } from 'react';
import { SERVER_URL } from '../constants';
import ReactTable from 'react-table';
import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination,
} from 'react-table';


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
    const columns = [{
      Header: 'Brand',
      accessor: 'brand'
    }, {
      Header: 'Model',
      accessor: 'model',
    }, {
      Header: 'Color',
      accessor: 'color',
    }, {
      Header: 'Year',
      accessor: 'year',
    }, {
      Header: 'Price €',
      accessor: 'price',
    },]

    return (
      <div className='car-list'>
        <ReactTable data={cars} columns={columns}
        filterable={true}/>
      </div>
    );
  }
}

export default CarList;
