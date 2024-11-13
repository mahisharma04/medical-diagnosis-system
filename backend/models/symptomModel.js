import mongoose from 'mongoose';

const symptomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
});

const Symptom = mongoose.model('Symptom', symptomSchema);

export default Symptom;
