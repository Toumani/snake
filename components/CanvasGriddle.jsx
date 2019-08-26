const PIXEL_SIZE = 10;
const DIMENSION = 10;



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
			<canvas  ref="canvas" width={PIXEL_SIZE*DIMENSION} height={PIXEL_SIZE*DIMENSION} style={{border: '1px solid #000000'}} />
		);
	}
}

export default CanvasGriddle;