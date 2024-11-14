class Analyze {
	apply(compiler) {
		compiler.hooks.emit.tap('Analyze', (compilation) => {
			// 遍历所有即将输出的文件得到大小

			const assets = Object.entries(compilation.assets);
			let content = `| 资源名称 | 资源大小 |\n| --- | --- |`;
			assets.forEach(([filename, file]) => {
				content += `\n| ${filename} | ${(file.size() / 1024).toFixed(2)} KB |`;
			});

			// 生成 markdown 文件
			compilation.assets['analyze.md'] = {
				source() {
					return content;
				},
				size() {
					return content.length;
				}
			};
		});
	}
}
module.exports = Analyze;
