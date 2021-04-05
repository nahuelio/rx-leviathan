import { Maybe, Observable, Store } from '@nahuelio/rx-leviathan';

type ViewProps = {
	className: Maybe<string>;
};

/**
 * View Store
 * @class {ViewStore}
 */
@Observable
export class ViewStore extends Store<ViewProps> {
	protected state: ViewProps = { className: 'default' };

	get className(): Maybe<string> {
		return this.state.className;
	}
}
