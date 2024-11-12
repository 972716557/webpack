module.exports = function format(content) {
	const formatData = content.replace(/console\.log\(.+\);?/g, '');
	return formatData;
};
