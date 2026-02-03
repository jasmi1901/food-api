# Food Menu API (Breakfast, Lunch & Dinner) 🍽️

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
      git clone <https://github.com/jasmi1901/food-api.git>
      cd food-api
  
  # 2️⃣ Install Dependencies
      npm install
  
  # 3️⃣ Configure Environment Variables
       Create a file called .env in the root folder:
       PORT=3000
       MONGO_URI=mongodb://localhost:27017/fooddb
  
  # 4️⃣ Start MongoDB
       mongod
  
  # 5️⃣ Start the API Server
       node server.js
```

#  🚀 API Endpoints
   
   ```bash

      http://localhost:3000/api/foods
   
   ```

# 📍 API Routes 

```bash  

# ✅ GET All Foods
     GET /api/foods

# ✅ GET Foods by Menu Category
     GET /api/foods/menu/breakfast
     GET /api/foods/menu/lunch
     GET /api/foods/menu/dinner

# ✅ GET Food by ID
     GET /api/foods/:id

# ✅ POST Create New Food Item 
     POST /api/foods
     Content-Type: application/json

     Example Body:
      {
        "name": "Pancakes",
        "price": 5.99,
        "category": "breakfast"
      }

# ✅ PUT Update Food Item   
     PUT /api/foods/:id


# ✅ DELETE Food Item
     DELETE /api/foods/:id

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


 

     