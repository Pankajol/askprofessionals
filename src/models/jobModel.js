import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      enum: ['Full time', 'Part time', 'Temporary'],
      required: true,
    },
    EmploymentType: {
      type: String,
      enum: ['On-site', 'Remote', 'Hybrid'],
      required: true,
    },
    AdditionalQuestionType: {
      type: String,
      enum: [
        'What are your salary expectations?',
        'How many years of experience do you have in a similar role?',
        'Where are you located?',
        'Request video applications?',
      ],
      required: true,
    },
    InterviewDateType: {
      type: String,
      enum: ['1-14 days', '14+ days'],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    salary: {
      type: String, // Could also use Number depending on how you handle salary
    },
    experience: {
      type: String, // Could be changed to Number if you prefer numeric values
    },
    description: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Job = mongoose.models.Job || mongoose.model('Job', jobSchema);

export default Job;

// new modelofjob

// import mongoose from 'mongoose';

// const jobSchema = new mongoose.Schema({
//   jobTitle: {
//     type: String,
//     required: true,
//   },
//   jobType: {
//     type: String,
//     required: true,
//   },
//   EmploymentType: {
//     type: String,
//     required: true,
//   },
//   AdditionalQuestionType: String,
//   InterviewDateType: String,
//   location: {
//     type: String,
//     required: true,
//   },
//   salary: {
//     type: Number,
//     required: true,
//   },
//   experience: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   isActive: {
//     type: Boolean,
//     default: true,
//   },
// });

// export default mongoose.models.Job || mongoose.model('Job', jobSchema);
