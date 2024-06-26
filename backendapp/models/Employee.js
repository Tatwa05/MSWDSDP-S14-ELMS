const mongoose = require("mongoose")

const employeeschema = new mongoose.Schema({
  empid: {
    type: String,
    required: true,
    unique: true,
},
    fullname: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required:true,
      enum: ['male', 'female', 'others']
    },
    dateofbirth: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    
    password: {
      type: String,
      required: true,
      default:"klef1234"
      
    },
    location: {
      type: String,
      required: true
    },
    contact: {
        type: String,
        required: true,
        unique:true
      },
    casualleaves: {
        type: String,
        required: true,
        default : 30
      },
      medicalleaves: {
        type: String,
        required: true,
        default : 0
      },
      ondutyleaves: {
        type: String,
        required: true,
        default : 0
      },
      maternityleaves: {
        type: String,
        required: true,
        default : 0
      },
    
  });

  const employee = mongoose.model('employee', employeeschema);

  module.exports = employee;