import RxLeviathan, { Maybe, PartialPick, Subscribes, View } from '@nahuelio/rx-leviathan';
import { ExampleStore, ExampleStoreProps } from '../store/example';

type ComponentBProps = PartialPick<HTMLElement, 'className'> & ExampleStoreProps;

@Subscribes(ExampleStore)
export class ComponentB extends View<ComponentBProps, ExampleStore> {
	increase() {
		this.store.dispatch('increase');
	}

	decrease() {
		this.store.dispatch('decrease');
	}

	render(): Maybe<JSX.RxLeviathanElement> {
		const { className, counter } = this.props;
		return <div className={`${className}`}>
			<h4>Component B</h4>
			<span>Counter {counter}</span>
			<button onclick={this.increase}>+</button>
			<button onclick={this.decrease}>-</button>
		</div>;
	}
}
