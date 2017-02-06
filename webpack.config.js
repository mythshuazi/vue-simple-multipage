var path = require('path')
var webpack = require('webpack')
var glob = require('glob'); //添加 glob 插件 add by ls
var entries = getEntry('./src/module/**/*.js'); // 获得入口js文件 add by ls
var HtmlWebpackPlugin = require('html-webpack-plugin'); //动态生成 html add by ls
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //将css生成一个单独的css文件以link方式加载 add byls
var TransferWebpackPlugin = require('transfer-webpack-plugin'); //复制目录到指定目标目录下 add by ls 

//add by ls 根据 npm run 不同的指令判断环境
var publicPath = (function(){
  if(process.env.NODE_ENV === 'development'){
    return '/';
  }

  if(process.env.NODE_ENV === 'production'){
    return '../../';
  }
})();

console.log('\r\n');
console.log(__dirname)
console.log(path.resolve(__dirname, './dist'));
console.log('\r\n');

/*
__dirname 为：
  E:\learn-vuewebpack\Project01\my-project

path.resolve(__dirname,'./dist') 为：
  E:\learn-vuewebpack\Project01\my-project\dist
 */

module.exports = {
  //entry: './src/main.js',
  entry: entries,          //modify by ls 多页面处理
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: publicPath,  
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue',
        options: {
          // vue-loader options go here
          // 在 .vue 文件中使用scss 语法
          loaders: {
            //'scss': 'vue-style-loader!css-loader!sass-loader',
            'scss': ExtractTextPlugin.extract({ //add by ls 将vue文件的scss单独提取出来以link形式链接
              loader: 'css-loader!sass-loader',
              fallbackLoader: 'vue-style-loader'
            })
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        options: {
          name: 'public-assets/image/[name].[ext]?[hash]'
        }
      },
      { 
        test: /\.scss$/, //scss 加载器，需要 node-sass 模块
        //loader:  ExtractTextPlugin.extract(['style', 'css', 'resolve-url', 'sass']) //modify by ls 原来：['style', 'css?sourceMap', 'resolve-url', 'sass?sourceMap']
        loader: ExtractTextPlugin.extract({ //add by ls 将vue文件的scss单独提取出来以link形式链接
          fallbackLoader: 'style-loader', 
          loader: 'css!resolve-url!sass'
        })
      }/*,
      {
        test:/\.css$/,
        loader:['style', 'css']
      }*/
    ]
  },
  externals: {
    zepto: 'window.$' //使 $ 全局可用 add by ls 
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue',
      //add by ls 为常用目录设置别名
      'pubscss':path.resolve(__dirname, 'src/public-assets/scss'),
      'pubimg': path.resolve(__dirname, 'src/public-assets/image/public')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    historyApiFallback: true,
    noInfo: true,
    inline: true
  },
  devtool: '#eval-source-map',
  plugins:[
    new ExtractTextPlugin('[name].css'),
    new TransferWebpackPlugin([ //把指定文件夹下的文件复制到指定的目录
      {from: 'libs', to:'libs'},
      {from: 'public-assets/css', to:'public-assets/css'}
    ], path.resolve(__dirname,"src"))
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}


//add by ls 用于获取多页面的路径
function getEntry(globPath) {
  var entries = {},
      basename, tmp, pathname;

  glob.sync(globPath).forEach(function (entry) {
    //util 是工具函数目录文件，不作为打包的目标文件
    if(entry.indexOf('util')<0){
      basename = path.basename(entry, path.extname(entry));  //basename 为：detail
      tmp = entry.split('/').splice(-3);
      //pathname = tmp.splice(0, 1) + '\/' + basename; // 正确输出js和html的路径
      pathname = tmp[0] + '\/' + tmp[1] + '\/' + basename; // modify by ls正确输出js和html的路径
      entries[pathname] = entry;
    }     
  });
  console.log(entries);
  return entries;
}
/**
 * 控制台的输出：
 * 
 * entry是：./src/module/detail/detail.js
 * basename是：detail
 * tmp是：module,detail,detail.js
 * pathname是：module/detail
 * 
 * entry是：./src/module/index/index.js
 * basename是：index
 * tmp是：module,index,index.js
 * pathname是：module/index
 *  
 *  { 'module/detail/detail': './src/module/detail/detail.js',
 *    'module/index/index' : './src/module/index/index.js' }
 */


//add by ls 自动注入
var pages = getEntry('./src/module/**/*.html');
for (var pathname in pages) {
  // 配置生成的html文件，定义路径等
  var conf = {
    filename: pathname + '.html', //addByLs 应该是打包后的html路径
    template: pages[pathname],    // 模板路径（src 的路径）
    //下面的pathname 应该是 html 中 js 的引用路径
    chunks: [pathname, 'vendor', 'manifest'], // 每个html引用的js模块
    inject: true              // js插入位置
  };
  // 需要生成几个html文件，就配置几个HtmlWebpackPlugin对象
  module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}