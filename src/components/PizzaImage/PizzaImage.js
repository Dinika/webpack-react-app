import React from 'react';
import classes from './PizzaImage.css';
import PizzaImage from '../../assets/PizzaImage.jpg';

const PizzaImage = () => {
  return (
    <div className={classes.PizzaImageContainer}>
      <img src={PizzaImage} className={classes.PizzaImage} />
    </div>
  );
};

export default PizzaImage;
