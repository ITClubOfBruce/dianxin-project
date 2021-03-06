import React from 'react'
import { Row,Col } from 'antd'
import { Carousel } from 'antd';
import PCNewsImageBlock from './pc_news_image_block'

export default class PCNewsContainer extends React.Component{
    render(){
        const contentStyle = {
            dots:true,
            autoplay:true,
            speed:500,
            slidesToShow:1,
            infinite:true
        };

        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="container">
                        <div class="leftContainer">
                            <div class="carousel">
                                <Carousel {...contentStyle}>
                                    <div>
                                        <img src="../../images/carousel_1.jpg" />
                                    </div>
                                    <div>
                                        <img src="../../images/carousel_2.jpg" />
                                    </div>
                                    <div>
                                        <img src="../../images/carousel_3.jpg" />
                                    </div>
                                    <div>
                                        <img src="../../images/carousel_4.jpg" />
                                    </div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock></PCNewsImageBlock>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}