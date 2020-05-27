import React, { Component } from 'react';
import { SERVER_URL } from '../constants';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@material-ui/core/Button';
import AddCar from './AddCar';
import EditCar from './EditCar';

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
  };

  onDelClick = (link) => {
    if (window.confirm('Are you sure you want to delete?')) {
      fetch(link, { method: 'DELETE' })
        .then((res) => {
          toast.success('Car Deleted', {
            position: toast.POSITION.BOTTOM_LEFT,
          });
          this.fetchCars();
        })
        .catch((err) => {
          toast.error('Error when deleting', {
            position: toast.POSITION.LEFT,
          });
          console.error(err);
        });
    }
  };

  addCar(car) {
    fetch(SERVER_URL + 'api/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    })
      .then((res) => this.fetchCars())
      .catch((err) => console.error(err));
  }

  updateCar(car, link) {
    fetch(link, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    })
      .then((res) => {
        toast.success('Changes saved', {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        this.fetchCars();
      })
      .catch((err) =>
        toast.error('Error when saving', {
          position: toast.POSITION.BOTTOM_LEFT,
        })
      );
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
        Cell: ({ value, row }) => (
          <EditCar
            car={row}
            link={value}
            updateCar={this.updateCar}
            fetchCars={this.fetchCars}
          />
        ),
      },
      {
        sortable: false,
        filterable: false,
        width: 100,
        accessor: '_links.self.href',
        Cell: ({ value }) => (
          <Button
            size='small'
            color='secondary'
            onClick={() => {
              this.onDelClick(value);
            }}
          >
            Delete
          </Button>
        ),
      },
    ];

    return (
      <div className='car-list'>
        <AddCar addCar={this.addCar} fetchCars={this.fetchCars} />
        <ReactTable
          data={this.state.cars}
          columns={columns}
          filterable={true}
          pageSize={10}
        />
        <ToastContainer autoClose={1500} />
      </div>
    );
  }
}

export default CarList;
