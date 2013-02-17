require.config({
    paths: {
        'text': 'durandal/amd/text'
    }
});

define(function (require) {
    var app = require('durandal/app'),
        viewLocator = require('durandal/viewLocator'),
        system = require('durandal/system'),
        router = require('durandal/plugins/router');

    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.start().then(function () {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //configure routing
        router.useConvention();
        router.mapNav({ url: "/:user/:group/movies/show", hash: "/:user/:group/movies/show", moduleId: 'viewmodels/movies/show' });
        router.mapNav({ url: "/:user/:group/movies/add", hash: "/:user/:group/movies/add", moduleId: 'viewmodels/movies/add'});
        router.mapNav({ url: "/:user/:group/movies/details/:id", hash: "/:user/:group/movies/details/:id", moduleId: 'viewmodels/movies/details' });

        router.activeItem.settings.beforeActivate = function (newItem, params) {
            newItem.userPath(params.user + '/' + params.group);
            return newItem;
        };

        //router.onNavigationComplete = function(routeInfo, params, newItem) {
        //    newItem.userPath(params.user + '/' + params.group);
        //};

        app.adaptToDevice();

        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell', 'entrance');
    });
});