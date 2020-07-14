const {
    Movie
} = require('../../models')
const {
    sequelize
} = require('../../models/Movie')


module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const result = await Movie.findAll()
            res.send({
                result
            })
        } catch (error) {
            res.send(error)
        }
    },
    getMovieProfile: async (req, res) => {
        const {
            id
        } = req.params
        try {
            const result = await Movie.findByPk(id)
            res.send({
                result
            })
        } catch (error) {
            res.send(error)
        }
    },
    getMovieFilterGenre: async (req, res) => {
        const {
            genre
        } = req.body
        try {
            const result = await Movie.findAll({
                where: {
                    genre: genre
                }
            })
            res.send({
                message: `Filter by ${genre}`,
                result
            })
        } catch (error) {
            res.send(error)
        }
    },
    movieRegistration: async (req, res) => {
        const {
            title,
            year,
            genre
        } = req.body

        try {
            const result = await Movie.create({
                title,
                year,
                genre
            })
            res.send({
                message: `Registration successfull`,
                result: result
            })
        } catch (error) {
            res.send(error)
        }
    },
    movieDelete: async (req, res) => {
        const {
            id
        } = req.params
        try {
            const result = await Movie.destroy({
                where: {
                    id_movies: id
                }
            })
            res.send({
                message: `Delete data successfull`,
                result: result
            })
        } catch (error) {
            res.send(error)
        }
    }
}