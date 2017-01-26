/**
 * Plugin Generator
 */

const pluginExists = require('../utils/pluginExists')

module.exports = {
  description: 'Add a new plugin for Alfred',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of plugin',
    default: 'Generic Plugin',
    choices: () => ['Generic Plugin']
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Plugin',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return pluginExists(value) ? 'A plugin with this name already exists' : true
      }

      return 'The name is required'
    }
  }],
  actions: (data) => {
    // Generate index.js and index.test.js
    let pluginTemplate

    switch (data.type) {
      case 'Generic Plugin': {
        pluginTemplate = './plugin/generic.js.hbs'
        break
      }
      default: {
        pluginTemplate = './plugin/generic.js.hbs'
      }
    }

    return [{
      type: 'add',
      path: '../../src/plugins/{{camelCase name}}/index.js',
      templateFile: pluginTemplate,
      abortOnFail: true
    }, {
      type: 'add',
      path: '../../src/plugins/{{camelCase name}}/index.test.js',
      templateFile: './plugin/test.js.hbs',
      abortOnFail: true
    }]
  }
}
