const schema = require('./schema.js');
module.exports = function format(content) {
	console.log('loader start');

	// 获取webpack中options的配置
	const options = this.getOptions(schema);

	const { author } = options;
	const prefix = `/* author: ${author} */`;
	return prefix + content;
};
