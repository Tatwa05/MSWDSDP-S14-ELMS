const Employee = require("../models/Employee")
const Admin = require("../models/Admin")
const Leave = require("../models/Leaves")

const insertemployee = async (request, response) => {
    try 
    {
      const input = request.body;
      const employee = new Employee(input);
      await employee.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };

//   const insertemployee = async (request, response) => {
//     try {
//         const input = request.body;
        
//         const existingEmployee = await Employee.findOne({ empid: input.empid });
//         if (existingEmployee) {
//             return response.status(400).send('Employee ID already exists');
//         }
//         const employee = new Employee(input);
//         await employee.save();
//         response.send('Registered Successfully');
//     } catch (e) {
//         response.status(500).send(e.message);
//     }
// };


  const viewemployees = async (request, response) => 
 {
    try 
    {
      const employees = await Employee.find();
      if(employees.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(employees);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const deleteemployee = async (request, response) => 
 {
    try 
    {
      const email = request.params.email
      const employee = await Employee.findOne({"email":email})
      if(employee!=null)
      {
        await Employee.deleteOne({"email":email})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("Email ID Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };


  const checkadminlogin = async (request, response) => 
  {
     try 
     {
       const {email,password} = request.body
       //console.log(input)
       const admin = await Admin.findOne({email:email})
       console.log(admin)
       response.json(admin)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };


  const adminviewleaves = async (request, response) => 
{
  try 
    {
      const leaves = await Leave.find();
      if(leaves.length==0)
      {
        response.status(200).send("DATA NOT FOUND");
      }
      else
      {
        response.json(leaves);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }

};
  

   const changeleavestatus = async (request, response) =>
   {
    try 
    {
      const { leaveid, status } = request.body;
  
      if (!leaveid || !status) 
      {
        return response.status(400).send('Leave ID and status are required');
      }
  
      await Leave.findOneAndUpdate(
        { leaveid },
        { $set: { jobStatus : status } },
        { new: true } // it will return updated document
      );
  
      response.status(200).send('Leave status  Updated Successfully');
    } catch (error) {
      response.status(500).send(error.message);
    }
   };

   const analysis = async (request, response) =>
   {
    try 
    {
      const appliedCount = await Leave.countDocuments({ jobStatus: 'APPLIED' });

      response.json({appliedCount});
    } catch (error) {
      response.status(500).send(error.message);
    }
   };

   


  module.exports = {insertemployee,checkadminlogin,viewemployees,deleteemployee,changeleavestatus, adminviewleaves, analysis}