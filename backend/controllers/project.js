const express = require('express');
const router = express.Router();
const Project = require('../models/project');

router.get('/project' , async (req , res) => {
    try {
        const project = await Project.find();
        res.json(project);
        } catch (error) {
            res.status(500).json({ message : error.message})
        }
})

router.get('/:id', async (req, res) => {
    try {
      const project = await Project.findById(req.params.id);
      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});
  
router.post('/project' , async (req , res) => {
    
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
})

router.put('/:id' ,async (req , res) => {
    try {
        const project = await Project.findById(req.params.id)

        if(project) {
            project.title = req.body.title || project.title,
            project.description = req.body.description || project.description,
            project.imageUrl = req.body.imageUrl || project.imageUrl,
            project.video = req.body.video || project.video
            project.demo = req.body.demo || project.demo
            project.github = req.body.github || project.github

            const updatedProject = await project.save();
            res.json(updatedProject)
        } else{
            res.status(404).json({ message: 'Project not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

router.delete('/:id' , async (req , res) => {
    try{
        const project = await Project.findById(req.params.id);

        if(project) {
            await project.remove();
            res.status(201).json({ message: 'Project deleted' });
        } else {
            res.status(404).json({ message: 'Project not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;
