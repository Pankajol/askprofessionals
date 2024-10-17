
import mongoose from 'mongoose';

const seekerApplicationSchema = new mongoose.Schema({
 

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  message: {
    type: String,
  },
  resume: {
    type: String, // URL of the uploaded resume (stored as a string)
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const SeekerApplication = mongoose.models.SeekerApplication || mongoose.model('SeekerApplication', seekerApplicationSchema);
export default SeekerApplication;
