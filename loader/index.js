// 同步loader
module.exports = function loader(content) {
	return content;
};

// module.exports = function loader(content, map, meta) {
// 	/**
// 	 * callback的回调
// 	 * 第一个参数，err 代表是否有错误
// 	 * 第二个参数，content代表处理后的内容
// 	 * 第三个参数：source map传递的source map
// 	 * 第四个参数：meta给下一个loader传递参数
// 	 */
// 	this.callback(err, content, map, meta);
// };

// 如果有异步代码需要执行，就必须把callback放入async中
// module.exports = function loader(content, map, meta) {
// 	const callback = this.async();
// 	setTimeout(() => {
// 		console.log('test2');
// 		callback(null, content, map, meta);
// 	}, 1000);
// };

// // raw loader 处理图片，将其转化为二进制流
// module.exports.raw = function loader(content, map, meta) {
// 	return content;
// };

// // pitch loader 优先级比normal loader更高，可以提前return，终止其他loader的执行
// module.exports.pitch = function loader(content, map, meta) {
// 	return content;
// };
