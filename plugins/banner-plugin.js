class Banner {
	apply(compiler) {
		compiler.hooks.emit.tapAsync('Banner', (compilation, callback) => {
			// 获取文件输出的资源 compilation.assets

			// 过滤js和css资源，compilation.assets是以{文件路径: 文件资源}为键值对的对象
			const res = [];
			Object.keys(compilation.assets).forEach((key) => {
				if (/.+\.(js|css)$/.test(key)) {
					res.push(key);
				}
			});
			res.forEach((key) => {
				const prefix = `/**
                         * @author yuchen
                         * @date ${new Date().toISOString()}
                         */\n`;
				const source = prefix + compilation.assets[key].source();
				compilation.assets[key] = {
					// source的返回值就是资源的具体内容
					source() {
						return source;
					},
					// size的返回值就是资源的大小
					size() {
						return source.length;
					}
				};
			});
			callback();
		});
	}
}
module.exports = Banner;
