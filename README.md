SV Academicy - Student Assessment & Community Platform
SV Academicy is a web application designed exclusively for the students of Shree Venkateshwara Hi-Tech Engineering College (SVHEC). This platform enables students to take assessments, showcase their projects, and compete on a campus-wide leaderboard.

✨ Features
The platform offers distinct functionalities for both students and administrators.

👨‍🎓 Student Features:
Secure Authentication: Students can register and log in using their email and password.

Dashboard: View a summary of completed assessments, average scores, and a performance chart.

Assessments: Access a list of active, upcoming, and completed tests.

Live Test Interface: An advanced testing environment complete with a timer, question palette, and malpractice detection (tab switching, fullscreen exit).

Results & Solutions: View scores, ranks, and top performers immediately after test submission. Solutions with correct answers are available after the test period ends.

Community Feed: A space for students to post their projects, certificates, and achievements, and to like and comment on posts from peers.

Profile Management: Students can update their name and profile picture.

👑 Admin Features:
Admin Dashboard: A comprehensive overview showing the total number of students, tests, and submissions.

Test Management: Create new tests, upload questions (via text file or using an AI generator), and manage existing tests by editing or deleting them.

Result Analysis: Analyze test results with metrics like average score and completion rate. Download lists of attended and not-attended students in Excel format.

Student Management: Bulk import student data from an Excel file.

Posts Management: View and moderate all student posts on the community feed.

Leaderboard: Access an overall leaderboard of top-performing students in the college.

🛠️ Tech Stack
Frontend: HTML5, CSS3, JavaScript

Backend & Database: Firebase (Authentication, Firestore, Cloud Functions)

Image Storage: Cloudinary (for profile pictures and posts)

Libraries:

Chart.js: For interactive charts in dashboards.

Boxicons: For modern icons.

xlsx.js: For Excel data import/export in the admin panel.

particles.js: For background animations.

🚀 Getting Started
To set up this project on your local machine, please follow these steps.

Prerequisites
Node.js must be installed.

The Firebase CLI must be installed on your system.

You will need to create a Firebase project and a Cloudinary account.

Installation & Setup
Clone the Repository:

Bash

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Firebase Project Setup:

Create a new project in your Firebase console.

Authentication: Enable the Email/Password sign-in method.

Firestore: Create a Firestore database.

Firebase Functions: Set up Cloud Functions for your project.

Cloudinary Setup:

Log in to Cloudinary and find your Cloud Name and Upload Preset details.

Configuration:

In all relevant HTML and JS files, replace the placeholder firebaseConfig object with your actual Firebase project credentials.

In profile.html and students_post.html, update the CLOUDINARY_CLOUD_NAME and CLOUDINARY_UPLOAD_PRESET variables with your Cloudinary details.

Deploy Firebase Functions:

Navigate to the functions directory.

Bash

cd functions
npm install
Deploy the functions to your Firebase project.

Bash

firebase deploy --only functions
Run the Project:

Open the index.html file in your browser, or use a local development server like the Live Server extension in VS Code.
