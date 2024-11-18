const express = require('express');
const router = express.Router();
const Skills = require('../models/skills');

router.get('/skills', async (req, res) => {
  try {
    console.log('Fetching skills...');
    const skill = await Skills.find();
    console.log('Fetched skills:', skill);
    res.json(skill);
  } catch (error) {
    console.error('Error fetching skills:', error.message || error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.post('/skills' , async (req , res) => {
    
    const skills = new Skills ({
        title : req.body.title,
        icon : req.body.icon,
    });

    try{
        const newskill = await skills.save();
        res.status(201).json(newskill) 
    }catch (error){
        res.status(400).json({ message : error.message})
    }
})

module.exports = router;
