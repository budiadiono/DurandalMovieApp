define(function (require) {
    var router = require('durandal/plugins/router');
    
    router.activeItem.settings.areSameItem = function (currentItem, newItem, data) {
        if (currentItem != newItem) {
            return false;
        }
        else {
            newItem.activate(data);
            return true;
        }
    };

    return {
        router: router,
        activate: function () {
            return router.activate('movies/show');
        }
    };
});