Package.describe({
  name: "mizzao:bootstrap-3",
  summary: "HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",
  version: "3.3.0",
  git: "https://github.com/mizzao/meteor-bootstrap-3.git"
});

Package.onUse(function (api) {
  api.versionsFrom("1.0");

  api.use('jquery');

  //when jqueryui is used with bootstrap, jqueryui has to come first or the
  //tooltip plugins step on each other: https://github.com/twbs/bootstrap/issues/6303ls Package
  api.use("mizzao:jquery-ui", 'client', { weak: true });

  var path = Npm.require('path');
  var asset_path = path.join('bootstrap-3');
  api.addFiles(path.join(asset_path, 'css', 'bootstrap.css'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'bootstrap.js'), 'client');

  // fonts
  api.addFiles(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.eot'), 'client');
  api.addFiles(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.svg'), 'client');
  api.addFiles(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.woff'), 'client');

  // XXX this makes the paths to the icon sets absolute. it needs
  // to be included _after_ the standard bootstrap css so
  // that its styles take precedence.

  // If this file is not added, browsers using the icon fonts will not be able
  // to load them if the page is initially accessed at an url other than /.
  api.addFiles(path.join('bootstrap-override.css'), 'client');
});
