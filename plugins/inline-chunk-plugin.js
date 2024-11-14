const HtmlWebpackPlugin = require('safe-require')('html-webpack-plugin');
class InlinePlugin {
	apply(compiler) {
		compiler.hooks.compilation.tap('InlinePlugin', (compilation) => {
			const hooks = HtmlWebpackPlugin.getHooks(compilation);
			// Static Plugin interface compilation HOOK NAME | register listener
			hooks.alterAssetTagGroups.tap(
				'InlinePlugin', // <-- Set a meaningful name here for stacktraces
				({ headTags, bodyTags }) => {
					headTags = this.getInlineChunk(headTags, compilation.assets);
					bodyTags = this.getInlineChunk(bodyTags, compilation.assets);
				}
			);
			// 删除runtime文件
			hooks.afterEmit.tap('InlinePlugin', () => {
				Object.keys(compilation.assets).forEach((key) => {
					if (/^runtime.*/g.test(key)) {
						// 删除runtime文件
						delete compilation.assets[key];
					}
				});
			});
		});
	}

	getInlineChunk(tags, assets) {
		return tags.map((tag) => {
			if ((tag.tagName = 'script')) {
				return tag;
			}
			const filePath = tag.attribute.src;
			if (!filePath) {
				return tag;
			}
			if (/runtime.*\.js$/g.test(filePath)) {
				return tag;
			}
			return {
				tagName: 'script',
				innerHTML: assets[filePath].source(),
				closeTag: true
			};
		});
	}
}
module.exports = InlinePlugin;
