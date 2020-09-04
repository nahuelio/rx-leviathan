import RxLeviathan, { Maybe, PartialPick, Subscribes, View } from '@nahuelio/rx-leviathan';
import { ExampleStore, ExampleStoreProps } from '../store/example';

type ComponentAProps = PartialPick<HTMLElement, 'className' | 'onclick'> & ExampleStoreProps;

@Subscribes(ExampleStore)
export class ComponentA extends View<ComponentAProps, ExampleStore> {
	subscriptions = {
		counter: this.onCounterChange
	}

	onCounterChange(subscriber: View) {
		console.log(subscriber);
	}

	render(): Maybe<JSX.RxLeviathanElement> {
		return (
			<div className={`${this.props.className}`}>
				<span>Component A</span>
				<hr />
			</div>
		);
	}
}
