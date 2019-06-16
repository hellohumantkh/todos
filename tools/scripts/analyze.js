const shelljs = require('shelljs');
const chalk = require('chalk');

const {
  progress: animateProgress,
  checkmark: addCheckmark,
} = require('@aimake/utils');

const progress = animateProgress('Generating stats');

// Generate stats.json file with webpack
shelljs.exec(
  'aimake build --profile --json stats.json',
  addCheckmark.bind(null, callback) // Output a checkmark on completion
);

// Called after webpack has finished generating the stats.json file
function callback() {
  clearInterval(progress);
  process.stdout.write(
    '\n\nOpen ' + chalk.magenta('http://webpack.github.io/analyse/') + ' in your browser and upload the stats.json file!' +
    chalk.blue('\n(Tip: ' + chalk.italic('CMD + double-click') + ' the link!)\n\n')
  );
}
