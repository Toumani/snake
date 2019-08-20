import _ from 'lodash';

import Griddle from '../components/Griddle';

const DIMENTION = 10;

class Index extends React.Component {
	constructor(props) {
		super(props);

		const head = {x: 6, y: 5, lead: null};
		const neck = {x: 5, y: 5, lead: head};
		const body = {x: 4, y: 5, lead: neck};
		const tail = {x: 3, y: 5, lead: body};

		this.state = {
			presence: [
				head,
				neck,
				body,
				tail
			],
			head: head,
			tail: tail
		};
	}

	componentDidMount() {
		setInterval(this.moveSnake, 3000);
	}

	moveSnake = () => {
		const { head, tail, presence } = this.state;

		let newPresence = presence;

		/* Repositionning new head an tail */
		let newHead = {x: head.x + 1, y: head.y, lead: null};
		let newTail = tail.lead

		newPresence.push(newHead);
		_.remove(newPresence, {x: tail.x, y: tail.y})
		
		this.setState({
			presence: newPresence,
			head: newHead,
			tail: newTail
		});
	}

	render() {
		return (
			<div>
				<h1>Hello next!</h1>
				<Griddle presence={this.state.presence} />
			</div>
		)
	}
}

export default Index;