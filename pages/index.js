import Link from 'next/link';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const classes = {
	rootContainer: {
		width: '80%',
		height: '50vh',
		margin: '0 auto',
	},
	buttonContainer: {
		textAlign: 'center',
	},
	menuButton: {
		width: '80%',
	}
};

class MenuButton extends React.Component {
	render() {
		return (
			<Grid item style={classes.buttonContainer}>
				<Link href={this.props.path}>
					<Button variant="contained" size="large" color="primary" style={classes.menuButton}>
						{ this.props.text }
					</Button>
				</Link>
			</Grid>
		);
	}
}


class Index extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<Grid
				alignItems="stretch"
				style={classes.rootContainer}
				container
				direction="column"
				justify="space-around"
			>
				<MenuButton path="/Play" text="Play" />
				<MenuButton text="High_scores" />
				<MenuButton text="Settings" />
				<MenuButton text="About" />
			</Grid>
		)
	}
}

export default Index;