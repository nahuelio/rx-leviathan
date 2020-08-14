/**
 * Page Simple
 */
import Leviathan, { Subscribes, View } from '@nahuelio/backbone-leviathan';
import { configureRoute } from '../utils/configure';
import { ExampleStore } from '../store/example';
import { ComponentA } from '../components/component-a';
import { ComponentB } from '../components/component-b';

@Subscribes(ExampleStore)
export class SimplePage extends View<unknown, ExampleStore> {
	render() {
		return (
			<div className={`simple-view`}>
				<ComponentA className={`component-a`} counter={1} />
				<ComponentB className={`component-b`} />
			</div>
		);
	}
}

export default configureRoute({ route: '/simple', pageName: 'simple' }, SimplePage);
