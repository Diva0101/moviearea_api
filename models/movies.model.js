import { Schema, model } from "mongoose";

const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    desc: String
});

const Movie = model("Movie", schema);

export default Movie;