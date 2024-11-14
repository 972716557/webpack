// 首先是基础配置
const path = require('path');
// 根据相对路径获取绝对路径
const resolvePath = (relativePath) => path.resolve(__dirname, relativePath);
const glob = require('glob'); // 文件匹配模式
// HTML模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
// css 代码打包分离
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 会单独提取 CSS 并清除用不到的 CSS
const PurgecssWebpackPlugin = require('purgecss-webpack-plugin');

const TestPlugin = require('../plugins/test-plugin');

const Banner = require('../plugins/banner-plugin');

const Clean = require('../plugins/clean-plugin');

const Analyze = require('../plugins/analyze-plugin');

// 基础配置
const baseConfig = {
	// 入口文件
	entry: resolvePath('../src/main.js'),
	// 出口文件
	output: {
		path: resolvePath('../dist'),
		filename: '[name].bundle.js'
		// clean: true
	},
	resolve: {
		// 在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在。  resolve.extensions用于配置在尝试过程中用到的后缀列表，默认是：js 和 json
		extensions: ['.js', '.ts', '.tsx'],
		// 配置项通过别名来把原导入路径映射成一个新的导入路径
		alias: {
			'~': resolvePath('../src'),
			'@': resolvePath('../src'),
			components: resolvePath('../src/components')
		}
	},
	// 所有loader的配置都在 module.rules 中
	module: {
		rules: [
			// 对css文件的处理
			// use里的loader如果有多个的情况下，切记执行顺序是：从下到上（或者从右到左）
			// MiniCssExtractPlugin插件和style-loader冲突，所以这里用MiniCssExtractPlugin插件替换了style-loader
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
			},
			// 对less文件的处理
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'less-loader'
				]
			},
			// 对ts|tsx文件的处理
			{
				test: /\.(ts|tsx)$/,
				use: 'babel-loader'
			},
			// 对图片的处理
			{
				test: /\.(svg|png|jpg|gif)$/,
				// loader: './loader/file/index.js',
				// // 配置了这个就表示不会使用webpack默认的打包工具，而是使用我们自定义的打包loader，不然webpack会默认对非.js等文件进行默认编译
				// type: 'javascript/auto'
				type: 'asset/resource'
			},
			// 自定义loader
			{
				test: /format\.js$/,
				loader: './loader/index.js'
			},
			// 移除console.log loader
			{
				test: /format\.js$/,
				loader: './loader/remove-console.js'
			},
			// 可追加属性的loader
			{
				test: /format\.js$/,
				loader: './loader/prefix/index.js',
				options: {
					author: 'yuchen'
				}
			},
			{
				test: /format\.js$/,
				loader: './loader/babel/index.js',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		]
	},
	// 插件的处理
	plugins: [
		new HtmlWebpackPlugin({
			// title 配置
			title: 'Webpack V5 + React',
			// 模板导入
			template: resolvePath('../public/index.html'),
			// 名称为
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin({
			filename: `[name].[hash:8].css`
		}),
		new TestPlugin(),
		new Clean(),
		new Analyze(),
		new Banner()
		// new PurgecssWebpackPlugin({
		// 	paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
		// })
	]
};
module.exports = {
	baseConfig
};
