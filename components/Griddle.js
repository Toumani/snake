import Box from './Box';

import { SNAKE_BODY, FOOD, NONE } from './Box';

class Griddle extends React.Component {
	render() {
		let boxesJSX = [];

		// Displaying snake
		let type = NONE;
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				this.props.presence.forEach(box => {
					if (box.x === j && box.y === i) {
						type = SNAKE_BODY;
						return;
					}
				});
				if (this.props.food.x === j && this.props.food.y === i) {
					console.log('food in Griddle: ', this.props.food);
					console.log('i: ', i);
					console.log('j: ', j);
					type = FOOD;
				}
				boxesJSX.push(
					<Box x={j} y={i} type={type}>
						{i} {j}
					</Box>
				);
				type = NONE;
			}
		}

		return (
			<div style={{width: "105px", height: "105px", border: "1px solid #000", display: "block", lineHeight: 0, boxSizing: "border-box", padding: "1px"}}>
				{ boxesJSX }
			</div>
		)
	}
}

export default Griddle;
