const express=require("express")

const {create,finding} = require("../controllers/seat");
const router = express.Router();


router.post("/seat/create",create)




module.exports=router