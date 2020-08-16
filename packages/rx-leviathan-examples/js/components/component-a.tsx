import RxLeviathan, { Maybe, PartialPick, Subscribes, View } from '@nahuelio/rx-leviathan';
import { ExampleStore, ExampleStoreProps } from '../store/example';

type ComponentAProps = PartialPick<HTMLElement, 'className' | 'onclick'> & ExampleStoreProps;

@Subscribes(ExampleStore)
export class ComponentA extends View<ComponentAProps, ExampleStore> {
	subscriptions = {
		counter: this.onCounterChange
	}

	onCounterChange(subscriber) {
		console.log(subscriber);
	}

	render(): Maybe<JSX.RxLeviathanElement> {
		return <p className={`${this.props.className}`}>
			Component A
		</p>;
	}
}
