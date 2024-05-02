const express=require('express');
const router=express.Router();
const mentordetails=require('../model/mentor');



router.use(express.json());
// for creting new mentor

router.post('/mentorform',async(req,res)=>{

    try {
       const data=req.body;
       const newMentor=await mentordetails(data).save();
       console.log(newMentor);
       if(newMentor)
       {
       
       res.status(200).send({Message:'New mentor Added successfully'})
    }

    } catch (error) {
        res.status(400).send({Message:'failed'})
    }
    }
)


// Display mentor details in Admin Dashboard page

router.get('/admindashboard',(req,res)=>{

    try {
        mentordetails.find().then((mdetails)=>{
            res.status(200).send(mdetails);
        })
    } catch (error) {
       res.status(404).send({Message:"can not display mentor details"}) 
    }
})

router.delete('/delete/:id',async(req,res)=>{

    try {
    let id=req.params.id;
    console.log(id);
    const deletementor=await  mentordetails.findByIdAndDelete(id);
    console.log(deletementor);
    if(!deletementor){
        return res.status(404).json({error:`no data found`});
       
    }
    res.status(200).send({Message:"mentor deleted Successfully"})
    
    } catch (error) {
        res.status(400).json({ error: 'Bad Request' });
    }
    })
    
    
    
    
    router.put('/update/:id',async(req,res)=>{
        try {
            let id=req.params.id;
            const updatedmentor= await  mentordetails.findByIdAndUpdate(id, req.body);
            console.log(updatedmentor);
            if(!updatedmentor)
            {
                console.log("no mentor found");
               return res.status(404).json({error:`no data found`});
            }
            res.status(200).send({Message:"data updated"});
        } catch (error) 
        {
            res.status(400).json({ error: 'Bad Request' });
        }
    })
    


module.exports=router;