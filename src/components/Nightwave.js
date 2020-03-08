import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

export class Nightwave extends React.Component {


    getChallenges() {
        if(!this.props.nightwaveSeason.activeChallenges) return;
        return this.props.nightwaveSeason.activeChallenges.map((value, index) => {
            return;
        });
    }

    render() {

        const dailies = [];
        const challenges = [];

        for(let i = 0; i < this.props.nightwaveSeason.activeChallenges; i++) {
            if(this.props.nightwaveSeason.activeChallenges[i].isDaily) {
                this.dailies.push(this.props.nightwaveSeason.activeChallenges[i]);
            } else {
                this.challenges.push(this.props.nightwaveSeason.activeChallenges[i]);
            }
        }

        return(
            <Col size="12" key={this.props.nightwaveSeason.id}>
                <Card>
                    <Card.Body>
                        <Card.Title>Nightwave</Card.Title>
                        {this.getChallenges()}
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}