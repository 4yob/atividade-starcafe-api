const { v4: uuid4 } = require("uuid");

class Movie {
    constructor(title, genre, director, duration, premiere) {
        this.id = uuid4();
        this.title = title;
        this.genre = genre;
        this.director = director;
        this.duration = duration;
        this.premiere = premiere;
    }
}

module.exports = Movie;