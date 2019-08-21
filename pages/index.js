import _ from 'lodash';

import Griddle from '../components/Griddle';

import keyCodes from '../constants/keyCodes';

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
		const food = {x: parseInt(Math.random()*DIMENTION), y: parseInt(Math.random()*DIMENTION)};

		this.state = {
			presence: [
				head,
				neck,
				body,
				tail
			],
			head: head,
			tail: tail,
			direction: RIGHT,
			food: {x: 2, y: 7}
		};
	}

	componentDidMount() {
		let interval = setInterval(this.moveSnake, 500);
		this.setState({interval});
	}

	moveSnake = () => {
		const { head, tail, presence, direction, food } = this.state;

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

		let newTail;

		newPresence.push(newHead);
		_.forEach(newPresence, function(box) {
			if (box.x === head.x && box.y === head.y) {
				box.lead = newHead;
			}
		});

		let newFood = food;
		// If the snake eats the food
		console.log('newHead: ', newHead);
		console.log('food:', food);
		if (newHead.x === food.x && newHead.y === food.y) {
			console.log('Eating');
			newFood = {x: parseInt(Math.random()*DIMENTION), y: parseInt(Math.random()*DIMENTION)}
			newTail = tail;
		}
		else {
			console.log('Not eating');
			_.remove(newPresence, {x: tail.x, y: tail.y})
			newTail = tail.lead
		}

		this.setState({
			presence: newPresence,
			head: newHead,
			tail: newTail,
			food: newFood
		});
	}

	handleKeyPress = (keyEvent) => {
		console.log(keyEvent);
		console.log('charCode: ', keyEvent.charCode);
		console.log('key: ', keyEvent.key);
		console.log('keyCode: ', keyEvent.keyCode);

		switch (keyEvent.keyCode) {
			case keyCodes.ARROW_LEFT:
				this.moveLeft();
				break;
			case keyCodes.ARROW_UP:
				this.moveUp();
				break;
			case keyCodes.ARROW_RIGHT:
				this.moveRight();
				break;
			case keyCodes.ARROW_DOWN:
				this.moveDown();
				break;
			default:
				break;
		}
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
	stop = () => {
		clearInterval(this.state.interval);
	}
	play = () => {
		let interval = setInterval(this.moveSnake, 500);
		this.setState({interval});
	}

	render() {
		return (
			<div>
				<h1>Hello next!</h1>
				<Griddle presence={this.state.presence} food={this.state.food} handleKeyPress={(keyEvent) => this.handleKeyPress(keyEvent)} />
				<button onClick={this.moveLeft}>Left</button>
				<button onClick={this.moveDown}>Down</button>
				<button onClick={this.moveUp}>Up</button>
				<button onClick={this.moveRight}>Right</button>
				<button onClick={this.stop}>Stop</button>
				<button onClick={this.play}>Play</button>
			</div>
		)
	}
}

export default Index;
