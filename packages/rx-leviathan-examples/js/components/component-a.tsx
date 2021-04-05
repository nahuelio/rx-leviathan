import RxLeviathan, { Maybe, PartialPick, Subscribes, Component } from '@nahuelio/rx-leviathan';
import { ViewStore } from '../store/view';
import { CounterStore } from '../store/counter';

export type ComponentAProps = PartialPick<ViewStore & CounterStore, 'className' | 'counter'>;

@Subscribes(ViewStore, CounterStore)
export class ComponentA extends Component<ComponentAProps> {
	render(): Maybe<JSX.RxLeviathanElement> {
		return (
			<div className={`flex flex-column pa3 ba ${this.props.className}`}>
				<h2 className={`ma0`}>Component A</h2>
				<p>Count: {this.props.counter}</p>
			</div>
		);
	}
}
