import { h, Component } from 'preact';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';
import style from './style';

export default class Profile extends Component {
	constructor(props, context) {
		super(props, context);
		this.props = props;
		this.state = props.store.state;
		this.state.time = Date.now();
	}

	componentWillMount() {
		// start with store's initial state
		this.setState(this.props.store.state);
		// subscribe to state changes
		this.props.store.onChange(state => {
			this.setState(state, () => {});
		});
	}

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	increment = () => {
		// this.setState({ count: this.state.count + 1 });
		this.props.store.command('increment');
	};

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count }) {
		return (
			<div class={`${style.profile} page`}>
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named {user}.</p>

				<div>Current time: {new Date(time).toLocaleString()}</div>

				<p>
					<Button raised ripple onClick={this.increment}>
						Click Me
					</Button>{' '}
					Clicked {count} times.
				</p>
			</div>
		);
	}
}
