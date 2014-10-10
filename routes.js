'use strict';

module.exports = function (router) {
  router.get('/', function (req, res) {
    res.send('I am the main app.<br>This is my config:<br><code><pre>' + JSON.stringify(req.app.kraken._store, null, 2) + '</pre></code>');
  });
};
