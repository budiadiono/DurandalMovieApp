define(function (require) {

    return {
        _lastId: 2,
        _movies: [
            { id: 0, title: "Star Wars", director: "Lucas" },
            { id: 1, title: "King Kong", director: "Jackson" },
            { id: 2, title: "LOTR: The Return of the King", director: "Jackson" },
            { id: 3, title: "LOTR: The Two Towers", director: "Jackson" },
            { id: 4, title: "LOTR: The Fellowship of the Ring", director: "Jackson" },
            { id: 5, title: "Memento", director: "Nolan" },
            { id: 6, title: "The Last Airbender", director: "Shyamalan" },
            { id: 7, title: "Dawn of the Dead", director: "Snyder" },
            { id: 8, title: "Alice in Wonderland", director: "Burton" },
            { id: 9, title: "Indiana Jones and the Kingdom of the Crystal Skull", director: "Speilberg" }
        ],

        listDirectors: function () {
            return _.union(_.pluck(this._movies, 'director'));
        },

        listMovies: function () {
            return this._movies;
        },

        addMovie: function (movieToAdd) {
            movieToAdd.id = ++this._lastId;
            this._movies.push(movieToAdd);
        },

        getMovie: function (id) {
            for (var i = 0; i < this._movies.length; i++) {
                if (this._movies[i].id == id) {
                    return this._movies[i];
                    break;
                }
            }
        }

    };
});