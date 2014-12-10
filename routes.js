'use strict';

module.exports = function controller(router) {
  router.get('/', function (req, res) {
    res.send('<pre><code>' + JSON.stringify(req.app.kraken._store, null, 2) + '</code></pre>');
  });
};
