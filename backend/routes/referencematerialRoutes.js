const express = require('express');
const router = express.Router();
const ReferenceMaterial = require('../model/referencematerial');
const authUser = require('../middleware/authUser');

// Add new reference material
router.post('/addreference-material',authUser, async (req, res) => {
  try {
    const { title, description, link } = req.body;
    const newReferenceMaterial = await ReferenceMaterial.create({ title, description, link });
    res.status(201).json(newReferenceMaterial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all reference materials
router.get('/reference-material',authUser, async (req, res) => {
  try {
    const referenceMaterials = await ReferenceMaterial.find();
    res.status(200).json(referenceMaterials);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});





router.delete('/reference-material/:id',authUser,async(req,res)=>{

  try {
  let id=req.params.id;
  console.log(id);
  const deletematerial=await ReferenceMaterial.findByIdAndDelete(id);
  console.log(deletematerial);
  if(!deletematerial){
      return res.status(404).json({error:`no data found`});
     
  }
  res.status(200).send({Message:"mentor deleted Successfully"})
  
  } catch (error) {
      res.status(400).json({ error: 'Bad Request' });
  }
  })

module.exports = router;