import React from 'react';
import { SyndicateMission } from './SyndicateMission';

export class SyndicateMissions extends React.Component {


    render() {
        return (
            <div className="row">
                {
                    this.props.syndicateMissions.map((value, index) => {
                        return <SyndicateMission syndicateMission={value} key={value.id} />
                    })
                }
            </div>
        );
    }

}