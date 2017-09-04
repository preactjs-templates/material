import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import Toolbar from 'preact-material-components/Toolbar';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/Toolbar/style.css';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<div>
				<Toolbar className="toolbar">
					<Toolbar.Row>
						<Toolbar.Section align-start={true}>
							<Toolbar.Icon menu={true} onClick={() => {
								this.drawer.MDComponent.open = true;
							}}>menu</Toolbar.Icon>
							<Toolbar.Title>
								Preact app
							</Toolbar.Title>
						</Toolbar.Section>
						<Toolbar.Section align-end={true}>
							<Toolbar.Icon>settings</Toolbar.Icon>
						</Toolbar.Section>
					</Toolbar.Row>
				</Toolbar>
				<Drawer.TemporaryDrawer ref={drawer=>{this.drawer = drawer;}} >
					<Drawer.TemporaryDrawerContent>
						<List>
							<List.LinkItem>
								<List.ItemIcon>home</List.ItemIcon>
									Home
							</List.LinkItem>
						</List>
					</Drawer.TemporaryDrawerContent>
				</Drawer.TemporaryDrawer>
			</div>
		);
	}
}
