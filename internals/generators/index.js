/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const pluginGenerator = require('./plugin')

module.exports = (plop) => {
  plop.setGenerator('plugin', pluginGenerator)
  plop.addHelper('directory', (comp) => `plugins/${comp}`)
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'))
}
