import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slidingimage1 from '../images/slidingimage1.jpeg'
import slidingimage2 from '../images/slidingimage2.jpeg'
import slidingimage3 from '../images/slidingimage3.jpeg'


const CarouselImage = () => {
  return (
    <div>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className='slidingImage'
            src = {slidingimage1}
            alt = 'firstSlide'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className='slidingImage'
            src = {slidingimage2}
            alt = 'firstSlide'
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='slidingImage'
            src = {slidingimage3}
            alt = 'firstSlide'
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselImage
