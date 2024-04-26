const admincontroller = require("../controllers/admincontroller");
const express = require("express");
const adminrouter = express.Router();

adminrouter.use(express.json()); // Add this line to use JSON parsing middleware

adminrouter.post("/insertemployee", admincontroller.insertemployee);
adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin);
adminrouter.get("/viewemployees",admincontroller.viewemployees);
adminrouter.delete("/deleteemployee/:email",admincontroller.deleteemployee);
adminrouter.get("/adminviewleaves",admincontroller.adminviewleaves)
adminrouter.post("/changeleavestatus",admincontroller.changeleavestatus);
adminrouter.get("/analysis",admincontroller.analysis)



module.exports = adminrouter;
