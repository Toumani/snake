import config from '../constants/config';

const PIXEL_SIZE = 10;

class CanvasGriddle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			canvas: null,
		}
	}

	componentDidMount() {
		const canvas = this.refs.canvas
		this.setState({canvas});
	}

	handleKeyPress = (keyEvent) => {
		this.props.handleKeyPress(keyEvent);
	}
	
	render() {
		const { canvas } = this.state;
		const { presence, head, food } = this.props;

		if (canvas !== null && typeof canvas !== 'undefined') {
			// Clearing old presence
			const context = canvas.getContext("2d")
			context.clearRect(0, 0, canvas.width, canvas.height);

			// Rendering snake's presence
			context.fillStyle = "#000000";
			this.props.presence.forEach((box) => {
				context.fillRect(box.x*PIXEL_SIZE, box.y*PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
			});

			// Rendering snake's head
			context.fillStyle = '#a00000';
			context.fillRect(head.x*PIXEL_SIZE, head.y*PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);

			// Rendering food
			context.fillStyle = '#ffca28';
			context.fillRect(food.x*PIXEL_SIZE, food.y*PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
		}

		return (
			<canvas
				height={PIXEL_SIZE*config.DIMENSION}
				id="game-griddle"
				onKeyDown={keyEvent => this.handleKeyPress(keyEvent)}
				ref="canvas"
				style={{ border: '1px solid #000000' }}
				tabIndex="0"
				width={PIXEL_SIZE*config.DIMENSION}
			/>
		);
	}
}

export default CanvasGriddle;