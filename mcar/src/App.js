import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './App.css';
import CarList from './components/CarList';

function App() {
  return (
    // figure out the css stuffs
    <div className="App">
      <AppBar position="static" color="default" style={{ background: '#00ADEF' }}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
           CarList
          </Typography>
        </Toolbar>
      </AppBar>
      <CarList />
    </div>
  );
}

export default App;
