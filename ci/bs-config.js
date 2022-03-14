/*********************************************************************
 * AircraftClass :: NxDrop
 *		@description: 
 *		@description: 
 * WARNINGS:
 *		
 * HISTORY:
 *		@author: lanbery@gmail.com
 *		@created:  2022-03-11
 *		@comments: 
**********************************************************************/
const {docs} = require('./paths')
const port = process.env.PORT||19527

const { createProxyMiddleware } = require('http-proxy-middleware')
const staticFilter = function (pathname,req){
    return pathname.match('^/demo-ui') && !pathname.match('^/demo-ui/index.html') && req.method === 'GET'
}
const apiProxy = createProxyMiddleware(staticFilter, {
  target: `http://localhost:${port}/`,
  changeOrigin: true, // for vhosted sites
})

module.exports = {
    port: port,
    browser: ['chrome'],
    files: ['./docs/**/*.{html,scss,js,jsx}'],
    server: {
        baseDir: docs,
        // middleware: {
        //   10: apiProxy,
        // },
    },
    open: true,
}