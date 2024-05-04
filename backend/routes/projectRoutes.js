const express=require('express');
const router=express.Router();
const projectdetails=require('../model/project');



router.use(express.json());
// for creting new mentor

router.post('/projectform',async(req,res)=>{

    try {
       const data=req.body;
       const newProject=await projectdetails(data).save();
       console.log(newProject);
       if(newProject)
       {
       
       res.status(200).send({Message:'New project Topic Added successfully'})
    }

    } catch (error) {
        res.status(400).send({Message:'failed'})
    }
    }
)


// Display mentor details in Admin Dashboard page

router.get('/admin',(req,res)=>{

    try {
        projectdetails.find().then((pdetails)=>{
            res.status(200).send(pdetails);
        })
    } catch (error) {
       res.status(404).send({Message:"can not display Project details"}) 
    }
})

router.delete('/deleteproject/:id',async(req,res)=>{

    try {
    let id=req.params.id;
    console.log(id);
    const deleteproject=await  projectdetails.findByIdAndDelete(id);
    console.log(deleteproject);
    if(!deleteproject){
        return res.status(404).json({error:`no data found`});
       
    }
    res.status(200).send({Message:"project deleted Successfully"})
    
    } catch (error) {
        res.status(400).json({ error: 'Bad Request' });
    }
    })
    
    
    
    
    router.put('/updateproject/:id',async(req,res)=>{
        try {
            let id=req.params.id;
            const updateproject= await  projectdetails.findByIdAndUpdate(id, req.body);
            console.log(updateproject);
            if(!updateproject)
            {
                console.log("no project found");
               return res.status(404).json({error:`no data found`});
            }
            res.status(200).send({Message:"data updated"});
        } catch (error) 
        {
            res.status(400).json({ error: 'Bad Request' });
        }
    })
    

    // mentor dashboard
    
router.get('/mentoProjects/:mentor',(req,res)=>{
    const mentorName = req.params.mentor;
    try {
        projectdetails.find({ mentor: mentorName })
        .then((pdetails)=>{
            res.status(200).send(pdetails);
        })
    } catch (error) {
       res.status(404).send({Message:"can not display Project details"}) 
    }
})


module.exports=router;