# 🍽️ Food Menu API (Breakfast, Lunch & Dinner) 

This project is a simple REST Web API built using Node.js, Express, and MongoDB.
It allows users to store and retrieve food menu items separated into Breakfast, Lunch, and Dinner categories.

The API communicates over HTTP, supports multiple HTTP methods, stores data in a database, and responds with standard RFC 2616 status codes.

## Features

RESTful API using Express.js

MongoDB database integration using Mongoose

Separate menus for:

        Breakfast
        Lunch
        Dinner

Supports multiple HTTP methods:

        GET
        POST
        PUT
        DELETE



# ⚙️ Setup Instructions (Run Locally) 

```bash

  # 1️⃣ Clone or Download the Project
       git clone https://github.com/jasmi1901/food-api.git
       cd food-api
  
  # 2️⃣ Install Dependencies
       npm install
  
  # 3️⃣ Configure Environment Variables
       Create a file called .env in the root folder and add PORT , MONGO_URI information as below :
       PORT=3000
       MONGO_URI=mongodb://localhost:27017/fooddb

+         
  
  # 4️⃣ Start MongoDB
       mongod
  
  # 5️⃣ Start the API app
       node app.js
```

#  🚀 API Endpoints
   
   ```bash

      http://localhost:3000/api/foods
   
   ```

# 📍 API Routes 

```bash  

# ✅ GET All Foods
     GET http://localhost:3000/api/foods

# ✅ GET Foods by Menu Category
     GET http://localhost:3000/api/foods/meal/breakfast
     GET http://localhost:3000/api/foods/meal/lunch
     GET http://localhost:3000/api/foods/meal/dinner

# ✅ GET Food by ID
     GET http://localhost:3000/api/foods/:id

# ✅ POST Create New Food Item 
     POST http://localhost:3000/api/foods
     Content-Type: application/json

     Example Body:
      {
        "name": "Pancakes",
        "price": 5.99,
        "category": "breakfast"
      }

# ✅ PUT Update Food Item   
     PUT http://localhost:3000/api/foods/:id


# ✅ DELETE Food Item
     DELETE http://localhost:3000/api/foods/:id

```

# Status Codes Used 

## Status Code	

     200     OK	
     201     Created
     400     Bad Request
     404     Not Found	
     500     Internal Server Error

# 🧪 Testing the API
 
     Thunder Client (VS Code Extension)
     Postman


 

     