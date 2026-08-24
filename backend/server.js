require('dotenv').config();
// const generateInterviewReport = require("./src/services/ai.service");
// const { resume, selfDescription, jobDescription } = require("./src/services/temp");

// generateInterviewReport({ resume, selfDescription, jobDescription })
//   .then(report => console.log(JSON.stringify(report, null, 2)))
//   .catch(error => console.error(error));
const app = require('./src/app');
const connectDB = require('./src/config/database');


// Connect to MongoDB
connectDB();

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port ' + (process.env.PORT || 3000));
});

