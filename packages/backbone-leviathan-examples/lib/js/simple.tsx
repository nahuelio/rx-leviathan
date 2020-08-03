/**
 * Simple View
 */
import Leviathan, { Core, View, Maybe } from '@nahuelio/backbone-leviathan';
import { ExampleStore } from './example';

export type BaseProps = {
	className?: string;
}

export type ComponentAProps = {} & BaseProps;
export type ComponentBProps = {} & BaseProps;
export type SimpleProps = {} & BaseProps;

@Core.register({ store: ExampleStore })
class ComponentA extends View<ComponentAProps> {
	render(): Maybe<JSX.LeviathanElement> {
		return null;
	}
}

@Core.register({ store: ExampleStore })
export class SimpleView extends View<SimpleProps> {
	render() {
		return (
			<div className={this.props.className}>
				<ComponentA />
			</div>
		);
	}
}
