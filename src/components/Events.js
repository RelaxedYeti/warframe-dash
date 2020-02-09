import React from 'react';

import { Card, Col } from 'react-bootstrap';

export class Events extends React.Component {


    render() {
        return(
            <Col xs="3">
                {this.props.events.map((value, index) => {
                    return (
                        <Card key={value.id}>
                            <Card.Body>

                            </Card.Body>
                        </Card>
                    );
                })}
            </Col>
        );
    }

}