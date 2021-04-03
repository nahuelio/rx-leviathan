declare global {
	namespace NodeJS {
		interface Global {
			mockPath: string;
			assert: Chai.AssertStatic;
		}
	}
	export const mockPath: string;
	export const assert: Chai.AssertStatic;
}

export = global;
