import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Countdown from 'react-countdown';

export class Cycles extends React.Component {

    cetusStartDate;
    earthStartDate;
    vallisStartDate;

    resetCountdown(key) {
        console.log('completed');
        this[key] = new Date(Date.now() + 10000);
    }

    render() {
        // this.startDate = new Date(this.props.cycle.expiry);
        this.startDate = new Date(Date.now() + 1000);
        this.cetusStartDate = new Date(this.props.cetusCycle.expiry);
        this.earthStartDate = new Date(this.props.earthCycle.expiry);
        this.vallisStartDate = new Date(this.props.vallisCycle.expiry);
        return(
            <Col xs="3">
                <h2>Cycles</h2>
                <Card>
                    <Card.Body>
                        <p>Cetus Cycle</p>
                        <p>
                            {this.props.cetusCycle.isDay ? 'Day' : 'Night'} ends in: 
                            <Countdown key={this.props.cetusCycle.id} daysInHours={true} date={new Date(this.cetusStartDate)} onComplete={() => this.resetCountdown('cetusStartDate') }/>
                        </p>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <p>Earth Cycle</p>
                        <p>
                            {this.props.earthCycle.isDay ? 'Day' : 'Night'} ends in: 
                            <Countdown key={this.props.earthCycle.id} daysInHours={true} date={new Date(this.earthStartDate)} onComplete={() => this.resetCountdown('earthStartDate') }/>
                        </p>
                    </Card.Body>
                </Card>
                
                <Card>
                    <Card.Body>
                        <p>Vallis Cycle</p>
                        <p>
                            Warm weather {this.props.vallisCycle.isWarm ? 'ends' : 'starts'} in: 
                            <Countdown key={this.props.vallisCycle.id} daysInHours={true} date={new Date(this.vallisStartDate)} onComplete={() => this.resetCountdown('vallisStartDate') }/>
                        </p>
                    </Card.Body>
                </Card>
                
                
            </Col>
        );
    }
}