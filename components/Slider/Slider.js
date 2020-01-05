//libraries
import React, {Component} from 'react';
import classes from "./Slider.scss";

import data from './data';

import SliderItem from "./SliderItem/SliderItem";


class Slider extends Component {
  state = {
    'number': 1,
  }
  
  componentDidMount() {
    this.startInterval()
  }

  startInterval = () => {
    this.interval = setInterval(() => this.changeSlide(), 5000);
  }

   changeSlide = () => {
     let number = this.state.number
     number ++
    if (number > 5) {
      number = 1
    }
    this.setState({
      number: number
    })
  }


  render() {

    return (
      <section className={classes.Slider}>
        <ul className={classes.SliderList} >
          {data.map((index) => { 
            let background
            if (this.state.number === index.id) {
                background = true
              }
              else {
                background = false
              }
            return (
              <SliderItem 
                imgUrl={index.imgUrl} 
                key = {index.id}  
                background = {background}
              />
              )
             }
            )
          }
        </ul>
    </section>
    )
  }
}


export default Slider;
