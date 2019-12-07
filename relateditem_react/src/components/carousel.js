import React from 'react'
import Slider from 'react-slick'
import Axios from 'axios'

class Carousle extends React.Component {
    constructor(){
        super()
        this.state = {
            item: []
        }
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData(){
        Axios.get('http://localhost:8080/rodney')
        .then(({data}) => {
           this.setState({item: data})
        })
    }


    render(){
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToScroll: 4,
            slidesToShow: 4
        }
        return(
            <div className="slider">
            <Slider {...settings} className="container">
                {Object.entries(this.state.item).map(([key,value],i) => {
                    return (
                        <div>
                            <img id="size" src={value.img}/>
                        </div>
                    )
                })}
            </Slider>
            </div>
        )
    }
}

export default Carousle