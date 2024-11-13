class Banner {
	apply(compiler) {
		compiler.hooks.emit.tapAsync('BannerPlugin', (compilation) => {
			// 获取文件输出的资源 compilation.assets

			// 过滤js和css资源
			compilation.assets;
			// 添加注释
			compilation.assets['banner.js'] = {
				source() {
					return `/* banner */`;
				},
				size() {
					return 7;
				}
			};
		});
	}
}
module.exports = Banner;
