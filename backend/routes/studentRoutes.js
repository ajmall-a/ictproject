const express=require('express');
const router=express.Router();
const studentDetails=require('../model/student');



router.use(express.json());




router.get('/studentdetails/:student',async(req,res)=>{

    const StudentName = req.params.student;
    try {  
     const Student=await studentDetails.find({Name:StudentName}) ;
     if(!Student)
        {
        return res.status(404).json({ message: 'Student not found' });}
      res.json(Student);
    } catch (err) {
        console.error('Error fetching Student Details:', err);
      res.status(500).json({ message: err.message });
    }
  });

 
    
    
    
    router.put('/students/:id',async(req,res)=>{
        try {
            let id=req.params.id;
            
            const updateStudent= await  studentDetails.findByIdAndUpdate(id, req.body);
            console.log(updateStudent);
            if(!updateStudent)
            {
                console.log("no Student found");
               return res.status(404).json({error:`no data found`});
            }
            res.status(200).send({Message:"data updated"});
        } catch (error) 
        {
            res.status(400).json({ error: 'Bad Request' });
        }
    })
    

 


module.exports=router;