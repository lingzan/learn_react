var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var HtmlWebpackPlugin = require ('html-webpack-plugin');
var fs = require('fs');
var glob = require('glob');
var path = require('path');

module.exports = {
	entry:[
		/* entry file*/
		'webpack-hot-middleware/client',
		path.resolve(__dirname,'src/todo.js')
	],
	output:{
		/* output file */
		publicPath:"/",
		path:path.resolve(__dirname,'dist/'),
		filename:'[name].bundle.js'
	},
	resolve:{
		extensions:['','.js','.jsx']
	},
	module:{
		loaders:[
			{
				test:/\.jsx?$/,
				exclude:/node_modules/,
				loader:'babel',
				query:{
					presets:['es2015','react','stage-0']
				}
			}
		]
	},
	plugins : [
    new HtmlWebpackPlugin({
      template : path.resolve(__dirname, 'src/index.html'),
      hash     : '',
      filename : 'index.html',
      inject   : 'html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    //提取公共的代码
   commonsPlugin,
   //压缩代码
    // new webpack.optimize.UglifyJsPlugin({
    //   output: {
    //     comments: false,
    //   },
    //   compress: {
    //     warnings: false
    //   }
    // })
    // new ExtractTextPlugin("dist/bundle.css")
  ],
}

var entries = paths=>{
	var files = glob.sync(paths);
	var entries={},
		entry,
		dirname,
		basename;
	for (var i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);
        basename = path.basename(entry, '.js');
        entries[basename] = './' + entry;
    }
    return entries;
}