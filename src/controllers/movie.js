const Movies=require("../models/movie")


exports.movieById= (req,res,next,id) => {
    Movies.findById(id).exec((err,movie) => {
        if(err || !movie){
            return res.status(400).json({
                error : "movie not found"
            });
        }
        req.movie = movie;
        next();
    });
}


exports.create = (req,res) => {
    const movie = new Movies(req.body);
    movie.save((err,data)=>{
        if(err) {
            return res.status(400),json({error:err});
        } else {
            res.json({data})
        }
    })
}

exports.listOrders = (req,res) => {
    Movies.find()
        .exec((err,movie) => {
            if(err){
                return res.status(400).json({
                    error:errorHandler(err)
                })
            }
            res.json(movie)
        })
}

exports.listTheater = (req,res) => {
    Movies.find()
    .populate('theater','theatreName')
    .populate('screen','name')
        .exec((err,movie) => {
            if(err){
                return res.status(400).json({
                    error:errorHandler(err)
                })
            }
            res.json(movie)
        })
} 