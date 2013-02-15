define(function (require) {

    var moviesRepository = require("repositories/moviesRepository");

    var viewModel = {
        directors: ko.observable(),
        selectedDirector: ko.observable(),

        activate: function () {
            this.directors(moviesRepository.listDirectors());
        }
    };

    viewModel.selectedDirector.subscribe(function(director) {
        window.location.hash = '#/movies/show?director=' + director;
    });

    viewModel.movies = ko.computed(function() {
        return _.filter(moviesRepository.listMovies(), function(movie) {
            return movie.director == viewModel.selectedDirector();
        });
    });

    return viewModel;
});