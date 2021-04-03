/**
 * Page Simple
 */
import RxLeviathan, { Component } from '@nahuelio/rx-leviathan';
import { configureRoute } from '../utils/configure';
import { ComponentA } from '../components/component-a';
import { ComponentB } from '../components/component-b';

export class SimplePage extends Component {
	render() {
		return (
			<div className={`flex flex-column pa3 w-100 simple-view`}>
				<ComponentA className={`component-a`} counter={1} />
				<ComponentB className={`component-b`} />
			</div>
		);
	}
}

export const route = configureRoute({ path: '/simple', pageName: 'Simple' }, SimplePage);
