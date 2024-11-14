class Clean {
	apply(compiler) {
		// 获取打包之后的目录
		const outputPath = compiler.options.output.path;
		const fs = compiler.outputFileSystem;

		compiler.hooks.emit.tap('Clean', () => {
			// 删除打包后目录下的所有文件
			this.removeFiles(fs, outputPath);
		});
	}

	removeFiles(fs, filepath) {
		// 拿到所有文件，这里可能会拿到文件夹
		const files = fs.readdirSync(filepath);
		files.forEach((file) => {
			// 判断是不是文件夹
			const path = `${filepath}/${file}`;
			const fileStat = fs.statSync(path);
			if (fileStat.isDirectory()) {
				// 如果是文件夹，递归删除文件
				this.removeFiles(fs, path);
			} else {
				// 如果是文件，直接删除
				fs.unlinkSync(path);
			}
		});
	}
}
module.exports = Clean;
