Package.describe({
  summary: "jPanelMenu is a jQuery plugin that creates a paneled-style menu"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    'client/jquery.jpanelmenu.min.js'
  ], 'client');
});
