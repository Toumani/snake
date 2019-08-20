import Box from './Box';

class Griddle extends React.Component {
	render() {
		let boxesJSX = [];
		let present = false;
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				this.props.presence.forEach(box => {
					if (box.x === j && box.y === i) {
						present = true;
						return;
					}
				});
				boxesJSX.push(
					<Box x={j} y={i} filled={present} />
				);
				present = false;
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