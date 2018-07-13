const fs = require('fs');
const path = require('path');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'Stateless Function',
    choices: () => ['Stateless Function', 'React.PureComponent', 'React.Component'],
  }, {
    type: 'input',
    name: 'path',
    message: 'Which directory should it be placed?',
    default: 'src/components',
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Button',
    validate: (value, answer) => {
      const pageComponents = fs.readdirSync(path.join(process.cwd(), answer.path));
      if ((/.+/).test(value)) {
        return pageComponents.indexOf(value) >= 0 ? 'A component with this name already exists' : true;
      }

      return 'The name is required';
    },
  }, {
    type: 'confirm',
    name: 'wantMessages',
    default: false,
    message: 'Do you want i18n messages (i.e. will this component use text)?',
  }, {
    type: 'confirm',
    name: 'wantLoadable',
    default: false,
    message: 'Do you want to load the component asynchronously?',
  }],
  actions: (data) => {
    // Generate index.js and index.test.js
    let componentTemplate;

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = './component/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './component/class.js.hbs';
      }
    }

    const componentDir = path.join(process.cwd(), data.path, '{{properCase name}}');
    const resolveApp = relativePath => path.join(componentDir, relativePath);

    const actions = [{
      type: 'add',
      path: resolveApp('index.js'),
      templateFile: componentTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: resolveApp('tests/index.test.js'),
      templateFile: './component/test.js.hbs',
      abortOnFail: true,
    }];

    // If they want a i18n messages file
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: resolveApp('messages.js'),
        templateFile: './component/messages.js.hbs',
        abortOnFail: true,
      });
    }

    // If want Loadable.js to load the component asynchronously
    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: resolveApp('Loadable.js'),
        templateFile: './component/loadable.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
