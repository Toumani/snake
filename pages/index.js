import _ from 'lodash';

import Griddle from '../components/Griddle';

const DIMENTION = 10;
const RIGHT = 'RIGHT';
const LEFT = 'LEFT';
const UP = 'UP';
const DOWN = 'DOWN';

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
			tail: tail,
			direction: RIGHT
		};
	}

	componentDidMount() {
		setInterval(this.moveSnake, 3000);
	}

	moveSnake = () => {
		const { head, tail, presence, direction } = this.state;

		let newPresence = presence;

		/* Repositionning new head an tail */
		let newHead;
		switch (direction) {
			case RIGHT:
				newHead = {x: head.x + 1, y: head.y, lead: null};
				break;
			case LEFT:
				newHead = {x: head.x - 1, y: head.y, lead: null};
				break;
			case UP:
				newHead = {x: head.x, y: head.y - 1, lead: null};
				break;
			case DOWN:
				newHead = {x: head.x, y: head.y + 1, lead: null};
				break;
		}
		
		let newTail = tail.lead

		newPresence.push(newHead);
		_.forEach(newPresence, function(box) {
			if (box.x === head.x && box.y === head.y) {
				box.lead = newHead;
			}
		});
		_.remove(newPresence, {x: tail.x, y: tail.y})
		
		this.setState({
			presence: newPresence,
			head: newHead,
			tail: newTail
		});
	}

	moveRight = () => {
		this.setState({ direction: RIGHT });
	}
	moveLeft = () => {
		this.setState({ direction: LEFT });
	}
	moveUp = () => {
		this.setState({ direction: UP });
	}
	moveDown = () => {
		this.setState({ direction: DOWN });
	}

	render() {
		return (
			<div>
				<h1>Hello next!</h1>
				<Griddle presence={this.state.presence} />
				<button onClick={this.moveRight}>Right</button>
				<button onClick={this.moveLeft}>Left</button>
				<button onClick={this.moveUp}>Up</button>
				<button onClick={this.moveDown}>Down</button>
			</div>
		)
	}
}

export default Index;