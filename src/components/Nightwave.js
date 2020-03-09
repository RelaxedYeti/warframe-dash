import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Countdown from 'react-countdown';

export class Nightwave extends React.Component {


    getChallenges(challenges) {
        if(challenges.length === 0) return;
        return challenges.map((value, index) => {
            const startDate = new Date(value.expiry);
            return (
                <Col xs="3" key={value.id}>
                    <Card>
                        <Card.Body>
                            <Countdown key={value.id} daysInHours={true} date={startDate} />
                            <p>{value.reputation}</p>
                            <p>{value.desc}</p>
                        </Card.Body>
                    </Card>
                </Col>
            );
        });
    }

    render() {
        const dailies = [];
        const challenges = [];
        if(this.props.nightwaveSeason.activeChallenges) {
            for(let i = 0; i < this.props.nightwaveSeason.activeChallenges.length; i++) {
                if(this.props.nightwaveSeason.activeChallenges[i].isDaily) {
                    dailies.push(this.props.nightwaveSeason.activeChallenges[i]);
                } else {
                    challenges.push(this.props.nightwaveSeason.activeChallenges[i]);
                }
            }
        }

        return(
            <Col size="12" key={this.props.nightwaveSeason.id}>
                <h2>NightWave</h2>
                <Card>
                    <Card.Body>
                        <Card.Title>Dailies</Card.Title>
                        <Row>{this.getChallenges(dailies)}</Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Challenges</Card.Title>
                        <Row>{this.getChallenges(challenges)}</Row>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}