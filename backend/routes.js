import express from 'express';
import Symptom from './models/symptomModel.js';
import Condition from './models/conditionModel.js';

const router = express.Router();

// Create a new symptom
router.post('/symptoms', async (req, res) => {
  try {
    const symptom = new Symptom(req.body);
    await symptom.save();
    res.status(201).json(symptom);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Create a new condition
router.post('/conditions', async (req, res) => {
  try {
    const condition = new Condition(req.body);
    await condition.save();
    res.status(201).json(condition);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all symptoms
router.get('/symptoms', async (req, res) => {
  try {
    const symptoms = await Symptom.find();
    res.json(symptoms);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all conditions
router.get('/conditions', async (req, res) => {
  try {
    const conditions = await Condition.find().populate('symptoms');
    res.json(conditions);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a symptom by ID
router.put('/symptoms/:id', async (req, res) => {
  try {
    const updatedSymptom = await Symptom.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSymptom);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a condition by ID
router.put('/conditions/:id', async (req, res) => {
  try {
    const updatedCondition = await Condition.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCondition);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a symptom by ID
router.delete('/symptoms/:id', async (req, res) => {
  try {
    await Symptom.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a condition by ID
router.delete('/conditions/:id', async (req, res) => {
  try {
    await Condition.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Diagnosis route to match symptoms with conditions
router.post('/diagnosis', async (req, res) => {
  try {
    const { symptoms } = req.body;

    // Find conditions with matching symptoms
    const matchingConditions = await Condition.find({ symptoms: { $in: symptoms } });
    
    res.json(matchingConditions);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


export default router;
