const seats= require('../models/seat') 

exports.create = (req,res) => {
    const s = new seats(req.body);
    s.save((err,data)=>{
        if(err) {
            return res.status(400),json({error:err});
        } else {
            res.json({data})
        }
    })
}



exports.finding = (req,res) => {
    seats.update({'Data.seat_no': '1B'}, {'$set': {
        'Data.$.available': false
    }})
    .exec((err,data) =>{
        console.log(err,data)
                    if(err){
                        return res.status(400).json({
                            error:"No seats found"
                        })
                    }
                    res.json({data})
                })
}
