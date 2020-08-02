'use strict';

System.register(['underscore'], (_export, _context) => {
	return {
		execute: () => {
			_context.import('backbone').then(() => {
				_context.import('@nahuelio/backbone-leviathan').then((Leviathan) => {
					class Simple extends Backbone.Leviathan.Store {
						increase() {
							this.state.counter++;
						}

						decrease() {
							this.state.counter--;
						}
					}

					const simple = new Simple({ counter: 1 });
					simple.dispatch('increase');
					console.log(simple.state.counter);

				});
			});
		}
	}
});
