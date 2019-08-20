import Griddle from '../components/Griddle';

class Index extends React.Component {
	render() {
		const presence = [
			{x: 0, y: 0},
			{x: 2, y: 0},
			{x: 9, y: 0},
			{x: 8, y: 7},
			{x: 0, y: 1}
		];
		return (
			<div>
				<h1>Hello next!</h1>
				<Griddle presence={presence} />
			</div>
		)
	}
}

export default Index;