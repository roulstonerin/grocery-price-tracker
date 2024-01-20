// GroceryList.js
import * as React from 'react';
import FoodTiles from './FoodTiles';
import './styles.css';

const GroceryList = () => {

    return (
        <div className='center'>
            <h1>CrowdyCart</h1>
            <FoodTiles />
        </div>
    );
};

export default GroceryList;

