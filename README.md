Scatch – Admin Product Management & Shop Display

Scatch is a Node.js + Express-based web application that allows an admin to create products with images and styling, and displays those products dynamically on a shop page. Products are stored in MongoDB and rendered using EJS templates.

Setup Instructions

  1️ Clone the repository
  
    ->git clone <your-repo-url>
    ->cd project-folder
  
  2️ Install dependencies
  
    ->npm install
  
  3️ Start MongoDB
  
  ->Make sure MongoDB is running locally.
  
  4️ Run the project
    ->npm start
    or (if using nodemon):
    ->npx nodemon app.js

Routes:
  Route	Description
    -> /owners/admin	Admin dashboard
    -> /owners/products/create	Create new product
    -> /shop	Public shop page

Environment Variables

  Create a .env file in the backend folder:
  PORT=3000
  JWT_KEY=your_jwt_secret
