const employeecontroller = require("../controllers/employeecontroller");
const express = require("express");
const employeerouter = express.Router();

employeerouter.use(express.json()); // Add this line to use JSON parsing middleware

employeerouter.post("/checkemplogin", employeecontroller.checkemployeelogin);
employeerouter.post("/applyleave", employeecontroller.applyleave);
employeerouter.get("/viewleaves/:email", employeecontroller.viewleaves);
employeerouter.put("/changeemppassword",employeecontroller.changeemppassword)


module.exports = employeerouter;
