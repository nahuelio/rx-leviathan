import RxLeviathan, { Maybe, PartialPick, Subscribes, SubscriptionHash, Component } from '@nahuelio/rx-leviathan';
import { CounterStore } from '../store/counter';
import { GreetingStore } from '../store/greeting';

type ComponentAProps = PartialPick<HTMLElement, 'className' | 'onclick'>;

@Subscribes(CounterStore, GreetingStore)
export class ComponentA<P extends ComponentAProps> extends Component<CounterStore & GreetingStore> {
	readonly subscriptions: SubscriptionHash = {
		greeting: null,
		counter: this.onCounterChange
	};

	onCounterChange(subscriber: Component<ComponentAProps>) {
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
