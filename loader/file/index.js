const loaderUtils = require('loader-utils');
module.exports = function (content) {
	// 1.根据文件内容生成带hash的文件名
	const name = loaderUtils.interpolateName(this, '[hash].[ext][query]', {
		content
	});
	this.emitFile(name, content);
	// 2.将文件输出出去
	// 3.返回 module.exports = 文件路径
	return `module.exports = "${name}"`;
};

module.exports.raw = true;
