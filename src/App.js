import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Cycles, Fissures, News, Nightwave } from './components';
import { SyndicateMissions } from './syndicate-missions/SyndicateMissions'
import axios from 'axios'
import { Row } from 'react-bootstrap';

export class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			alerts: [],
			cetusCycle: {},
			earthCycle: {},
			events: [],
			fissures: [],
			missions: [],
			news: [],
			nightwave: {},
			invasions: [],
			syndicateMissions: [],
			vallisCycle: {}
		}
		this.getData();
	}

	getData() {
		axios.get('https://api.warframestat.us/pc').then(response => {
			console.log('response', response.data);
			this.setState({
				alerts: response.data.alerts,
				cetusCycle: response.data.cetusCycle,
				earthCycle: response.data.earthCycle,
				events: response.data.events,
				fissures: response.data.fissures,
				invasions: response.data.invasions,
				missions: response.data.missions,
				news: response.data.news.reverse(),
				nightwave: response.data.nightwave,
				syndicateMissions: response.data.syndicateMissions,
				vallisCycle: response.data.vallisCycle
			});
		}, error => {
			console.log('error', error);
		});
	}


	render() {
		return (
			<div className="App">
				{/* <header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
						<p>Edit <code>src/App.js</code> and save to reload.</p>
					<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header> */}
				<Row>
					<News newsArray={this.state.news} />
					<Fissures fissuresArray={this.state.fissures} />
					<Cycles cetusCycle={this.state.cetusCycle} earthCycle={this.state.earthCycle} vallisCycle={this.state.vallisCycle} />
					{/* <SyndicateMissions syndicateMissions={this.state.syndicateMissions}/> */}
				</Row>
				<Nightwave nightwaveSeason={this.state.nightwave} />
			</div>

		);
	}
}