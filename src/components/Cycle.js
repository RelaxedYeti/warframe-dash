import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Countdown from 'react-countdown';

export class Cycle extends React.Component {

    id;
    startDate;
    isPrimary;

    constructor(props) {
        super(props);
        this.setState({
            startDate: null,
            id: null,
            isPrimary: null
        });
    }

    resetCountdown() {
        let idNumber = this.id.split(this.props.cycleKey)[1];
        idNumber++;
        this.setState(
            {
                id: this.props.cycleKey + idNumber,
                startDate: new Date(Date.now() + this.props.intervalTime),
                isPrimary: this.state ? !this.state.isPrimary : !this.props.isPrimary
            }
        );
    }

    render() {
        this.startDate = this.state ? this.state.startDate : new Date(this.props.expiry);
        this.id = this.state ? this.state.id : this.props.id;
        this.isPrimary = this.isPrimary != null ? this.state.isPrimary : this.props.isPrimary;
        return(
            <Card>
                <Card.Body>
                    <Row>
                        <Col xs="6">
                            <p className="cycle-label">{this.isPrimary ? this.props.primaryText : this.props.secondaryText } {this.props.cycleText}</p>
                        </Col>
                        <Col xs="6">
                            <p className="cycle-countdown">
                                <Countdown key={this.id} daysInHours={true} date={this.startDate} onComplete={() => this.resetCountdown() }/>
                            </p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }

}