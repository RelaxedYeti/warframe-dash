import React from 'react';
import { Card, Col } from 'react-bootstrap';

export class Fissures extends React.Component {

    render() {

        const orderedFissures = this.props.fissuresArray.sort((a, b) => {
            if(a.tierNum > b.tierNum) return 1;
            if(a.tierNum < b.tierNum) return -1;
            return 0;
        });

        return(
            <Col xs="4">
                {orderedFissures.map((value, index) => {
                    return (
                        <Card key={value.id}>
                            <Card.Body>
                                <Card.Title>{value.tier} - {value.missionType}</Card.Title>
                            </Card.Body>
                        </Card>
                    );
                })}
            </Col>
        );
    }
}