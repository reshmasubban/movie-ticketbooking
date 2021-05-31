const express=require("express")

const {create,listOrders,screenById} = require("../controllers/screen");
const router = express.Router();

router.post("/screen/create",create)
router.get("/screen/listOrders/:screenId",listOrders)

router.param('screenId',screenById)

module.exports=router