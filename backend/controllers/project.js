const express = require('express');
const router = express.Router();
const Project = require('../models/project');

router.get('/project' , async (req , res) => {
        res.setHeader('Access-Control-Allow-Origin', 'https://portfolio-seven-opal-43.vercel.app'); // Allow only this origin
         res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Specify allowed methods
         res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Specify allowed headers
         try {
             const project = await Project.find();
             res.json(project);
            } catch (error) {
                res.status(500).json({ message : error.message})
            }
            res.json({ message: 'Hello from API!' });
})

router.get('/:id', async (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', 'https://portfolio-seven-opal-43.vercel.app'); // Allow only this origin
         res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Specify allowed methods
         res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Specify allowed headers

         try {
             const project = await Project.findById(req.params.id);
             if (!project) {
                 return res.status(404).json({ error: 'Project not found' });
                }
                res.json(project);
            } catch (error) {
                res.status(500).json({ error: 'Server error' });
            }
            res.json({ message: 'Hello from API!' });
});
  
router.post('/project' , async (req , res) => {
        res.setHeader('Access-Control-Allow-Origin', 'https://portfolio-seven-opal-43.vercel.app'); // Allow only this origin
         res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Specify allowed methods
         res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Specify allowed headers

         const project = new Project ({
             title : req.body.title,
        description : req.body.description,
        imageUrl : req.body.imageUrl,
        video : req.body.video,
        github : req.body.github,
        demo : req.body.demo
    })

    try{
        const newProject = await project.save();
        res.status(201).json(newProject) 
    }catch (error){
        res.status(400).json({ message : error.message})
    }
    res.json({ message: 'Hello from API!' });
})



module.exports = router;
