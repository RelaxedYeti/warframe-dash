import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Countdown from 'react-countdown';
import { Cycle } from './Cycle';

export class Cycles extends React.Component {

    cetusStartDate;
    earthStartDate;
    vallisStartDate;

    cetusKey;
    earthKey;
    vallisKey;

    hourTime = 60 * (100 * 1000);

    render() {
        return(
            <Col xs="4">
                <h2>Cycles</h2>
                <Cycle cycleKey={"cetusCycle"} expiry={this.props.cetusCycle.expiry} id={this.props.cetusCycle.id} intervalTime={2 * this.hourTime} isPrimary={this.props.cetusCycle.isDay} cycleText={"ends in: "} primaryText={"Day"} secondaryText={"Night"} />
                <Cycle cycleKey={"earthCycle"} expiry={this.props.earthCycle.expiry} id={this.props.earthCycle.id} intervalTime={2 * this.hourTime} isPrimary={this.props.earthCycle.isDay} cycleText={"ends in: "} primaryText={"Day"} secondaryText={"Night"} />
                <Cycle cycleKey={"vallisCycle"} expiry={this.props.vallisCycle.expiry} id={this.props.vallisCycle.id} intervalTime={4 * this.hourTime} isPrimary={this.props.vallisCycle.isWarm} cycleText={"weather ends in: "} primaryText={"Warm"} secondaryText={"Cold"} />
            </Col>
        );
    }
}