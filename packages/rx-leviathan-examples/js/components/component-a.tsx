import RxLeviathan, { Maybe, PartialPick, Subscribes, View } from '@nahuelio/rx-leviathan';
import { CounterStore, CounterStoreProps } from '../store/counter';
import { GreetingStore, GreetingStoreProps } from '../store/greeting';

type ComponentAProps = PartialPick<HTMLElement, 'className' | 'onclick'> & CounterStoreProps & GreetingStoreProps;

@Subscribes(CounterStore, GreetingStore)
export class ComponentA extends View<ComponentAProps, CounterStore & GreetingStore> {
	readonly subscriptions = {
		greeting: null,
		counter: this.onCounterChange
	};

	onCounterChange(subscriber: View<ComponentAProps>) {
		console.log(subscriber);
	}

	render(): Maybe<JSX.RxLeviathanElement> {
		return (
			<div className={`flex flex-column pa3 ba ${this.props.className}`}>
				<h2 className={`ma0`}>Component A</h2>
				<p>Description</p>
			</div>
		);
	}
}
