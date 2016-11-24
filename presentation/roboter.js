const path = require('path');

const roboter = require('roboter');

const srcDirectory = path.join(process.cwd(), 'src');

roboter.
  workOn('client').
  equipWith(task => {
    task('universal/analyze', {
      src: ['']
    });

    task('client/copy-static', {
      src: 'src/static/**/*',
      watch: 'src/static/**/*',
      buildDir: 'build/static/'
    });

    task('client/watch-app', {
      entryFiles: [
        path.join(srcDirectory, 'index.dev.html'),
        path.join(srcDirectory, 'index.scss'),
        path.join(srcDirectory, 'index.js')
      ]
    });
  }).
  start();
