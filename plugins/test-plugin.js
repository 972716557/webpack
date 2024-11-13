class TestPlugin {
	constructor() {
		console.log(11);
	}

	apply(compiler) {
		compiler.hooks.make.tapAsync('TestPlugin', (compilation, callback) => {
			setTimeout(() => {
				console.log('1000ms');
				callback();
				compilation.hooks.seal.tap('TestPlugin', () => {
					console.log('compilation seal');
				});
			}, 1000);
		});
	}
}
module.exports = TestPlugin;
