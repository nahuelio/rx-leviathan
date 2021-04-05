import RxLeviathan, { Maybe, PartialPick, Subscribes, Component } from '@nahuelio/rx-leviathan';
import { CounterStore } from '../store/counter';

export type ComponentBProps = { className?: string } & CounterStore;

@Subscribes(CounterStore)
export class ComponentB extends Component<ComponentBProps> {
	increase() {
		this.props.increase();
	}

	decrease() {
		this.props.decrease();
	}

	render(): Maybe<JSX.RxLeviathanElement> {
		const { className, counter } = this.props;
		return <div className={`${className}`}>
			<h4>Component B</h4>
			<span>Counter {counter ? 'counter exists' : 'counter does not exists'}</span>
			<button onclick={this.props.increase}>+</button>
			<button onclick={this.props.decrease}>-</button>
		</div>;
	}
}
