import { WiredButton } from 'react-wired';

const containerStyle = {
	display: 'flex',
	height: '100vh',
	flexDirection: 'column',
	justifyContent: 'space-around',
	alignContent: 'center',
}

const buttonStyle = {
	display: 'inline-flex',
	margin: '0 auto',
}

class Index extends React.Component {
	render() {
		return (
			<div style={containerStyle}>
				<div className="menuItemContainer">
					<WiredButton elevation={5} text="Play"></WiredButton>
				</div>
				<div className="menuItemContainer">
					<WiredButton text="High scores"></WiredButton>
				</div>
				<div className="menuItemContainer">
					<WiredButton text="Settings"></WiredButton>
				</div>
				<div className="menuItemContainer">
					<WiredButton text="About"></WiredButton>
				</div>
				<style jsx>{`
					.menuItemContainer {
						display: inline-flex;
						margin: 0 auto;
					}
				`}</style>
			</div>
		)
	}
}

export default Index;