import React from 'react';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import Moment from 'moment';
import Countdown from 'react-countdown';

export class Trader extends React.Component {

    getInventory() {
        if(!this.props.voidTrader.inventory || this.props.voidTrader.inventory.length == 0) return;

        return (
            <ListGroup>
                {this.props.voidTrader.inventory.map((value, index) => {
                    return (
                        <ListGroup.Item>

                        </ListGroup.Item>
                    );
                })}
            </ListGroup>
        );
    }

    render() {
        Moment.locale('en');
        const startDate = Moment(this.props.voidTrader.activation);
        const isActive = startDate.isAfter();
        return (
            <Col xs="12">
                <Card>
                    <Card.Title>{this.props.voidTrader.character}</Card.Title>
                    <Card.Subtitle>{this.props.voidTrader.location}</Card.Subtitle>
                    <Card.Text>
                        <p>
                            {isActive ? this.props.voidTrader.character + ' will be back in ' : ' will leave in ' }<Countdown key={this.props.voidTrader.id} daysInHours={true} date={startDate} />
                        </p>
                    </Card.Text>
                    {this.getInventory()}
                </Card>
            </Col>
        );
    }

}
