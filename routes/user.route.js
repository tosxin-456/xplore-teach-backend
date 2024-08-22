const express = require("express");
const router = express.Router();

router.get("/",  async(req, res) => {
    res.json({
        success:true,
        message:'we are using the user route. '
    })
});


module.exports = router