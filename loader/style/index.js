// 可以处理样式，但是不能处理图片路径问题
// module.exports = function (content) {
// 	const script = `
//     const el=document.createElement('style');
//     el.innerHTML=${JSON.stringify(content)};
//     document.head.appendChild(el);
//     `;

// 	return script;
// };
module.exports.pitch = function (request) {
	// 将绝对路径转为相对路径
	const relativePath = request
		.split('!')
		.map((absolutePath) => {
			return this.utils.contextify(this.context, absolutePath);
		})
		.join('!');

	const script = ` d
    import style from "!!${relativePath}";
    const el=document.createElement('style');
    el.innerHTML=style;
    document.head.appendChild(el);
    `;

	return script;
};
