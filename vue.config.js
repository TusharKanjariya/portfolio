var CopyWebpackPlugin = require('webpack')
var path = require('path')
var PrerenderSpaPlugin = require('prerender-spa-plugin')

module.exports = {
    configureWebpack: {
        plugins: [
            new PrerenderSpaPlugin({
                staticDir: path.join(__dirname, 'dist'),
                routes: ['/']
            })
        ]
    }
}