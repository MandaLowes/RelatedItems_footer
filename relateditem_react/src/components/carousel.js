import React from 'react'
import Slider from 'react-slick'


class Carousle extends React.Component {
    constructor(){
        super()
    }


    render(){
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            centerPadding: '10px',
            slidesToScroll: 4,
            slidesToShow: 4
        }
        return(
            <div className="slider">
            <Slider {...settings} className="container">
                <div id="item">
                <h3>1</h3>
                </div>
                <div id="item">
                <h3>2</h3>
                </div>
                <div id="item">
                <h3>3</h3>
                </div>
                <div id="item">
                <h3>4</h3>
                </div>
                <div id="item">
                <h3>5</h3>
                </div>
                <div id="item">
                <h3>6</h3>
                </div>
            </Slider>
            </div>
        )
    }
}

export default Carousle