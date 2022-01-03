import "./Review.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";

// 2.3 - Partners Carousel
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>

        <div className="slider-title">
          <p>Meet The Partners</p>
        </div>

        <Container>
          <Slider {...settings}>
            <div>
              <img src="https://i.ibb.co/vH4N5tc/Wooden-Watch.png" alt="brand" />
            </div>

          </Slider>
        </Container>
      </>
    );
  }
}