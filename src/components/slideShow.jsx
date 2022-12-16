import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../img/noel-1.png';
import img2 from '../img/noel-2.jpg';
import img3 from '../img/verre.png';


export default class Slideshow extends Component {
    
  render() {
    const myArray = [
        {
          number: 1,
          title: 'Image 1',
          img: img1,
        },
        {
          number: 2,
          title: 'Image 2',
          img: img2,
        },
        {
          number: 3,
          title: 'Image 3',
          img: img3,
        },
      ];
      
    return (
    <Carousel showArrows={true} onChange={onchange} className="slide-show">
        

        {myArray.map((item, index) => (
            <div key={index}>
            <img src={item.img} width="100" height="50" alt={item.title} />

          </div>
        ))}
      </Carousel>
    );
  }
} 



