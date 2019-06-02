import { h, Component } from 'preact';
import { Router } from 'preact-router';

import store from '../stores/MyStore';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
import NotFound from '../routes/404';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		setTimeout(() => {
			this.setState({
				currentUrl: e.url
			});
		}, 0);
	};

	render() {
		return (
			<div id="app">
				<Header selectedRoute={this.state.currentUrl} />
				<Router onChange={this.handleRoute}>
					<Home path="/" store={store} />
					<Profile path="/profile/" user="me" store={store} />
					<Profile path="/profile/:user" store={store} />
					<NotFound default store={store} />
				</Router>
			</div>
		);
	}
}
