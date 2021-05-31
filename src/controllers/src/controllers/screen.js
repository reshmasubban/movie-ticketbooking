const Screens=require("../models/screen")


exports.screenById= (req,res,next,id) => {
    Screens.findById(id).exec((err,screen) => {
        if(err || !screen){
            return res.status(400).json({
                error : "movie not found"
            });
        }
        req.screen = screen;
        next();
    });
}


exports.create = (req,res) => {
    const screen = new Screens(req.body);
    screen.save((err,data)=>{
        if(err) {
            return res.status(400),json({error:err});
        } else {
            res.json({data})
        }
    })
}

exports.listOrders = (req,res) => {
    Screens.find()
    //.populate('movie')
    .populate('seat')
        .exec((err,screen) => {
            if(err){
                return res.status(400).json({
                    error:errorHandler(err)
                })
            }
            res.json(screen)
        })
}