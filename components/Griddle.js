import Box from './Box';

import config from '../constants/config';

import { SNAKE_BODY, SNAKE_HEAD, FOOD, NONE } from './Box';

class Griddle extends React.Component {
	handleKeyPress = (keyEvent) => {
		this.props.handleKeyPress(keyEvent);
	}

	render() {
		let boxesJSX = [];

		// Displaying snake
		let type = NONE;
		for (let i = 0; i < config.DIMENSION; i++) {
			for (let j = 0; j < config.DIMENSION; j++) {
				if (j === this.props.head.x && i === this.props.head.y) {
					type = SNAKE_HEAD;
				}
				else {
					this.props.presence.forEach(box => {
						if (box.x === j && box.y === i) {
							type = SNAKE_BODY;
							return;
						}
					});
				}
				if (this.props.food.x === j && this.props.food.y === i) {
					type = FOOD;
				}
				boxesJSX.push(
					<Box x={j} y={i} type={type} key={j*config.DIMENSION + i}>
						{i} {j}
					</Box>
				);
				type = NONE;
			}
		}

		return (
			<div
				id={'game-griddle'}
				style={{width: "105px", height: "105px", border: "1px solid #000", display: "block", lineHeight: 0, boxSizing: "border-box", padding: "1px"}}
				onKeyDown={keyEvent => this.handleKeyPress(keyEvent)}
				tabIndex="0"
			>
				{ boxesJSX }
			</div>
		)
	}
}

export default Griddle;
