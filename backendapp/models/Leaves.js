const mongoose = require("mongoose")
const moment = require("moment-timezone")

const leaveschema = new mongoose.Schema({
    leaveid:
    {
        type: String,
        unique: true,
        required: true,
        default: () => generateRandomId()
    },
    leavetype:
    {
        type: String,
      required:true,
      enum: ['casualLeave', 'MedicalLeave', 'OndutyLeave', 'MaternityLeave']
    },
    fromdate:
    {
        type: String,
        required: true,
    },
    todate:
    {
        type: String,
        required: true,
    },
    Reason:
    {
        type: String,
        required: true,
    },
    jobStatus: {
        type: String,
        required: true,
        default: "APPLIED"
    },
    appliedTime: {
        type: String,
        default: () => moment().tz('Asia/Kolkata').format('DD-MM-YYYY HH:mm:ss A')
    },
    employee: {
        type : Object,
        required : true
    }
})

const leave = mongoose.model('leave', leaveschema);

function generateRandomId() {
    const min = 100000;
    const max = 999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return "L" + randomNumber;
}


  module.exports = leave;