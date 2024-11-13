import mongoose from 'mongoose';

const conditionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  symptoms: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Symptom', // Reference to the Symptom model
  }],
});

const Condition = mongoose.model('Condition', conditionSchema);

export default Condition;
