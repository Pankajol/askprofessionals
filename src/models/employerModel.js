import mongoose from 'mongoose';
const employerEnquirySchema = new mongoose.Schema({
    website: {
      type: String,
      required: true,
    },
    employees: {
      type: String,
      required: true,
    },
    resourceType: {
      type: String,
      required: true,
    },
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
    company: {
      type: String,
    },
    message: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  const EmployerEnquiry = mongoose.models.EmployerEnquiry || mongoose.model('EmployerEnquiry', employerEnquirySchema);
  
  export default EmployerEnquiry;
  
