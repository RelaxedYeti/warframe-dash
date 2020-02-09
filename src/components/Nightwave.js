import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

export class Nightwave extends React.Component { 
    render() {
        return(
            <Col size="12" key={this.props.nightwaveSeason.id}>
                <Card>
                    <Card.Body>
                        {this.props.nightwaveSeason.challengs.map((value, index)) => {
                            
                        }}
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}