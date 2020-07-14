const express = require('express')
const router = express.Router()

const {
    movieRegistration,
    getAllMovies,
    getMovieProfile,
    getMovieFilterGenre,
    movieDelete
} = require('./controller')

router.get('/', getAllMovies)
router.get('/:id', getMovieProfile)
router.post('/filterByGenre', getMovieFilterGenre)
router.post('/', movieRegistration)
router.delete('/:id', movieDelete)

module.exports = router