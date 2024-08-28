const express = require("express");
const router = express.Router();

router.get("/",  async(req, res) => {
    res.json({
        success:true,
        message:'we are using the user route. '
    })
});
 // const salt = await bcrypt.genSalt(10);
      // const hashedPassword = await bcrypt.hash(password, salt);

module.exports = router