const roboter = require('roboter');

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
  }).
  start();
