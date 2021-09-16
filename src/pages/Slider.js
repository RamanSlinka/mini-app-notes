import React from 'react';
import {Carousel} from "react-bootstrap";
import image from "../common/chat.png"
import image1 from "../common/livechat.png"

const Slider = () => {
    return (
        <Carousel  style={{ height: "150px", marginBottom: "20px"}}>
            <Carousel.Item>
                <img
                    className="d-block  "
                    src={image}
                    alt="First slide"
                />
                <Carousel.Caption>
                      </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block "
                    src={image}
                    alt="Second slide"
                />

                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={image}
                    alt="Third slide"
                />

                <Carousel.Caption>
                 </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;