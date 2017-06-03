var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var scssRoot = 'src/assets/scss';

var scssDevToolFix = (info) => {
    let search = `/${scssRoot}/`;
    let fi = info.resourcePath.indexOf(search);
    let li = info.resourcePath.lastIndexOf(search);
    let s  = (fi < 0 || fi === li) ? info.resourcePath : info.resourcePath.substring(0, fi) + info.resourcePath.substring(li);
    return `${s}`;
};


module.exports = function (env) { return [
    // Configurations
    // This file contains 3 configurations (Node-single-js-file, Browser-single-js-file, Single-stylesheet-file).

    // [Node-single-js-file]: Packing a Node single Javascript file.
    {
        entry: {
            // TODO: YOU SHOULD REPLACE THE LIBRARY OUTPUT NAME!
            index_single: path.resolve(__dirname, 'src/index.ts')
        },
        output: {
            // TODO: YOU SHOULD REPLACE THE LIBRARY NAME!
            library: 'AwesomeMyLibrary2',

            libraryTarget: 'commonjs2',
            filename: process.env.NODE_ENV === 'production' ? '[name].js' : '[name].js',
            path: path.resolve(__dirname, 'bin'),
            devtoolModuleFilenameTemplate: process.env.NODE_ENV === 'production' ? void 0 : void 0
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader?' + JSON.stringify({
                    configFileName: 'tsconfig-webpack-node.json'
                })],

                // TODO: You should add/remove the referenced packages paths.
                // TODO: YOU SHOULD REPLACE THE PACKAGE NAME!
                exclude: /node_modules[\/\\](?!(webpack-typescript-lib-quickstart)|(wp-quickstart-caller-example)).*$/
            }, {
                test: /\.jsx?$/,
                use: ['babel-loader'],

                // TODO: You should add/remove the referenced packages paths.
                // TODO: YOU SHOULD REPLACE THE PACKAGE NAME!
                exclude: /node_modules[\/\\](?!(webpack-typescript-lib-quickstart)|(wp-quickstart-caller-example)).*$/
            }, {
                enforce: 'pre',
                test: /\.[tj]sx?$/,
                use: ['source-map-loader']
            }, {
                test: /\.html?(\?.+)?$/,
                use: ['html-loader']
            }, {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('postcss-custom-properties')(),
                                require('postcss-nested')(),
                                require('autoprefixer')({ browsers: ['last 2 versions'] })
                            ]
                        }
                    },
                    'sass-loader'
                ]
            }, {
                test: /\.(jpg|jpeg|png|ttf|otf|eot|svg|woff2?)(\?.+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'source-map'
    },

    // [Browser-single-js-file]: Packing a library Javascript file.
    {
        entry: {
            // TODO: YOU SHOULD REPLACE THE LIBRARY OUTPUT NAME!
            awesomemylib2: path.resolve(__dirname, 'src/index.ts')
        },
        output: {
            // TODO: YOU SHOULD REPLACE THE LIBRARY NAME!
            library: 'AwesomeMyLibrary2',

            libraryTarget: 'amd',
            filename: process.env.NODE_ENV === 'production' ? '[name].min.js' : '[name].[chunkhash].js',
            path: path.resolve(__dirname, 'dist'),
            devtoolModuleFilenameTemplate: process.env.NODE_ENV === 'production' ? '[resource-path]' : void 0
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader?' + JSON.stringify({
                    configFileName: 'tsconfig-webpack-dist.json'
                })],

                // TODO: You should add/remove the referenced packages paths.
                // TODO: YOU SHOULD REPLACE THE PACKAGE NAME!
                exclude: /node_modules[\/\\](?!(webpack-typescript-lib-quickstart)|(wp-quickstart-caller-example)).*$/
            }, {
                test: /\.jsx?$/,
                use: ['babel-loader'],

                // TODO: You should add/remove the referenced packages paths.
                // TODO: YOU SHOULD REPLACE THE PACKAGE NAME!
                exclude: /node_modules[\/\\](?!(webpack-typescript-lib-quickstart)|(wp-quickstart-caller-example)).*$/
            }, {
                enforce: 'pre',
                test: /\.[tj]sx?$/,
                use: ['source-map-loader']
            }, {
                test: /\.html?(\?.+)?$/,
                use: ['html-loader']
            }, {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('postcss-custom-properties')(),
                                require('postcss-nested')(),
                                require('autoprefixer')({ browsers: ['last 2 versions'] })
                            ]
                        }
                    },
                    'sass-loader'
                ]
            }, {
                test: /\.(jpg|jpeg|png|ttf|otf|eot|svg|woff2?)(\?.+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'cheap-eval-source-map'
    },

    // [Single-stylesheet-file]: Packing a library CSS file.
    {
        entry: {
            style: path.resolve(__dirname, `${scssRoot}/main.scss`)
        },
        output: {
            filename: process.env.NODE_ENV === 'production' ? '[name].min.css' : '[name].[hash].css',
            path: path.resolve(__dirname, 'dist'),
            devtoolModuleFilenameTemplate        : process.env.NODE_ENV === 'production' ? scssDevToolFix : void 0,
            devtoolFallbackModuleFilenameTemplate: process.env.NODE_ENV === 'production' ? scssDevToolFix : void 0
        },
        module: {
            rules: [{
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {

                                // TODO: You should add/remove the referenced packages assets paths.
                                alias: {
                                    "../images": "webpack-typescript-lib-quickstart/src/assets/images"
                                },

                                sourceMap: true
                            }
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: () => [
                                    require('postcss-custom-properties')(),
                                    require('postcss-nested')(),
                                    require('autoprefixer')({ browsers: ['last 2 versions'] })
                                ]
                            }
                        }, {
                            loader: 'sass-loader',
                            options: {

                                // TODO: You should add/remove the referenced packages assets paths.
                                includePaths: [
                                    path.resolve("./node_modules/webpack-typescript-lib-quickstart/src/assets/scss")
                                ],

                                sourceMap: true
                            }
                        }
                    ]
                })
            }, {
                test: /\.(jpg|jpeg|png|ttf|otf|eot|svg|woff2?)(\?.+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }]
        },
        plugins: [
            new ExtractTextPlugin({
                filename: process.env.NODE_ENV === 'production' ? '[name].min.css' : '[name].[hash].css',
                disable: false,
                allChunks: true
            })
        ],
        devtool: 'source-map'
    }

]}