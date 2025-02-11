const Movie = require("../models/Movie.js");
const MovieList = require("../models/MovieList.js");

const lista = new MovieList();

lista.addMovie(new Movie("Coraline", "Fantasia", "Henry Selick", "1h40", "13 Fev 2009"));
lista.addMovie(new Movie("Ainda Estou Aqui", "Drama", "Walter Salles", "2h18", "7 Nov 2024"));

const router = {
    getAllMovies: (req, res) => {
        try {
            res.json(lista.getAllMovies());
        } catch (error) {
            res.status(404).json({ message: "Erro ao buscar filmes. Tente novamente!", error })
        }
    },

    getMovieById: (req, res) => {
        try {
            res.json(lista.getMovieById(req.params.id));
        } catch (error) {
            res.status(404).json({ message: "Filme não encontrado. Tente novamente!", error });
        }
    },

    addMovie: (req, res) => {
        try {
            const { title, genre, director, duration, premiere } = req.body;
            if (!title || !genre || !director || !duration || !premiere) {
                throw new Error("Todos os campos são obrigatórios.");
            }
            
            const film = new Movie(title, genre, director, duration, premiere);
            lista.addMovie(film);
            res.status(200).json({ message: "Filme adicionado com sucesso!", film});
        } catch (error) {
            res.status(400).json({ message: error.message, error });
        }
    },

    updateMovie: (req, res) => {
        try {
            res.status(200).json(lista.updateMovie(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({ message: "Erro ao atualizar o filme. Tente novamente!", error });
        }
    },

    deleteMovie: (req, res) => {
        try {
            lista.deleteMovie(req.params.id);
            res.status(200).json({ message: "Filme deletado com sucesso!"})
        } catch (error) {
            res.status(404).json({ message: "Erro ao deletar filme. Tente novamente!"});
        }
    }
}

module.exports = router;