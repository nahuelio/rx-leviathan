/**
 * Page Simple
 */
import RxLeviathan, { Maybe, Component } from '@nahuelio/rx-leviathan';
import { configureRoute } from '../utils/configure';
import { ComponentA } from '../components/component-a';
import { ComponentB } from '../components/component-b';

export class SimplePage extends Component {
	render(): Maybe<JSX.RxLeviathanElement> {
		return (
			<div className={`flex flex-column pa3 w-100 simple-view`}>
				<ComponentA className="hello" />
				{/* FIX Props from Store being required (state, increase, decrease) */}
				<ComponentB className="component-b" />
			</div>
		);
	}
}

export const route = configureRoute({ path: '/simple', pageName: 'Simple' }, SimplePage);
