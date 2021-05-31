const Bookings= require('../models/booking') 
const seats= require('../models/seat')

exports.create = async(req,res) => {
    const booking = new Bookings(req.body);
    booking.save((err,data)=>{
        if(err) {
            return res.status(400),json({error:err});
        }
        res.json({data})
    })
}
    // const a = await finding(req, res) ;
    // console.log(a);


exports.finding = async(req,res) => {
    if(seats.Data.available==true){
        seats.updateOne({'Data.set_no':'ticketsneeded'}, {'$set': {
            'Data.$.available':false
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
    } else {
        return res.json({
            message:"Check seat availablity"
        })
    }
    
}






// exports.register= async (req,res) => {
//     const {name,email,password,role}=req.body;
//     User.findOne({email}).exec(async (err,user) => {
//         if(user){
//             return res.status(400).json({error:"user with this email already exits"});
//         }
//         const newUser = new User({name,email,password,role});
//         newUser.save(async (err,success)=>{
//             if(err) {
//                 return res.status(400),json({error:err});
//             }
//             const a = await mail(req, res) ;
//             console.log(a);
//             return res.json({
//                 message:"signup succesfull"
//             })
//         })
//     })
// // }



// const regEmail = async (req,  res) => {
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//           auth: {
//             user:  process.env.SMTP_USERNAME,
//             pass:  process.env.SMTP_PASSWORD
//           }
//         });
//     var mailOptions = {
//             from:'reshmasubban25@gmail.com',
//             to:'reshmas2021@srishakthi.ac.in',
//             subject:'Sending Email using Node.js',
//             html:  '<p>Click
//             <a href="http://localhost:3000">here</a>
//             welcome to my website</p>'
//          }
//     transporter.sendMail(mailOptions, function(error, info){
//         if(error){
//             console.log(error)
//         } else{
//             console.log('Email sent:' + info.response)
//         }
//         return true 
//     })
//     }