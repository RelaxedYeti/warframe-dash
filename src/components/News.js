import React from 'react';
import Moment from 'moment';
import Slider from "react-slick";
import { Card, Col, Accordion, AccordionCollapse, AccordionToggle } from 'react-bootstrap';

export class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };   
    }

    renderSliderElements() {
        return this.props.newsArray.map((value, index) => {
            return (
                <img className="news-image" key={value.id} src={value.imageLink} alt={value.message} data-index={index} />
            );
        });
    }

    render() {
        Moment.locale('en');
        const settings = {
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            swipeToSlide: false,
            beforeChange: (oldValue, current) => this.setState({ activeIndex: current })
        };
        return (
            <Col xs="4">
                <h2>News</h2>
                <Slider {...settings}>
                    {this.renderSliderElements()}
                </Slider>
                <div className="news-list">
                    {this.props.newsArray.map((value, index) => {
                        const newsDate = Moment(value.date);
                        return (
                            <p key={value.id} id={value.id} className={index == this.state.activeIndex ? 'active news-item-container': 'news-item-container'}>
                                <a href={value.link} target="_blank" className="news-item-link">{value.message} ({newsDate.format('MMM d YYYY')}, {newsDate.fromNow()})</a>
                            </p>
                        );
                    })}
                </div>
            </Col>
        );
    }
}