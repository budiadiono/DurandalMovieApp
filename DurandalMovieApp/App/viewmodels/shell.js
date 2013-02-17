define(function (require) {
    var router = require('durandal/plugins/router');

    return {
        router: router,
        activate: function () {
            router.replaceLocation('#/budi/ghost-protocol/movies/show');
            return router.activate();
        }
    };
});