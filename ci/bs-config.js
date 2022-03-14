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

const apiProxy = createProxyMiddleware('/api', {
  target: 'xxx',
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