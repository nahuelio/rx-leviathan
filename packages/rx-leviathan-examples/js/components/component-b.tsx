import RxLeviathan, { Maybe, PartialPick, Subscribes, Component } from '@nahuelio/rx-leviathan';
import { CounterStore, CounterStoreProps } from '../store/counter';

type ComponentBProps = PartialPick<HTMLElement, 'className'> & CounterStoreProps;

@Subscribes(CounterStore)
export class ComponentB extends Component<ComponentBProps, CounterStore> {
	increase() {
		this.dispatch('increase');
	}

	decrease() {
		this.dispatch('decrease');
	}

	render(): Maybe<JSX.RxLeviathanElement> {
		const { className, counter } = this.props;
		return <div className={`${className}`}>
			<h4>Component B</h4>
			<span>Counter {counter ? 'counter exists' : 'counter does not exists'}</span>
			<button onclick={this.increase}>+</button>
			<button onclick={this.decrease}>-</button>
		</div>;
	}
}
