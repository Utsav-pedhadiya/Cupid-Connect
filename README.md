# README.md  

markdown
CupidConnect  

CupidConnect is a modern, secure, and user-friendly dating application built with a React Native front end, a PHP backend, and MySQL as the database. The app is designed to help users create meaningful connections through secure authentication, advanced filtering, and real-time interaction features.  

---

 Features
- Secure OTP Login: Ensure user data safety with OTP-based authentication.  
- Profile Management: Create, edit, and delete user profiles.  
- Subscription System: Access premium features with subscription plans.  
- Real-Time Notifications: Receive updates about requests and interactions.  
- Advanced Filters: Search profiles based on user preferences.  
- Secure Interactions: Send, accept, or reject requests, with contact details shared only upon mutual consent.  

---

 Technologies Used
# Frontend
- Framework: React Native  
- State Management: Context API/Redux  

# Backend
- Language: PHP  
- Framework: None (Plain PHP with MVC structure)  

# Database
- MySQL  

 Installation Guide
# Prerequisites
- XAMPP for PHP and MySQL setup.  
- Node.js and npm/yarn for frontend setup.  
- A code editor (e.g., VSCode).  

# Steps to Install
1. Clone the repository:  
   bash
   git clone https://github.com/username/cupidconnect.git
   
2. Backend Setup:  
   - Place the `backend` folder in the `htdocs` directory of your XAMPP installation.  
   - Configure the `.env` file with your database credentials.  
   - Import the `database.sql` file to MySQL using phpMyAdmin or CLI:  
     bash
     mysql -u [username] -p [database_name] < database.sql
     
   - Start XAMPP’s Apache and MySQL services.  

3. Frontend Setup:  
   - Navigate to the `frontend` folder.  
   - Install dependencies:  
     bash
     npm install
     
   - Start the development server:  
     bash
     npm start
     
   - Update API URLs in the `config.js` file to match the backend server (e.g., `http://localhost/cupidconnect`).  

