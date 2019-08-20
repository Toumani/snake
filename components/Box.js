class Box extends React.Component {
	render() {
		let color = this.props.filled ? '#000' : '#fff';
		return (
			<div style={{width: "10px", height: "10px"/* , border: "1px solid #000" */, display: "inline-block", boxSizing: "border-box", backgroundColor: color}}></div>
		)
	}
}

export default Box;