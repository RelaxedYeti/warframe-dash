import React from 'react';
import { Card } from 'react-bootstrap';
import Countdown from 'react-countdown';


export class Deals extends React.Component {

    render() {
        return (
            this.props.deals.map((value, index) => {
                const startDate = new Date(value.expiry);
                return (
                    <Card>
                        <Card.Body>
                            <Countdown daysInHours={true} date={startDate} />
                        </Card.Body>
                    </Card>
                );
            })
        );
    }
}