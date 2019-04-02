import React from 'react';
import classes from './PizzaImage.css';
import PizzaImg from '../../assets/PizzaImg.jpg';

const PizzaImage = () => {
  return (
    <div className={classes.PizzaImageContainer}>
      <img src={PizzaImg} className={classes.PizzaImage} />
    </div>
  );
};

export default PizzaImage;
