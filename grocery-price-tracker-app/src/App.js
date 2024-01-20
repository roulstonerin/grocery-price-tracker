import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import GroceryList from './GroceryList';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Home</Button>
        </Toolbar>
      </AppBar>
      <GroceryList />
    </div>
  );
}

export default App;

