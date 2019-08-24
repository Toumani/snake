import _ from 'lodash';

import Griddle from '../components/Griddle';

import keyCodes from '../constants/keyCodes';

export const DIMENTION = 10;
const RIGHT = 'RIGHT';
const LEFT = 'LEFT';
const UP = 'UP';
const DOWN = 'DOWN';

const head = {x: 6, y: 5, lead: null};
const neck = {x: 5, y: 5, lead: head};
const body = {x: 4, y: 5, lead: neck};
const tail = {x: 3, y: 5, lead: body};
const food = {x: parseInt(Math.random()*DIMENTION), y: parseInt(Math.random()*DIMENTION)};

const initialState = {
	presence: [
		head,
		neck,
		body,
		tail
	],
	head: head,
	tail: tail,
	direction: RIGHT,
	nextMoveDirection: RIGHT,
	food: {x: 2, y: 7},
	gameOver: false
};

class Play extends React.Component {
	constructor(props) {
		super(props);

		this.state = initialState;
	}

	moveSnake = () => {
		const { head, tail, presence, nextMoveDirection, food } = this.state;

		let newPresence = presence;

		// Repositionning new head
		let newHead;
		switch (nextMoveDirection) {
			case RIGHT:
				newHead = {x: (head.x + 1)%DIMENTION, y: head.y, lead: null};
				break;
			case LEFT:
				newHead = {x: (head.x + 9)%DIMENTION, y: head.y, lead: null};
				break;
			case UP:
				newHead = {x: head.x, y: (head.y + 9)%DIMENTION, lead: null};
				break;
			case DOWN:
				newHead = {x: head.x, y: (head.y + 1)%DIMENTION, lead: null};
				break;
		}

		// Repositionning new tail
		// Tail remains at the same position if the snakes eats. Otherwise it moves to it's lead
		let newTail;
		let removeTail = false;

		// By default food does not move
		let newFood = food;

		newPresence.push(newHead);

		// If the snake eats the food
		if (newHead.x === food.x && newHead.y === food.y) {
			// New random position for food
			// nonPresence is all the boxes where the snake is not present
			let nonPresence = [];
			for (let i = 0; i < DIMENTION; i++) {
				for (let j = 0; j < DIMENTION; j++) {
					if (typeof _.find(newPresence, {x: j, y: i}) === 'undefined') {
						nonPresence.push({x: j, y: i})
					}
				}
			}
			let newFoodIndex = parseInt(Math.random()*nonPresence.length);
			
			newFood = nonPresence[newFoodIndex];
			newTail = tail;
		}
		else {
			removeTail = true;
		}

		// Setting old head's lead to newHead
		_.forEach(newPresence, function(box) {
			if (box.x === head.x && box.y === head.y) {
				box.lead = newHead;
			}
		});

		// Checking if new head is on snakes body.
		// We are checking on old presence since new head belongs to new presence
		let body = tail.lead;
		while (body !== head) {
			if (body.x === newHead.x && body.y === newHead.y) {
				// Game over
				console.log('game over');
				this.stop();
				this.setState({gameOver: true})
				return;
			}
			// Check for next node
			body = body.lead;
		}

		if (removeTail) {
			_.remove(newPresence, {x: tail.x, y: tail.y})
			newTail = tail.lead
		}

		this.setState({
			presence: newPresence,
			head: newHead,
			tail: newTail,
			food: newFood,
			direction: nextMoveDirection
		});
	}

	handleKeyPress = (keyEvent) => {
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
		if (this.state.direction === LEFT)
			return;
		this.setState({ nextMoveDirection: RIGHT });
	}
	moveLeft = () => {
		if (this.state.direction === RIGHT)
			return;
		this.setState({ nextMoveDirection: LEFT });
	}
	moveUp = () => {
		if (this.state.direction === DOWN)
			return;
		this.setState({ nextMoveDirection: UP });
	}
	moveDown = () => {
		if (this.state.direction === UP)
			return;
		this.setState({ nextMoveDirection: DOWN });
	}
	stop = () => {
		clearInterval(this.state.interval);
	}
	play = () => {
		document.getElementById('game-griddle').focus();
		let interval = setInterval(this.moveSnake, 100);
		this.setState({interval});
	}
	restart = () => {
		const head = {x: 6, y: 5, lead: null};
		const neck = {x: 5, y: 5, lead: head};
		const body = {x: 4, y: 5, lead: neck};
		const tail = {x: 3, y: 5, lead: body};

		const initialState = {
			presence: [
				head,
				neck,
				body,
				tail
			],
			head: head,
			tail: tail,
			direction: RIGHT,
			nextMoveDirection: RIGHT,
			food: {x: 2, y: 7},
			gameOver: false
		};

		this.setState(initialState);
	}

	render() {
		return (
			<div>
				<h1>Hello next!</h1>
				<Griddle
					presence={this.state.presence}
					head={this.state.head}
					food={this.state.food}
					handleKeyPress={(keyEvent) => this.handleKeyPress(keyEvent)}
				/>
				<button onClick={this.moveLeft}>Left</button>
				<button onClick={this.moveDown}>Down</button>
				<button onClick={this.moveUp}>Up</button>
				<button onClick={this.moveRight}>Right</button>
				{ this.state.gameOver ?
				(
				<button
					onClick={() => {
						this.restart();
				}}>
					Restart
				</button>
				)
				:
				(
				<button onClick={this.stop}>
					Stop
				</button>
				)
				}
				<button onClick={this.play}>
					Play
				</button>
			</div>
		)
	}
}

export default Play;
