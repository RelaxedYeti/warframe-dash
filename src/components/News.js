import React from 'react';
import Moment from 'moment';
import { Card, Col, Accordion, AccordionCollapse, AccordionToggle } from 'react-bootstrap';

export class News extends React.Component {

    formatDate(date) { 
        return Moment(date).format('MMM d YYYY');
    }

    render() {
        Moment.locale('en');
        const newArray = this.props.newsArray.reverse();
        return (
            <Col xs="3">
                <Accordion defaultActiveKey="0">
                    <Accordion.Toggle eventKey="0">
                        News
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <div>
                        {
                            newArray.map((value, index) => {
                                return (
                                    <Card className="news" target="_blank" key={value.id} onClick={() => {window.open(value.link, '_blank');}}>
                                        <Card.Img variant="top" src={value.imageLink} />
                                        <Card.Body>{value.message} ({this.formatDate(value.date)})</Card.Body>
                                    </Card>
                                )
                            })
                        }
                        </div>
                    </Accordion.Collapse>
                </Accordion>
            </Col>
        );
    }
}