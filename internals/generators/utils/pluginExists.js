/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs')
let plugins
try {
  plugins = fs.readdirSync('src/plugins')
} catch (e) {
  plugins = []
}

function pluginExists (comp) {
  return plugins.indexOf(comp) >= 0
}

module.exports = pluginExists
