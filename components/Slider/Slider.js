//libraries
import React, {Component} from 'react';
import classes from "./Slider.scss";

import data from './data';

import SliderItem from "./SliderItem/SliderItem";

// const data = [
//   {
//     "id": 1,
//     "imgUrl": 'static/images/banner1.jpg',
//   },
//   {
//     "id": 2,
//     "imgUrl": 'static/images/banner2.jpg',
//   }, 
// ]

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
            console.log(index);
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
