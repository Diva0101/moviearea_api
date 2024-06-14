import Movie from "../models/movies.model.js";

export const movieIndex = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (e) {
        res.status(500).json({ message: e.message.body })
    }
};

export const movieDetails = async (req, res) => {
    try{
        const movie = await Movie.findById(req.params.id)
        if(movie == null){
            return res.status(404).json({message: "can not find the movie"})
        }else{
            res.json(movie);
        }
    }catch(e){
        res.status(500).json({message: e.message.body})
    }
}

export const movieCreate = async (req, res) => {
    const newMovie = new Movie({
        title: req.body.title,
        desc: req.body.desc
    });

    try {
        const movie = await newMovie.save();
        return res.status(201).json(movie);
    } catch (e) {
        return res.status(201).json({ message: e.message });
    }

};

export const movieUpdate = async (req, res) => {
    try {
        const result = await Movie.findOneAndUpdate(
            {
                _id: req.params.id
            },
            {
                title: req.body.title,
                desc: req.body.desc
            },
            {
                new: true
            }
                   
        );
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error.message.body})
    }

};

export const movieDelete = async (req, res) => {
    try {
        const result = await Movie.findByIdAndDelete(
            {_id: req.params.id},
        )
        res.status(200).json({message:"deleted success"})
    } catch (error) {
        res.status(500).json({message: error.message.body})
    }
};