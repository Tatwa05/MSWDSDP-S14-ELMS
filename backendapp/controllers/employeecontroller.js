const Employee = require("../models/Employee")
const Leaves = require("../models/Leaves")

const checkemployeelogin = async (request, response) => 
{
   try 
   {
     const input = request.body
     const employee = await Employee.findOne(input)
     response.json(employee)
   } 
   catch (error) 
   {
     response.status(500).send(error.message);
   }
 };

 const applyleave = async (request, response) => {
  try {
    const input = request.body;
    // Assuming your Leave model is properly defined and imported
    const leave = new Leaves(input);
    await leave.save();
    response.send('Leave Applied Successfully');
  } catch(e) {
    response.status(500).send(e.message);
  }
};


const viewleaves = async (request, response) => 
{
  try
  {
    const email = request.params.email;
    const leaves = await Leaves.find({"employee.email":email});
    // console.log(leaves)
    if(leaves.length==0)
    {
      response.status(200).send("DATA NOT FOUND");
    }
    else
    {
      response.json(leaves)
    }
  }
  catch (error) 
    {
      response.status(500).send(error.message);
    }

};

const changeemppassword = async (request, response) => 
{
  try 
    {
      const { email, oldpassword, newpassword } = request.body;

      const emp = await Employee.findOne({ email, password: oldpassword });
      
       if (!emp) 
      {
        response.status(400).send('Invalid Old Password');
      }
      else
      {
          if(oldpassword==newpassword)
          {
            response.status(400).send('Both Passwords are Same');
          }
          else
          {
            await Employee.updateOne({email},{ $set: { password: newpassword } });
             response.json('Password Updated Successfully');
          }
        
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
}
  


 module.exports = {checkemployeelogin,applyleave,viewleaves,changeemppassword}