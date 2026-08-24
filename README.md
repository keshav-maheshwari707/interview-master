# 🚀 Interview Master

**Interview Master** is an AI-powered interview and career preparation platform built using the **MERN Stack** and **Google Gemini AI**.

The platform helps candidates prepare for a specific job by analyzing the **Job Description (JD)** along with their **resume or self-description**. It generates a personalized interview preparation experience including technical questions, behavioral questions, answer approaches, a day-by-day preparation roadmap, an estimated ATS/match score, and an AI-powered resume improvement feature.

---

## ✨ Features

### 🔐 Authentication

* User registration with username, email, and password
* User login using email and password
* Secure password hashing using bcrypt
* JWT-based authentication
* Protected application routes

### 📄 Job Description & Candidate Profile

Users can provide:

* Job Description
* Existing Resume
* OR a Self Description

The application uses this information to understand the requirements of the target role and the candidate's existing skills.

### 🎯 AI-Powered ATS / Match Score

Interview Master analyzes the candidate's profile against the provided Job Description and generates an estimated **ATS/Match Score**.

The analysis helps identify:

* Matching skills
* Relevant experience
* Missing skills
* Important keywords
* Areas that need improvement
* Overall profile-to-job compatibility

> **Note:** The ATS score is an AI-generated estimate and should be used as a preparation aid rather than an exact representation of any company's ATS.

### 💻 Technical Interview Questions

Gemini AI generates technical interview questions based on the target Job Description and candidate profile.

Questions can be tailored around:

* Programming concepts
* Frameworks
* Technologies
* Databases
* Tools
* Role-specific skills
* Candidate projects and experience

### 🧑‍💼 Behavioral Interview Questions

The platform also generates behavioral and HR interview questions relevant to the candidate and target role.

Along with the questions, the application provides an **approach/framework for answering them**, helping candidates structure their responses effectively.

### 📅 Personalized Preparation Roadmap

Interview Master generates a **day-by-day preparation roadmap** based on the requirements of the target job.

The roadmap can help candidates prepare for:

* Technical concepts
* Required technologies
* Programming topics
* Interview questions
* Behavioral interviews
* Revision
* Role-specific preparation

### 📑 AI Resume Generator

The resume generation feature uses the candidate's information and Job Description to generate an improved, job-targeted resume.

It helps optimize:

* Resume content
* Relevant skills
* Job-specific keywords
* Professional descriptions
* Alignment with the target role

### 📕 Resume / PDF Processing

The backend includes functionality for handling uploaded files and processing PDF content, allowing candidate information to be used as part of the AI analysis pipeline.

---

# 🧠 How It Works

```text
                  ┌─────────────────────┐
                  │       User          │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │   Register / Login  │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │   Job Description   │
                  │         +           │
                  │ Resume / Self Desc. │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │    Gemini AI        │
                  │      Analysis       │
                  └──────────┬──────────┘
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
          ▼                  ▼                  ▼
   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
   │ ATS / Match  │   │ Technical &  │   │ Preparation  │
   │    Score     │   │ Behavioral   │   │   Roadmap    │
   │              │   │  Questions   │   │              │
   └──────────────┘   └──────────────┘   └──────────────┘
          │                  │                  │
          └──────────────────┼──────────────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │   AI Resume         │
                  │   Generator         │
                  └─────────────────────┘
```

---

# 🛠️ Tech Stack

## Frontend

* **React.js**
* **Vite**
* **JavaScript**
* **React Router**
* **Axios**
* **Sass / SCSS**

## Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**

## AI

* **Google Gemini AI**
* **Google GenAI SDK**

## Authentication & Security

* **JWT**
* **bcryptjs**
* **Cookie Parser**
* **CORS**
* **dotenv**

## File & Document Processing

* **Multer**
* **PDF Parse**
* **Puppeteer**

## Validation

* **Zod**
* **Zod-to-JSON-Schema**

---

# 📂 Project Structure

The project follows a separate frontend/backend architecture.

```text
interview-master/
│
├── backend/
│   │
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   │   └── ai.service.js
│   │   └── app.js
│   │
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── frontend/
│   │
│   ├── public/
│   ├── src/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   └── interview/
│   │   ├── style/
│   │   ├── App.jsx
│   │   ├── app.routes.jsx
│   │   ├── main.jsx
│   │   └── style.scss
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

The repository currently follows this frontend/backend separation and backend layered structure.

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/keshav-maheshwari707/interview-master.git
```

```bash
cd interview-master
```

---

## 2. Backend Setup

Navigate to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

The backend currently provides a development script using Nodemon.

Create a `.env` file inside the `backend` directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key
```

> Use the exact environment variable names expected by your backend implementation if they differ from the example above.

Start the backend:

```bash
npm run dev
```

---

# 3. Frontend Setup

Open a new terminal and navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend will then provide the local development URL.

The current frontend project uses Vite and provides `dev`, `build`, `lint`, and `preview` scripts.

---

# 🔑 Environment Variables

The application requires environment variables for services such as:

| Variable         | Purpose                          |
| ---------------- | -------------------------------- |
| `PORT`           | Backend server port              |
| `MONGODB_URI`    | MongoDB database connection      |
| `JWT_SECRET`     | JWT authentication secret        |
| `GEMINI_API_KEY` | Google Gemini API authentication |

### ⚠️ Important

Never commit your `.env` file or API keys to GitHub.

Make sure `.env` is included in `.gitignore`.

---

# 🤖 Gemini AI Integration

The core AI functionality of Interview Master is powered by **Google Gemini AI**.

The backend contains a dedicated AI service responsible for AI-related processing.

The AI layer is used to transform the candidate's Job Description and profile information into structured interview-preparation content.

### AI Features

```text
Job Description
       +
Resume / Self Description
       │
       ▼
   Gemini AI
       │
       ├──► ATS / Match Score
       │
       ├──► Technical Questions
       │
       ├──► Behavioral Questions
       │
       ├──► Answer Approach
       │
       ├──► Preparation Roadmap
       │
       └──► Resume Generation
```

---

# 🔒 Security

The application includes several security-related components:

* Password hashing using `bcryptjs`
* JWT-based authentication
* Protected routes
* Environment variables for sensitive credentials
* CORS configuration
* Request validation
* Secure handling of API credentials

Sensitive information such as API keys and database credentials should always remain in environment variables.

---

# 🎯 Example Workflow

A candidate applying for a **MERN Stack Developer** position can provide:

### Job Description

```text
Looking for a MERN Stack Developer with experience in
React.js, Node.js, Express.js, MongoDB, REST APIs and Git.
```

### Candidate Profile

```text
Skills:
JavaScript, React, Node.js, Express, MongoDB

Projects:
E-commerce application
Chat application
Portfolio website
```

Interview Master can then generate:

```text
ATS / Match Score
        ↓
Skill Gap Analysis
        ↓
Technical Interview Questions
        ↓
Behavioral Interview Questions
        ↓
Answer Approaches
        ↓
Day-by-Day Preparation Roadmap
        ↓
Improved Job-Specific Resume
```

This allows the candidate to prepare specifically for the target job instead of following a generic interview-preparation plan.

---

# 📸 Screenshots

Add screenshots of your application here to make the GitHub repository more attractive.

Recommended screenshots:

* Login page
* Registration page
* Home/Dashboard
* Job Description input
* Resume upload
* ATS/Match Score
* Technical interview questions
* Behavioral interview questions
* Preparation roadmap
* AI-generated resume

Example:

```markdown
## 📸 Screenshots

### Login
![Login](./screenshots/login.png)

### Dashboard
![Dashboard](./screenshots/dashboard.png)

### Interview Questions
![Interview Questions](./screenshots/questions.png)

### ATS Score
![ATS Score](./screenshots/ats-score.png)
```

---

# 🚀 Future Enhancements

Some planned/improved features for future versions:

* 🎤 AI-powered mock interviews
* 🗣️ Voice-based interview practice
* 📊 Interview performance analytics
* 🧠 Adaptive questions based on previous answers
* 📄 Improved PDF/DOCX resume parsing
* 📥 Download generated resume as PDF
* 💼 Job recommendations based on candidate skills
* 🔗 LinkedIn profile analysis
* 📈 Preparation progress tracking
* 🔔 Interview preparation reminders
* ☁️ Production deployment and scalability improvements

---

# 💡 Why Interview Master?

Traditional interview preparation often requires candidates to search for:

* What skills are required for the job?
* What technical questions can be asked?
* What HR questions should I prepare?
* What should I study first?
* Does my resume match the Job Description?
* How can I improve my resume?

**Interview Master brings these tasks together into one AI-powered platform.**

> **One Job Description → One Personalized Preparation Plan**

---

# 📚 Learning Outcomes

Building this project provided practical experience with:

* Full-stack MERN development
* REST API development
* React component architecture
* Frontend routing
* Backend architecture
* MongoDB and Mongoose
* Authentication and authorization
* JWT
* Password hashing
* File uploads
* PDF processing
* AI API integration
* Gemini AI
* Prompt engineering
* AI response handling
* Request validation
* Error handling
* Git & GitHub
* Environment variable management

---

# 👨‍💻 Author

## Keshav Maheshwari

**MCA Student | MERN Stack Developer | AI Enthusiast**

### GitHub

[github.com/keshav-maheshwari707](https://github.com/keshav-maheshwari707)

---

# ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

Contributions, suggestions, and feedback are welcome.

---

## 📄 License

This project is developed for **educational and portfolio purposes**.
