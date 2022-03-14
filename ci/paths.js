const path = require('path')

module.exports = {
  R: (...p) => path.resolve(...p),
  join: (...p) => path.join(...p),
  baseResovle: (...p) => path.resolve(__dirname, '..', ...p),
  docs: path.resolve(__dirname, '../docs'),
}