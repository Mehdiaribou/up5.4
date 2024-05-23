'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const environment = process.env.EMBER_ENV;
const IS_PROD = environment === 'production';
const IS_TEST = environment === 'test';
module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    //hinting: IS_TEST,
    tests: IS_TEST,
    "ember-cli-babel": {
      includePolyfill: true // Only include babel polyfill in prod
    },
    'ember-bootstrap': {
      'bootstrapVersion': 3,
      'importBootstrapFont': true,
      'importBootstrapCSS': true
    },
    autoprefixer: {
      sourcemap: false // Was never helpful
    },
    sourcemaps: {
      enabled: false // CMD ALT F in chrome is *almost* as fast as CMD P
    },
    lessOptions: {
      paths: [
        'bower_components/bootstrap/less'
      ]
    },
    fingerprint: {
      enabled :false
    }
  });
  app.import('node_modules/classlist/classList.js');
  app.import('node_modules/jquery/dist/jquery.jss');
  app.import('vendor/css/app.css');
  // app.import('bower_components/moment/moment.js');

  app.import('node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js');

  app.import('node_modules/bootstrap/dist/js/bootstrap.js');
  app.import('node_modules/bootstrap/dist/css/bootstrap.css');
  app.import('vendor/ember/ember-template-compiler.js');
  app.import('node_modules/ic-ajax/dist/globals/main.js');
  app.import('node_modules/datatables/media/js/jquery.dataTables.js');

  app.import('node_modules/highcharts/highstock.js');

  app.import('node_modules/highcharts/modules/no-data-to-display.js');
  app.import('node_modules/highcharts/modules/exporting.js');

  app.import('node_modules/jquery-slimscroll/jquery.slimscroll.js');

  app.import('node_modules/leaflet.fullscreen/dist/leaflet.fullscreen.css');
  app.import('node_modules/leaflet.fullscreen/dist/Leaflet.fullscreen.js');

  // app.import('bower_components/leaflet.Coordinates/dist/Leaflet.Coordinates-0.1.3.css');
  // app.import('bower_components/leaflet.Coordinates/dist/Leaflet.Coordinates-0.1.3.src.js');
  // app.import('node_modules/leaflet-label/dist/leaflet.label.css');
  // app.import('node_modules/leaflet-label/dist/leaflet.label.js');
  // app.import('node_modules/leaflet-polylinedecorator/leaflet.polylineDecorator.js');
  // app.import('node_modules/leaflet-textpath/leaflet.textpath.js');
  app.import('node_modules/jquery-quicksand/jquery.quicksand.js');
  app.import('node_modules/jquery.easing/jquery.easing.js');

  // app.import('node_modules/ember-flash-messages/layout.css');
  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
