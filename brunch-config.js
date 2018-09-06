// See http://brunch.io for documentation.
module.exports = {
  files: {
    javascripts: {
      joinTo: 'js/app.js',
      order: {
        before: ['app/js/jquery.min.js'],
        after: ['app/initialize.js']
      }
    },
    stylesheets: {
      joinTo: 'css/app.css',
      order: {
        before: [
          'app/css/bootstrap.css',
          'app/css/font-awesome.css',
          'app/css/main.css'
        ],
        after: ['app/css/styles.css']
      }
    }
  },
  modules: {
    definition: false,
    wrapper: false
  },
  plugins: {
    postcss: {
      processors: [require('autoprefixer')()]
    }
  },
  npm: {
    enabled: false
  },
  hooks: {
    preCompile() {
      console.log('About to compile...');
      return Promise.resolve();
    },
    onCompile(generatedFiles, changedAssets) {
      console.log('Done.');
      console.log(generatedFiles.map(f => f.path));
    }
  }
};
