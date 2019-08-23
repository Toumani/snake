export const SNAKE_BODY = 'SNAKE_BODY';
export const FOOD = 'FOOD';
export const NONE = 'NONE';
export const SNAKE_HEAD = 'SNAKE_HEAD';

class Box extends React.Component {
	getColor = (type) => {
		switch (type) {
			case SNAKE_BODY:
				return '#000';
			case SNAKE_HEAD:
				return '#a00000'
			case FOOD:
				return '#ffca28';
			case NONE:
			default:
				return '#fff';
		}
	}

	render() {
		let color = this.getColor(this.props.type);
		return (
			<div style={{width: "10px", height: "10px", display: "inline-block", boxSizing: "border-box", backgroundColor: color}}>
				{/* {this.props.children} */}
			</div>
		)
	}
}

export default Box;
